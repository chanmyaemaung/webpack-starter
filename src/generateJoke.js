import axios from 'axios'

function generateJoke() {
	const apiUrl = 'https://icanhazdadjoke.com'

	const config = {
		headers: {
			Accept: 'application/json',
		},
	}

	axios.get(apiUrl, config).then((res) => {
		document.getElementById('joke').innerHTML = res.data.joke
	})
}

export default generateJoke
