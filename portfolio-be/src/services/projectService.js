import db from '../models/index.js';

async function getAllProjectService() {
	try {
		const projects = await db.Project.findAll({
			include: [
				{
					model: db.Skill,
					attributes: ['id', 'name', 'category', 'icon_url'],
					through: {
						attributes: []
					}
				}
			],
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
