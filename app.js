// //Chap #21-25 task 1
// var firstname = prompt("Enter your first name");
// var secondname = prompt("Enter your second name");
// var fullname = (firstname + " " + secondname)
// alert("Hello" + " " + fullname + "!");
// //task 2
// var mobile = prompt("Enter your favourite Mobile phone model:");
// var index = mobile.length;
// document.write("My favourite phone is :" + mobile + "<br>");
// document.write("Length of string :" + index + "<br>");
// //task 3
// var str = ("Pakistani");
// var index = (str.indexOf ("n"));
// document.write("String:" + str + "<br>");
// document.write("Index of 'n' :" + index + "<br>") ;
// //task 4
// var str = ("Hello WorLd");
// var lastindex = (str.indexOf ("L"));
// document.write("String:" + str + "<br>");
// document.write("Index of 'l' :" + lastindex + "<br>") ;
//task 5
// var str = ("Pakistani");
// var char = str[3];
// document.write("String:" + str + "<br>");
// document.write("Character at index 3 :" + char + "<br>") ;
//task 6
// var s1 = prompt("Enter your first name");
// var s2 = prompt("Enter your second name");
// var s3 = s1.concat(s2);
// alert("Hello" + " " + s3 + "!");
// //task 7
// var city1 = ("Hyderabad");
// var city2 = city1.replace("Hyder","Islam");
// document.write("City:" + city1 + "<br>");
// document.write("After replacement:" + city2 + "<br>");
//task 8
// var message = ("Ali and Sami are best friends. They play cricket and football together");
// var replace = message.replace("and","&");
// document.write(replace);
//task 9
// var str = "472";
// var number = parseInt(str);
// document.write("Value:" + " " + str + "<br>");
// document.write("Type : String" + "<br>");
// document.write("Value:" + " " + number + "<br>");
// document.write("Type : Number" + "<br>");
//task 10
// var input = prompt("Write a word:");
// var uppercase = input.toUpperCase();
// document.write("User input:" + input + "<br>");
// document.write("Upper case:" + uppercase + "<br>");
//task 11
//  var userinput = prompt("Write a word:");
//  var firstchar = userinput.slice(0,1);
//  firstchar = firstchar.toUpperCase();
//  var otherchar = userinput.slice(1);
//  otherchar = otherchar.toLowerCase();
//  var userinput = firstchar+otherchar;
//  document.write(userinput);
//task 12
// var num = 35.36;
// var str = (num.toString());
// document.write("Number:" + num + "<br>");
// document.write("Result:" + str + "<br>");
//task 13
//var username = prompt("Enter your Username:");
//var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ;
//if (username.match(format)){
//alert("Invalid username");
//}
//task 14
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to ABC bakery! what do you want to order sir/ma'am" , "Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryitems = array.indexOf(bakery);
// if (array.indexOf(bakery) != -1){
//     document.write(bakery + " " + "is available at index" + " " + bakeryitems + "in our bakery");
// }
// else {
//     document.write(bakery + "is not available in our bakery");
// }
//task 16
 //var university = ("University of Karachi"); 
//var arr = university.split("");
//for (var i = 0 ; i < arr.length; i++){
//document.write(arr[i] + "<br>")
//}
//task 17
//var country = prompt("Enter your Country name:");
//var countrylenght = country.length;
//document.write("the last character is" + country.charAt(countrylenght-1))
//task 18
//var str = ("The quick brown fox jumps over the lazy dog");
//var intolower = str.toLowerCase();
//var count = intolower.match(/the/g).length;
//document.write("There are" ) + count + " occurance(s) of 'the' "
//Chap 26-30 task 1
// var number = 3.45216;
// var floor = Math.floor(number);
// var round = Math.round(number);
// var ceil = Math.ceil(number);
// document.write("Number: " + number + "<br>");
// document.write("Floor: " + floor + "<br>");
// document.write("Round: " + round + "<br>");
// document.write("Ceil: " + ceil + "<br>");
// // TASK 2
// var number = -3.45216;
// var floor = Math.floor(number);
// var round = Math.round(number);
// var ceil = Math.ceil(number);
// document.write("Number: " + number + "<br>");
// document.write("Floor: " + floor + "<br>");
// document.write("Round: " + round + "<br>");
// document.write("Ceil: " + ceil + "<br>");
// // task 3
// var number = -6;
// var abs = Math.abs(number);
// document.write("The absolute value of " + number + " is " + abs + "<br>")
// // task 4
// var number = Math.random();
// var dice = (number*6) + (+1);
// document.write("Random Dice value: " + Math.floor(dice))
// // task 5
// var number = Math.random();
// var random = Math.floor((random*2) + (+1));
// document.write(random + "<br>")
// if (random === 2){
//     document.write("Random Coin Value Head <br>")
// }
// else if (random === 1){
//     document.write("Random Coin Value Tail <br>")
// }
// // task 6
// var number = Math.random();
// var randomnumber = (number*100) + (+0.1);
// document.write("Random number between 1 and 100:" + Math.floor(randomnumber))
// // task 7
// var userweight = prompt("Enter your weight");
// var a = parseFloat(userweight);
// document.write(a);
// //task 8
// var number = Math.random();
// var secretnumber = Math.floor( (number*10) + (+1));
// document.write(secretnumber)
// var guess = prompt("Guess the number between 1 - 10: ");
// if (guess === secretnumber){
//     alert("Congratulations User: ")
// }
// else{
//     alert("Try Again")
// }

