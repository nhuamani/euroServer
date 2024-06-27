import mysql from 'mysql2'
import 'dotenv/config'

const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

connection.connect((err) => {
    if (err) throw err
    console.log('Connected to MySQL database')
})

export default connection
