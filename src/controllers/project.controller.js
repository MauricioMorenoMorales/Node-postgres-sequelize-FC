import ProjectModel from '../models/Project.model'

export const createProject = async (req, res) => {
	const { name, priority, description, deliverydate } = req.body
	try {
		const newProject = await ProjectModel.create(
			{
				name,
				priority,
				description,
				deliverydate,
			},
			{
				fields: ['name', 'priority', 'description', 'deliverydate'],
			},
		)
		if (newProject)
			res.status(200).json({
				message: 'Project created Successfuly',
				data: newProject,
			})
		console.log(req.body)
		res.send(req.body)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
		})
	}
}
