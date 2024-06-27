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

export default {
    getAll,
}
