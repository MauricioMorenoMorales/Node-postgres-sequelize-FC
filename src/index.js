import app from './app'

async function main() {
	await app.listen(4444)
	console.log('Server on port 4444')
}

main()
