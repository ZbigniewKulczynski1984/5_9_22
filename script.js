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

// const XMLRequestGET = () => {
// 	//reprezentacje requestów
// 	//1. Stworzenie obiektu requesta
// 	const request = new XMLHttpRequest();
// 	//2. konfiguracja requesta przy pomocy open
// 	//dwa wymagane argumenty
// 	//- metoda HTTP(np GET)
// 	//- url(endpoint jakiegoś API z którego chcemy pobrać dane)
// 	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);

// 	//3. wysłanie requesta(metodas send())
// 	request.send();
// 	//4. oczekiwanie i reakcja na response z serwera
// 	request.onload = () => {
// 		//reprezentacja requesta
// 		// funkcja odpali się wtedy gry otrzymamy response z serwera
// 		// console.log(request);
// 		// console.log(request.responseTEXT);
// 		const data = JSON.parse(request.responseText);
// 		console.log(data);
// 	};
// };
// XMLRequestGET();

//b) Fetch API + then chain

// const fetchRequestGET = () =>{
//     //1. wywołaniefunkcji fetch, domyslnie działa na metodzie GET
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((response)=>{//zwraca promisa
//         console.log(response);
//         //prettier-ignore
//         return response.json() //zwracam json,żeby osłużyć promisa
//     })
//     .then((data) => { //w większości przypadków będą 2 razy then
//         console.log(data);
//     })
// }; //promise pudełko na dane którcyh jeszcze nie mamy, ale dostaniemy, rezerwujemy miejsce na te dane
// fetchRequestGET();

//c) Fetch API + async/await

//najprostrze przypomina kod synchroniczny
//zadaniem async/await jest sprawjenie że kod asynchroniczny przypomina kod synchr.

// async function fn1() {}

// const fn = async function () {};

// const asyncFetchRequestGET = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const data = await response.json();
//     console.log(data);
// };

// asyncFetchRequestGET();

// Metoda POST służy do wrzucania danych odwrotność GET
//----------------------------------------------------------

// const XMLRequestPOST = () => {

//     const body = JSON.stringify({
//         name: 'Andrew',
//         age: 30,
//     })

//     const request = new XMLHttpRequest();
//     request.open('POST', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
//     request.onload = function () { //funkcjas zwykła można uzyć strzałkowej
//         console.log(request.status);
//         console.log(request.responseText);

//     };
//     request.onerror = function() {
//         console.error('Something went wrong!!!!');
//     };
// };

// XMLRequestPOST();

// JSON.parse: json => obj js
// JSON.stringify: obj js => json

// Fetch API + then chain

// const fetchRequestPOST = () => {
//     const options = {
//       method: "POST",
//       body: JSON.stringify({
//         name: "Andrew",
//         age: 30,
//       }),
//     };

//     fetch(
//         "http://jsonplaceholder.typicode.com/posts",
//         options
//       )
//       .then((response) => {
//         console.log(response.status);
//         return response.json();
//       })
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   };
//   fetchRequestPOST();

// Fetch API + async/await

//   const asyncFetchRequestPOST = async () => {
//     try {
//       const options = {
//         method: "POST",
//         body: JSON.stringify({
//           name: "Andrew",
//           age: 30,
//         }),
//       };

//       const response = await fetch(
//         "http://jsonplaceholder.typicode.com/posts",
//         options
//       );
//       console.log(response);
//       console.log(response.status);
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   asyncFetchRequestPOST();

//metoda PUT - słuzy do aktualizowania w bazie danych(usuwa cały obiekt)

//POST tworzy nowe miejsca na dane
//PUT weżmie sobie komórke danych, usuniestare dane i wrzuci nowe

// a) XMlHttpRequest
// b) Fetch API + then chain
// c) Fetch API + async/await

//-------------------------------------------------
// const XMLRequestPUT = () => {

//     const body = JSON.stringify({
//         name: 'Zbyszek',
//         age: 38,
//     })

//     const request = new XMLHttpRequest();
//     request.open('PUT', 'https://jsonplaceholder.typicode.com/todos/13')
//     request.send()
//     request.onload = function () {
//         console.log(request.status);
//         console.log(request.responseText);

//     };
//     request.onerror = function() {
//         console.error('Something went wrong!!!!');
//     };
// };

// XMLRequestPUT();

//-----------------------------------------------------------

// const fetchRequestPUT = () => {
//     const options = {
//       method: "PUT",
//       body: JSON.stringify({
//         name: "Zbyszek",
//         age: 20,
//       }),
//     };

//     fetch(
//         "http://jsonplaceholder.typicode.com/posts/77",
//         options
//       )
//       .then((response) => {
//         console.log(response.status);
//         return response.json();
//       })
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
//   };
//   fetchRequestPUT();

//------------------------------------------------------------------

// const asyncFetchRequestPUT = async () => {
//   try {
//     const options = {
//       method: "PUT",
//       body: JSON.stringify({
//         name: "Johny",
//         age: 13,
//       }),
//     };

//     const response = await fetch(
//       "http://jsonplaceholder.typicode.com/posts/99",
//       options
//     );
//     console.log(response);
//     console.log(response.status);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// asyncFetchRequestPUT();

//----------------------------------------------------------------------

//metoda PATCH aktualizuje pojedyncze częsci danych w bazie w tzw miękki sposób, gdy nie ma pozycji to ją doda
//request tak samo jak POST i PUT przyjmuje body
//mutacja obiektu gdy ją co chwilę edytujemy

// const person = {
//   name: 'Zbyszek',
//   age: 38,
//   married: true
// }

// person.age = 39

// const XMLRequestPATCH = () => {
// 	const body = JSON.stringify({
// 		name: 'Zbyszek',
// 		age: 38,
// 		car: 'Skoda',
// 	});

// 	const request = new XMLHttpRequest();
// 	request.open('PATCH', 'https://jsonplaceholder.typicode.com/todos/13');
// 	request.send(body);
// 	request.onload = function () {
// 		console.log(request.status);
// 		console.log(request.responseText);
// 	};

// 	request.onerror = function () {
// 		console.error('Something went wrong!!!!');
// 	};
// };

// XMLRequestPATCH();

// //----------------------------------------------------

// const fetchRequestPATCH = () => {

// 	const options = {
//     method: 'PATCH',
// 		body: JSON.stringify({
// 			name: 'Zbyszek',
// 			age: 38,
// 		}),
// 	};

// 	fetch('http://jsonplaceholder.typicode.com/posts/77', options)
// 		.then((response) => {
// 			console.log(response.status);
// 			return response.json();
// 		})
// 		.then((data) => console.log(data))
// 		.catch((err) => console.error());
// };

// fetchRequestPATCH();

// //-------------------------------

// const asyncFetchRequestPATCH = async () => {
	
// 		const options = {
// 			method: 'PATCH',
// 			body: JSON.stringify({
        
// 				name: 'Johny',
// 				age: 13,
// 			}),
// 		};

//   try {
// 		const response = await fetch(
// 			'http://jsonplaceholder.typicode.com/posts/99',
// 			options
// 		);

// 		console.log(response);
// 		console.log(response.status);
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (err) {
// 		console.error('Something went wrong!!!!');
// 	}
// };
// asyncFetchRequestPATCH();

//----------------------------
//Metoda DELETE
//


const XMLRequestDELETE = () => {
  const body = JSON.stringify ({
    name: 'Zbyszek'
  })

  const request = new XMLHttpRequest ();
  request.open('DELETE', 'https://jsonplaceholder.typicode.com/todos/13');
  request.send();
  request.onload = function () {
    console.log(request.status);
    console.log(request.responseText);
  };

  request.onerror = function () {
    console.error('Something went wrong!!!!');
     	};
     };
    
    XMLRequestDELETE();

//---------------------------------------------

const fetchRequestDELETE = () => {

  const options = {
    method: 'DELETE',
    
  };

  fetch('http://jsonplaceholder.typicode.com/posts/77', options)
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error('Something went wrong!!!!'))

};

fetchRequestDELETE();

//------------------------------------


const asyncFetchRequestDELETE = async () => {

  const options = {
    method: 'DELETE',
    body: JSON.stringify({

    }),
  };
    try {
      const response = await fetch(
      			'http://jsonplaceholder.typicode.com/posts',
      			options
       		);

          console.log(response);
          console.log(response.status);

          const data = await response.json();
          console.log(data);

    } catch(err) {
  console.error('Something went wrong!!!!')
}

};

  asyncFetchRequestDELETE();
