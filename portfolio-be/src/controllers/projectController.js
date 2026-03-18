import ProjectService from '../services/projectService.js';

async function getProjectController(req, res){
    try {
        const projects = await ProjectService.getAllProjectService();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getProjectController
};