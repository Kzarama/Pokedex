const url = "https://pokeapi.co/api/v2/";

function getRandomInt() {
	return Math.floor(Math.random() * (899 - 1)) + 1;
}

export const getPokemonById = (id: string) => {
	const pokemon = {
		name: "",
		image: "",
		type: "",
		experience: "",
		ability: "",
		id: 0,
		height: 0,
		weight: 0,
	};
	return fetch(`${url}pokemon/${id}`)
		.then((result) => result.json())
		.then((data) => {
			pokemon.name = data["name"];
			pokemon.image = data["sprites"]["front_default"];
			pokemon.type = data["types"][0]["type"]["name"];
			pokemon.experience = data["base_experience"];
			pokemon.ability = data["abilities"][0]["ability"]["name"];
			pokemon.id = data["id"];
			pokemon.height = data["height"];
			pokemon.weight = data["weight"];
			return pokemon;
		})
		.catch((err) => err);
};

export const getRandomPokemon = async () => {
	const pokemon = {
		name: "",
		image: "",
		type: "",
		experience: "",
		ability: "",
		id: 0,
		height: 0,
		weight: 0,
	};
	return fetch(`${url}pokemon/${getRandomInt()}`)
		.then((result) => result.json())
		.then((data) => {
			pokemon.name = data["name"];
			pokemon.image = data["sprites"]["front_default"];
			pokemon.type = data["types"][0]["type"]["name"];
			pokemon.experience = data["base_experience"];
			pokemon.ability = data["abilities"][0]["ability"]["name"];
			pokemon.id = data["id"];
			pokemon.height = data["height"];
			pokemon.weight = data["weight"];
			return pokemon;
		})
		.catch((err) => err);
};
