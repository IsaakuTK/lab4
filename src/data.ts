export async function obtener_starwars() {
	try {
		const arrayS=[];
		const n=10;
		for (let index = 1; index <= n; index++) {
			const data = await fetch('https://lotrapi.co/api/v1/characters/' + index);
			const star= await data.json();
			console.log(star);
			arrayS.push(star);
		};
		return arrayS;
	} catch (error) {
		console.log(error);
	}
}

		