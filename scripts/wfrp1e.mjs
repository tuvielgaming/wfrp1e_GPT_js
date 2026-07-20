import { WFRPCharacterModel } from "./models/actor-model.mjs";
import { SkillModel } from "./models/skill-model.mjs";
import { WFRPActor } from "./documents/actor.mjs";
import { WFRPCharacterSheet } from "./sheets/character-sheet.mjs";

const { DocumentSheetConfig } = foundry.applications.apps;

// const actorConfig = {
//   character: CharacterModel
// }

Hooks.once("init", () => {
	console.log("WFRP1e | Initializing");

	CONFIG.Actor.dataModels.character = WFRPCharacterModel;
	// Object.assign(CONFIG.Actor.dataModels, actorConfig);
	// });

	// Hooks.once("init", () => {
	CONFIG.Item.dataModels.skill = SkillModel;
	// });

	// Hooks.once("init", () => {
	DocumentSheetConfig.registerSheet(
		Actor,

		"wfrp1e",

		WFRPCharacterSheet,

		{
			types: ["character"],

			makeDefault: true,
		},
	);
});

CONFIG.Item.dataModels = {
	skill: SkillModel,

	career: CareerModel,

	talent: TalentModel,

	spell: SpellModel,

	mutation: MutationModel,

	disease: DiseaseModel,

	criticalWound: CriticalWoundModel,

	weapon: WeaponModel,

	armour: ArmourModel,

	trapping: TrappingModel,
};

CONFIG.Actor.documentClass = WFRPActor;
