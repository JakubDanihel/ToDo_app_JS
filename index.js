//vstup pre ToDo - ked sa zada nieco tak sa to ulozi
const form = document.getElementById("form");
const input = document.getElementById("vstup");

const todos = document.getElementById("todos");

//EL pre zadavanie textu
form.addEventListener("submit", (e) => {
    //zabranenie aby sa stranka automaticky refreshovala
    e.preventDefault();

    //vstup pre zadanie imputu do riadku aby sa ulozil niekde
    const todoText = input.value;

    if(todoText){
        //vlozenie textu do listu v html (text sa vlozi stlacenim enteru)
        const todoEle = document.createElement("li");
        //vlozenie textu
        todoEle.innerText = todoText;
        //vytvorenie novej casti s textom
        todos.appendChild(todoEle);

        //nastavenie ako bude vyzerat text po tom ako dopiseme text a oznacime todo za spravene - zmena je v style.css a stane sa tak kliknutim lavim tlacitkom na mysi
        todoEle.addEventListener("click", () => {
            todoEle.classList.toggle("completed");
        });

        //vymazanie spravenych todo - vymaze sa kliknutim pravim tlacitkom na mysi
        todoEle.addEventListener("contextmenu", (e) => {
            //zabranenie vyskoceniu okna pre pravi klik mysi
            e.preventDefault();
            //vymazanie polosky
            todoEle.remove();
        });

        //vycistenie pola na pisanie po vlozeni textu (text sa vlozi stlacenim enteru)
        input.value = "";
    }
});