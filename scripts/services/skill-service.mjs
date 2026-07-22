/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Skill Service
 * ----------------------------------------------------------------------------
 * Responsible for preparing derived skill data.
 *
 * This service performs no roll logic.
 * It prepares skill information for character sheets and future roll services.
 * ============================================================================
 */

export class SkillService {
	/**
	 * Prepare derived skill data.
	 *
	 * @param {WFRPActor} actor
	 */
	static prepare(actor) {
		const skills = actor.items.filter((item) => item.type === "skill");

		actor.system.derived ??= {};

		actor.system.derived.skills = skills.map((skill) =>
			this.prepareSkill(actor, skill),
		);
	}

	/**
	 * Prepare a single skill.
	 *
	 * @param {WFRPActor} actor
	 * @param {Item} skill
	 *
	 * @returns {object}
	 */
	static prepareSkill(actor, skill) {
		const characteristicId = skill.system.characteristic;

		const characteristic =
			actor.system.derived?.characteristics?.[characteristicId];

		const characteristicValue = characteristic?.current ?? 0;

		const advances = skill.system.advances ?? 0;

		const modifier = skill.system.modifier ?? 0;

		const total = characteristicValue + advances + modifier;

		return {
			id: skill.id,

			uuid: skill.uuid,

			name: skill.name,

			type: skill.system.type,

			category: skill.system.category,

			characteristic: characteristicId,

			characteristicValue,

			advances,

			modifier,

			total,

			grouped: skill.system.grouped,

			group: skill.system.group,

			specialisations: skill.system.specialisations,
		};
	}

	/**
	 * Returns all owned skills.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {Item[]}
	 */
	static getSkills(actor) {
		return actor.items.filter((item) => item.type === "skill");
	}

	/**
	 * Returns a skill by id or name.
	 *
	 * @param {WFRPActor} actor
	 * @param {string} identifier
	 *
	 * @returns {Item|null}
	 */
	static getSkill(actor, identifier) {
		return (
			this.getSkills(actor).find(
				(skill) => skill.id === identifier || skill.name === identifier,
			) ?? null
		);
	}
}
