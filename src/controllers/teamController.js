import teams from '../models/teamModel.js'

const getAllTeams = (req, res) => {
    teams.getAll((err, data) => {
        if (err)
            res.status(500).json({
                message: err.message || 'Some error occurred while retrieving teams.',
            })
        else res.json(data)
    })
}

const getTeamById = (req, res) => {
    teams.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).json({
                    message: `Not found Teams with id ${req.params.id}.`,
                })
            } else {
                res.status(500).json({
                    message: 'Error retrieving Teams with id ' + req.params.id,
                })
            }
        } else res.json(data)
    })
}

export default {
    getAllTeams,
    getTeamById,
}
