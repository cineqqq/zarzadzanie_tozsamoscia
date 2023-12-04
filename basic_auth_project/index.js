// zaimportowanie potrzebnych modułów
const express = require("express");
var path = require('path');


const app = express(); //inicjalizacja aplikacji express

function authentication(req, res, next) { //utworzenie funkcji do obsługi autoryzacji
    var authheader = req.headers.authorization; //utworzenie zmiennej nagłówka autoryzacji
    console.log(req.headers);

    if (!authheader) { //sprawdzenie, czy nagłówek autoryzacji istnieje (jeżeli nie, to zwracany jest błąd 401)
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
        }

        var auth = new Buffer.from(authheader.split(' ')[1],'base64').toString().split(':'); //wyluskanie loginu i hasla
        var user = auth[0];
        var pass = auth[1];

    if (user == 'admin' && pass == 'admin') { //walidacja loginu i hasla (w tym przypadku login i haslo to "admin")
        ///jezeli dane logowania sie ZGADZAJA to wykonuje sie kod ponizej
            next();
        } else { //jezeli dane logowania sie NIE zgadzaja to wykonuje sie kod ponizej
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
}


app.use(authentication) //kazde zapytanie przechodzi przez funkcje authentication
app.use(express.static(path.join(__dirname, 'public'))); //wskazanie lokalizacji plikow dla serwera ("public")

app.listen((3000), () => { //uruchomienie serwera (nasluchuje na porcie 3000)
    console.log("Server is Running");
})
