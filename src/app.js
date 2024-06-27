import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import teamsRoute from './routes/teamRoute.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/teams', teamsRoute)

app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
    console.log(`App listening on port http://localhost:${app.get('port')}`)
})
