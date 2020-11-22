import getHash from "./getHash";

const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {

	const apiURL = id ? `${API}${id}` : API;

	try {
		const response = await fetch(apiURL);
		const DATA = await response.json();
		return DATA;
	}
	catch (error) {
		console.log('Fetch error', error);
	}
}

export default getData;