import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
    console.log(`App listening on port http://localhost:${app.get('port')}`)
})
