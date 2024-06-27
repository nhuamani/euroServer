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

export default {
    getAllTeams,
}
