import skillService from "../services/skillService.js";

async function getSkillController(req, res) {
    try {
        const { name } = req.query;
        const skills = name
            ? await skillService.MySkills(name)
            : await skillService.getAllSkillService();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getSkillController
};