// import {DocumentSheetV2,HandlebarsApplicationMixin} from foundry.applications.api;
import { prepareCharacteristics } from "../helpers/characteristic-view.mjs";
import { buyCharacteristicAdvance } from "../services/advancement-service.mjs";

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export class WFRPCharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
	// static DEFAULT_OPTIONS = {
	//     classes: [
	//         "wfrp1e",
	//         "character-sheet"
	//     ],
	//     position: {
	//         width: 950,
	//         height: 1100
	//     },
	//     window: {
	//         title:"WFRP 1e Character Sheet"
	//     }
	// };

	static DEFAULT_OPTIONS = {
		classes: ["wfrp1e", "character-sheet"],
		actions: {
			editCharacteristic: WFRPCharacterSheet.editCharacteristic,
		},
	};

	static PARTS = {
		main: {
			template: "systems/wfrp1e/templates/actor/character-sheet.hbs",
		},
	};

	// async _prepareContext(options) {
	//     const context = await super._prepareContext(options);
	//     const actor = this.document;
	//     return {
	//         ...context,
	//         actor,
	//         system: actor.system,
	//         items: actor.items
	//     };
	// }

	// async _prepareContext(options){
	//     const context = await super._prepareContext(options);
	//     const actor = this.document;
	//     return {
	//         ...context,
	//         actor,
	//         characteristics: prepareCharacteristics(actor)
	//     };
	// }

	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		const career = await getCareer(this.document);
		// const actor = this.document;
		const careerSkills = await prepareCareerSkills(actor, career);

		return {
			...context,
			// actor,
			// characteristics: prepareCharacteristics(actor),
			career,
			careerSkills,
		};
	}

	activateListeners(html) {
		super.activateListeners(html);
		html.querySelectorAll(".characteristic-input").forEach((input) => {
			input.addEventListener("change", async (event) => {
				const path = event.currentTarget.dataset.path;

				const value = Number(event.currentTarget.value);

				await this.document.update({ [path]: value });
			});
		});

		html.querySelectorAll(".advance-box").forEach((box) => {
			box.addEventListener("click", async (event) => {
				if (event.currentTarget.dataset.bought === "true") return;

				const key = event.currentTarget.dataset.characteristic;

				await this.purchaseCharacteristicAdvance(key);
			});
		});

		html
			.querySelector(".sheet-body")
			.addEventListener("drop", this._onDrop.bind(this));

		html.querySelectorAll(".career-skill.not-owned").forEach((skill) => {
			skill.addEventListener("click", async (event) => {
				const uuid = event.currentTarget.dataset.skill;

				await this.purchaseSkill(uuid);
			});
		});
	}

	async purchaseCharacteristicAdvance(characteristic) {
		const confirmed = await foundry.applications.api.DialogV2.confirm({
			window: {
				title: "Purchase Advance",
			},
			content: `Buy one advance for ${characteristic.toUpperCase()}?`,
		});

		if (!confirmed) return;

		await buyCharacteristicAdvance(this.document, characteristic);
		// canSpendXP(actor,cost) add also import {canSpendXP} from "../rules/xp.mjs";
	}

	async _onDrop(event) {
		event.preventDefault();
		const data = TextEditor.getDragEventData(event);

		if (data.type !== "Item") return;

		const item = await fromUuid(data.uuid);

		if (!item) return;

		if (item.type === "career") {
			await this.assignCareer(item);
		}
	}

	async assignCareer(career) {
		await this.document.update({
			"system.career.sourceId": career.uuid,
			"system.career.name": career.name,
		});

		ui.notifications.info(`${career.name} career selected`);
	}

	async purchaseSkill(uuid) {
		const confirmed = await foundry.applications.api.DialogV2.confirm({
			window: {
				title: "Learn Skill",
			},
			content: "Purchase this skill?",
		});

		if (!confirmed) return;

		await buySkill(this.document, uuid);
	}
}
