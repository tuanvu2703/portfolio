import projectController from '../controllers/projectController.js';
import skillController from '../controllers/skillController.js';
import { Router } from 'express';

const router = Router();

router.get('/projects', projectController.getProjectController);
router.get('/skills', skillController.getSkillController);



export default router;