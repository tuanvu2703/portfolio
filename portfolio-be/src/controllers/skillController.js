import skillService from "../services/skillService.js";

const getSkills = async (req, res) => {
    try {
        const skills = await skillService.getAllSkills();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getSkills
};