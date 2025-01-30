import express from 'express'
import teamsController from '../controllers/teamController.js'

const router = express.Router()

router.get('/', teamsController.getAllTeams)
router.get('/:id', teamsController.getTeamById)
router.post('/', teamsController.createTeam)
router.put('/:id', teamsController.updateTeamById)
router.delete('/:id', teamsController.deleteTeamById)

export default router
