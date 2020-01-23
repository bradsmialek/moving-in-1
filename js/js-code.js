var country = prompt("Which country are your visit us?","country here...");


if (country === "usa" || country === "USA")  {
    greetings = 'Hello there! welcome!';
} else if (country === "mexico" || country === "MEXICO" || "mx") {
    greetings = 'Hola! que gusto que nos visites!';
} else {
    greetings = 'So glad you are here!';
}

/* document.write('<h3>' + greetings + "  :-D" + '</hr>'); */
confirm(greetings,true)