// Chap 31-34 task 1
var date = new Date();
document.write(date + "<br>")

//task 2
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date = new Date();
var thismonth = months[date.getMonth()];
document.write("Current Month:" + thismonth + "<br>");

//task 3
var date = new Date();
var datestr = date.toString();
var day = datestr.slice(0,3);
document.write("Today is " + day + "<br>")

//task 4
var date = new Date();
var datestr = date.toString();
var day = datestr.slice(0,3);
if (day === "Sun" || day === "Sat"){
    document.write("Its Fun day" + "<br>")
}

//task 5
var a = new Date();
var b = a.toString();
var date = b.slice(8,2);
var c = parseInt(date);
if (c <= 15 ){
    document.write("The First fifteen day of month" + "<br>");
} else if (c >= 16){
    document.write("last days of Month " + "<br>");
}

//task 6
var date = new Date();
document.write("Current date:" + date + "<br>");
var todaymili = date.getTime();
document.write("Milliseconds: " + todaymili + "<br>");
var todaymin = todaymili / (1000*60*60);
document.write("Minutes:" + todaymin + "<br>");

//task 7
var date = new Date();
var time = date.getHours();
if (time < 12){
    alert("Its AM")
} else if (time >= 12 && time != 0) {
    alert("Its PM")
}

//TASK 9
var date = new Date("June 18 2015");
var junemili = date.getTime();
var todaydate = new Date();
var todaymili = todaydate.getTime()
var mili = todaymili - junemili;
var days = mili/(1000*60*60*24)
document.write(Math.floor(days) + "days have passed since june 18 2015 <br>")

//task 10
var date = new Date ("2015");
var refdate = new Date ("Sat Dec 2015 22:50:16")
var mili = date.getTime();
var refmili = refdate.getTime();
var diffmili = refmili - mili;
var sec = diffmili/(1000*60);
document.write(sec)

//Chap 35-38 task 1
function date () {
    var a = new Date()
    document.write(a);
}
date();

//task 2
function Fullname(){
    var firstname = prompt("Enter your first name: ");
    var lastname = prompt("Enter your last name: ");
    document.write(firstname + " " + lastname)
}
Fullname();

//task 3
function sum (a,b){
    document.write((+a) + (+b))
}
var number = sum (prompt("Enter first name") , prompt("Enter second number"))

//task 4
function calc (firstnumber,operator,secondnumber){
    if (operator === "+"){
        return (+firstnumber) + (+secondnumber)
    } else if (operator === "_"){
        return firstnumber - secondnumber
    } else if (operator === "/"){
        return firstnumber / secondnumber
    } else if (operator === "*"){
        return firstnumber * secondnumber
    } else {
        return "Operator not found"
    }
}
var answer = calc (prompt("Enter your first number"), prompt("Enter your operator"), prompt("Enter your second number"))
document.write(answer)
    
    //task 5
    function square (a){
        document.write(a * a)
    }
    var number = square(prompt("Enter your number: "))

    //task 6
    var f = [];
    function factorial (n) {
        if (n == 0 || n ==1)
        return 1;
        if (f[n] > 0)
        return f[n];
        return f[n] = factorial(n-1) * n;
    }
    var n = factorial(prompt("Enter your number"))
    document.write(n)

    //task 7
    function counting (start,end){
        for ( var i = start ; i <=end ; i++){
            document.write(i + " ")
        }
    }
    var count = counting(prompt("counting starts at: "), prompt("counting ends at: "))

    //task 8
    function sqrhyp (base, perpendicular){
  var sqrHypotenuse = (base ) + (perpendicular ) 
var Hypotenuse = Math.sqrt(sqrHypotenuse)
document.write("Hypotenuse: "+Hypotenuse)
    }
    var Hypotenuse = sqrhyp(Math.pow(prompt("value of base"),2),Math.pow("Value of Perpendicular"),2)

    // task 9
    function area (width= prompt("enter width"),height = prompt("enter Height")){
        var A = width * height
        document.write("Area of rectangle is "+A)

    }
    
    
    // task 10
    function palindrome(){
        var word = prompt ("enter your word: ")
        var match = "";
        for(var i = word.length - 1; i >=0 ; i--){
            match += word[i]
        }
        if (match === word){
            document.write("this is palindrome word");
        }else {
            document.write("this is not palindrome")
        }
    }
    palindrome();

    //task 11
    function capital(a){
        var b = a;
        var uppercaase = b.toUpperCase();
        document.write(uppercase)
    }
    var str = capital(prompt("Write a sentence"))