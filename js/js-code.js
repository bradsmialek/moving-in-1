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
    var idiom, costMsg;

    if (country === "usa" || country === "USA")  {
        greetings = 'Hello there! How many movers do you need?';
        idiom= "en";
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

    var totalCostMovers = moversCost(movers,idiom);
    // create total cost message for the user
    if (idiom === "en")  {
        costMsg = 'This is the total cost for ' + movers + ' workers in '  + country + ": $ "; 
    } else if (idiom === "es") {
        costMsg = 'Este es el costo total para ' + movers + ' cargadores en ' + country + ":$ "; 
    } else {
        costMsg = 'Total cost for / Costo total para '  + movers + ' workers in / cargadores en '  + country + ": $ "; 
    }
    
    costMsg = costMsg + totalCostMovers;

   
    document.write(costMsg); 
    confirm(costMsg,true)
    
} //function sayHi()

// This funtion obtain the total cost of the movers, depending the day rate of the country
function moversCost(movers,idiom)
{
    var dayRate, totalMoversCost, i;
    totalMoversCost=0;

    if (idiom === "en")  {
        dayRate = 70;
    } else if (idiom === "es") {
        dayRate = 50;
    } else {
        dayRate = 100;
    }
    
    for (i = 0; i < movers; i++) {
        totalMoversCost = totalMoversCost + dayRate;
    }
    return totalMoversCost;
    //return ((dayRate*movers));
} //funtion moversCost