import db from '../models/index.js';

async function getAllProjectService() {
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
	getAllProjectService
};
