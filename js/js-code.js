function validateEmail(varEmail, varAge)
{
    document.write(varEmail + "    " + varAge);
    // document.write("validateEmail");
    // confirm("eMail validated",true);
   

} //funtion validateEmail()


// This function ask for the country of the user and say hi in English or spanish
function sayHi()
{
    var country = prompt("Which country are your visit us?","country here...");
    var idiom;

    if (country === "usa" || country === "USA")  {
        greetings = 'Hello there! How many movers do you need?';
        idiom= "eng";
    } else if (country === "mexico" || country === "MEXICO" || country ==="mx") {
        greetings = 'Hola! cuántas personas de mudanza necesitas?';
        idiom="es";
    } else {
        greetings = 'Movers needed? / Cargadores a necesitar ?';
        idiom="mix";
    }

    var movers = prompt(greetings,2);
    while((movers <0) || (isNaN(movers))) {
        movers = prompt(greetings,2);
    }

    

    //confirm(greetings,true)
    //greetings = "<i>" + greetings + "</i>"
    document.write('<h3>' + idiom + "  " + movers + '</hr>'); 
    
} //function sayHi()








/*var country = prompt("Which country are your visit us?","country here...");

if (country === "usa" || country === "USA")  {
    greetings = 'Hello there! welcome!';
} else if (country === "mexico" || country === "MEXICO" || "mx") {
    greetings = 'Hola! que gusto que nos visites!';
} else {
    greetings = 'So glad you are here!';
}

/* document.write('<h3>' + greetings + "  :-D" + '</hr>'); * /
confirm(greetings,true) */