//    If the user selects OK, the program asks for the number and calculates
//and prints its square root to the HTML document.
//  If the user selects Cancel, the program prints the text "The square root is not calculated."
//to the HTML document (3p)
//The confirmation window can be displayed with the function confirm().
//The function returns true if the user selects OK. If the user selects Cancel, the function returns false.
//You cannot calculate the square root of a negative number.
//    If the number entered by the user is negative, the program prints
//"The square root of a negative number is not defined" to the HTML document.


 kysymys = confirm('Should I calculate the square root?');

if (kysymys == true) {

     numero = prompt(" input a number");

    if (numero < 0) {
        document.querySelector("#target").innerHTML = "You cannot calculate the square root of a negative number"
    } else {
        document.querySelector("#target").innerHTML = "The defined number is " + Math.sqrt(numero)
    }


} else {
    document.querySelector("#target").innerHTML = "The square root is not calculated."
}











