import express from 'express'
const router = express.Router()
import teamsController from '../controllers/teamController.js'

router.get('/', teamsController.getAllTeams)
router.get('/:id', teamsController.getTeamById)
router.post('/', teamsController.createTeam)

export default router
