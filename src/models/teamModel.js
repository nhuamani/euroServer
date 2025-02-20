import db from '../config/database.js'

const getAll = (result) => {
    let query =
        'SELECT t.id, t.name, t.status, t.created_at, t.updated_at, c.name as country FROM teams t INNER JOIN countries c ON t.country_id = c.id'

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

const updateById = (id, team, result) => {
    db.query('UPDATE teams SET name = ?, country = ?, status = ? WHERE id = ?', [team.name, team.country, team.status, id], (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found Teams with the id
            result({ kind: 'not_found' }, null)
            return
        }

        console.log('updated teams: ', { id: id, ...team })
        result(null, { id: id, ...team })
    })
}

const deleteById = (id, result) => {
    db.query('DELETE FROM teams WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found Teams with the id
            result({ kind: 'not_found' }, null)
            return
        }

        console.log('deleted teams with id: ', id)
        result(null, res)
    })
}

export default {
    getAll,
    findById,
    create,
    updateById,
    deleteById,
}
