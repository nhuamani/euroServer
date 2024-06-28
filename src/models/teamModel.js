import db from '../config/database.js'

const getAll = (result) => {
    let query = 'SELECT * FROM teams'

    db.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(null, err)
            return
        }

        console.log('teams: ', res)
        result(null, res)
    })
}

const findById = (id, result) => {
    let query = `SELECT * FROM teams WHERE id = ${id}`

    db.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }

        if (res.length) {
            console.log('found teams: ', res[0])
            result(null, res[0])
            return
        }

        // not found Teams with the id
        result({ kind: 'not_found' }, null)
    })
}

const create = (newTeam, result) => {
    // TODO: VALIDATE THAT TEAMS WITH THE SAME NAME ARE NOT CREATED
    db.query('INSERT INTO teams SET ?', newTeam, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }

        console.log('created teams: ', { id: res.insertId, ...newTeam })
        result(null, { id: res.insertId, ...newTeam })
    })
}

export default {
    getAll,
    findById,
    create,
}
