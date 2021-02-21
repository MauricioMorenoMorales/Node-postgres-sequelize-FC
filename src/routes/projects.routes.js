import { Router } from 'express'
const router = Router()

import * as Controller from '../controllers/project.controller'

// /api/projects
router.post('/', Controller.createProject)

export default router
