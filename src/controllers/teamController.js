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

const createTeam = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        })
    }

    // Create a Tutorial
    const newTeam = {
        name: req.body.name,
        country: req.body.country,
    }

    // Save Tutorial in the database
    teams.create(newTeam, (err, data) => {
        if (err)
            res.status(500).json({
                message: err.message || 'Some error occurred while creating the Tutorial.',
            })
        else res.json(data)
    })
}

const updateTeamById = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!',
        })
    }

    console.log(req.body)

    let updatedTeam = { name: req.body.name, country: req.body.country, status: req.body.status }

    teams.updateById(req.params.id, updatedTeam, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).json({
                    message: `Not found Teams with id ${req.params.id}.`,
                })
            } else {
                res.status(500).json({
                    message: 'Error updating Teams with id ' + req.params.id,
                })
            }
        } else res.json(data)
    })
}

export default {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeamById,
}
