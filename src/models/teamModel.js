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

export default {
    getAll,
    findById,
}
