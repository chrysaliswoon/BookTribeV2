module.exports = [
	{
		context: [ '/**' ],
		// target: 'https://worksheet-quest.up.railway.app/',
		target: 'http://localhost:8080/',
		secure: false,
		headers: {
            Connection: "keep-alive"
        }
	}
]