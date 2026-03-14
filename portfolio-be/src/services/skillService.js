import db from '../models/index.js';

const getAllSkills = async() => {
    try {
        const skills = await db.Skill.findAll({
            order: [['createdAt', 'DESC']]
        });
        return skills;
    } catch (error) {
        throw new Error(`Get skills failed: ${error.message}`);
    }
}

export default {
    getAllSkills
};