const fetchJSON = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
    request.onload = function () {
      // console.log(typeof request.responseText);
      // console.log(request.responseText);
      // console.log(JSON);
      const data = JSON.parse(request.responseText);
      console.log(data);
      const jsonString = JSON.stringify(data);
      console.log(jsonString);
    };
  };
  fetchJSON();
  // JEŻELI DOSTAJESZ RESPONSE OD SERWERA, TO DANE BĘDĄ W JSON
  // ŻEBY PRACOWAĆ NA TYCH DANYCH W JS, MUSIMY NAJPIERW PRZEROBIĆ JSON NA ZWYKŁY JSOWY OBIEKT
  // JSON.parse()
  
  // JEŻELI WYSYŁASZ DANE NA SERWER, TO MUSISZ ZADBAĆ O TO, ŻEBY WYSŁANE DANE NIE BYŁY OBIEKTEM JSOWYM, TYLKO STRINGIEM JSONOWYM
  // JSON.stringify()
  
  const x = {
    email: "1213@123.pl",
    password: "12343",
  };
  // JSON.stringify()
  // wysyłanie

  //metody HTTP

  //1. Metoda GET
  //pobieranie danych z serwera
  //a) XMLHttpRequest
  // https://jsonplaceholder.typicode.com/todos/

    const XMLHttpRequest = () => { //reprezentacje requestów
        //1. Stworzenie obiektu reQuesta
        const request = new XMLHttpRequest()
        //2. konfiguracja requesta przy pomocy open
        //dwa wymagane argumenty
        //metoda HTTP(np GET)
        //url(endpoint jakiegoś API z którego chcemy pobrać dane)
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    }

  //b) Fetch API + then chain
  //c) Fetch API + async/await
