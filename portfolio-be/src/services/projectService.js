import db from '../models/index.js';

const getAllProjects = async () => {
	try {
		const projects = await db.Project.findAll({
			order: [['createdAt', 'DESC']]
		});

		return projects;
	} catch (error) {
		throw new Error(`Get projects failed: ${error.message}`);
	}
};


export default {
	getAllProjects
};
