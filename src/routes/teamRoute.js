import express from 'express'
const router = express.Router()
import teamsController from '../controllers/teamController.js'

router.get('/', teamsController.getAllTeams)

export default router
