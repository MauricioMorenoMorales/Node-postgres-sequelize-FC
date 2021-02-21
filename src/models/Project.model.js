import Sequelize from 'sequelize'
import sequelizeConnection from '../database/database'

import TasksModel from './Tasks.model'

const ProjectModel = sequelizeConnection.define(
	'projects',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		name: {
			type: Sequelize.TEXT,
		},
		priority: {
			type: Sequelize.INTEGER,
		},
		description: {
			type: Sequelize.TEXT,
		},
		deliveryDate: {
			type: Sequelize.DATE,
		},
	},
	{
		timestamps: false,
	},
)

ProjectModel.hasMany(TasksModel, { foreignKey: 'projectId', sourceKey: 'id' })
TasksModel.belongsTo(ProjectModel, { foreignKey: 'projectId', sourceKey: 'id' })

export default ProjectModel
