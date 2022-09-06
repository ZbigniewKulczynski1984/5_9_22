// const fetchJSON = () => {
// 	//const request = new XMLHttpRequest();
// 	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// 	request.send();
// 	request.onload = function () {
// 		// console.log(typeof request.responseText);
// 		// console.log(request.responseText);
// 		// console.log(JSON);
// 		const data = JSON.parse(request.responseText);
// 		console.log(data);
// 		const jsonString = JSON.stringify(data);
// 		console.log(jsonString);
// 	};
// };
// fetchJSON();
// JEŻELI DOSTAJESZ RESPONSE OD SERWERA, TO DANE BĘDĄ W JSON
// ŻEBY PRACOWAĆ NA TYCH DANYCH W JS, MUSIMY NAJPIERW PRZEROBIĆ JSON NA ZWYKŁY JSOWY OBIEKT
// JSON.parse()

// JEŻELI WYSYŁASZ DANE NA SERWER, TO MUSISZ ZADBAĆ O TO, ŻEBY WYSŁANE DANE NIE BYŁY OBIEKTEM JSOWYM, TYLKO STRINGIEM JSONOWYM
// JSON.stringify()

// JSON.stringify()
// wysyłanie

//metody HTTP

//1. Metoda GET
//pobieranie danych z serwera
//a) XMLHttpRequest
// https://jsonplaceholder.typicode.com/todos/

const XMLRequestGET = () => {
	//reprezentacje requestów
	//1. Stworzenie obiektu requesta
	const request = new XMLHttpRequest();
	//2. konfiguracja requesta przy pomocy open
	//dwa wymagane argumenty
	//- metoda HTTP(np GET)
	//- url(endpoint jakiegoś API z którego chcemy pobrać dane)
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);

	//3. wysłanie requesta(metodas send())
	request.send();
	//4. oczekiwanie i reakcja na response z serwera
	request.onload = () => {
		//reprezentacja requesta
		// funkcja odpali się wtedy gry otrzymamy response z serwera
		console.log(request);
		console.log(request.responseTEXT);
		const data = JSON.parse(request.responseText);
		console.log(data);
	};
};
XMLRequestGET();


//b) Fetch API + then chain
//c) Fetch API + async/await
