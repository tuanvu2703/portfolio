import db from '../models/index.js';
import { Op } from 'sequelize';

async function getAllSkillService() {
    try {
        const skills = await db.Skill.findAll({
            order: [['createdAt', 'DESC']]
        });
        return skills;
    } catch (error) {
        throw new Error(`Get skills failed: ${error.message}`);
    }
}

async function MySkills(name){
    try {
        const where = {};

        if (name && name.trim()) {
            where.name = {
                [Op.iLike]: `%${name.trim()}%`
            };
        }

        const skills = await db.Skill.findAll({
            where,
            order: [['createdAt', 'DESC']]
        });
        return skills;
    } catch (error) {
        throw new Error(`Get skills failed: ${error.message}`);
    }
}

export default {
    getAllSkillService,
    MySkills
};