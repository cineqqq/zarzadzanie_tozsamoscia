const loginForm = document.getElementById("login-form"); //wskazanie z jakiego formularza skrypt ma korzystać
const loginButton = document.getElementById("login-form-submit"); //wskazanie jaki button ma wywoływać akcję
const loginErrorMsg = document.getElementById("login-error-msg"); //ustawienie odniesienia do ukrytego bloku w pliku HTML. Po wpisaniu błędnego hasła jest on wyświetlany.

loginButton.addEventListener("click", (e) => { //oczekiwanie na naciśnięcie wyżej zdefiniowanego buttona
	e.preventDefault(); //zatrzymanie domyślnego działania przeglądarki
	const username = loginForm.username.value; //ustawienie zmiennej username odpowiadającej polu username w formularzu (do późniejszej walidacji)
	const password = loginForm.password.value; //analogicznie jak w punkcie wyżej, tylko że z polem password

    if (username === "admin" && password === "admin") { //jeżeli username i password są równe "admin" to skrypt przechodzi do bloku niżej, jeżeli nie to przechodzi do bloku else
		alert("You have successfully logged in."); //wyświetlenie alertu o zalogowaniu się (dane są prawidłowe)
		location.reload(); //odświeżenie strony
    } else { //jeżeli login i hasło nie są zgodne z założeniami to wykonywane są poniższe instrukcje
        alert("Wrong login or password."); //wyświeltenie alertu o tym, że hasło lub login są nieprawidłowe
        loginErrorMsg.style.opacity = 1; //wyświetlenie bloku zdefiniowanego w css

		
        
		
    }
})
