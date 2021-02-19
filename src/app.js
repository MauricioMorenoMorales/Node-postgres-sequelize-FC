import express from 'express'
import morgan from 'morgan'
const app = express()

//Local modules
import projectRoutes from './routes/projects.routes'
import taskRoutes from './routes/tasks.routes'

//Settings
app.set('port', )

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

//Routes
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

export default app
