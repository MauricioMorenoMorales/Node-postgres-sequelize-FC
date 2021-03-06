import Sequelize from 'sequelize'
import databaseConnection from '../database/database'

const TasksModel = databaseConnection.define(
	'task',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		name: {
			type: Sequelize.TEXT,
		},
		done: {
			type: Sequelize.BOOLEAN,
		},
		projectId: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	},
)

export default TasksModel
