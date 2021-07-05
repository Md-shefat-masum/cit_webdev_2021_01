let names, rolls, years;

names = "abdul kuddus";
rolls = "80";
years = "nine";


function print_details(name, roll, year) {
    console.log(`my name is ${name}`);
    console.log('my roll is ' + roll);
    console.log("my class name is " + year);
}

// print_details(names, rolls, years);

names = "abdul rohim";
rolls = "99";
years = "ten";

// print_details(names, rolls, years);

let amar_hate_ace = 500;
let after_expense_money = 0;

function bazar_track(tk,element,price) {
    // console.log(tk, rice_packet);
    console.log('egg : ' + price + ' tk');
    return tk - price;
}

// after_expense_money  = bazar_track(amar_hate_ace, 'egg', 110);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'rice', 90);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'vegitable', 150);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'onio', 150);
// console.log(after_expense_money);


function calculates(num1, num2) {
    console.log(`sum = ${num1 + num2}`);
    console.log(`sub = ${num1 - num2}`);
    console.log(`mul = ${num1 * num2}`);
    console.log(`div = ${num1 / num2}`);
    console.log(`modulus = ${num1 % num2}`);

    // document.getElementById("myList").innerHTML = '';

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sum = ${num1 + num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node); 

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sub = ${num1 - num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`mul = ${num1 * num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`div = ${num1 / num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`modulus = ${num1 % num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

}

// calculate(30, 20);
// calculate(60, 20);
