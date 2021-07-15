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

function bazar_track(tk, element, price) {
    // console.log(tk, rice_packet);
    console.log(element + ' : ' + price + ' tk');
    return tk - price;
}

// after_expense_money  = bazar_track(amar_hate_ace, 'egg', 110);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'rice', 90);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'vegitable', 150);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'onion', 150);
// console.log(after_expense_money);

// after_expense_money  = bazar_track(after_expense_money, 'garlic', 200);
// console.log(after_expense_money);

// simmple if
// if esle
// esle if ladder

// < > <= >= == != || && 

// if ( 10 && -9 ) {
//     console.log('you r able.');
// } else {
//     console.log('you r not able.');
// }

// grading system

function calculate_grade(number) {

    if (number < 0 || number > 100) {

        document.getElementById("grade_result").innerHTML = 'give a number between 0 to 100.';

    } else if (number >= 33 && number < 40) {

        document.getElementById("grade_result").innerHTML = 'd'.toUpperCase();

    } else if (number >= 40 && number < 50) {

        document.getElementById("grade_result").innerHTML = 'c'.toUpperCase();

    } else if (number >= 50 && number < 60) {

        document.getElementById("grade_result").innerHTML = 'b'.toUpperCase();

    } else if (number >= 60 && number < 70) {

        console.log('A-'.toUpperCase());
        document.getElementById("grade_result").innerHTML = 'a-'.toUpperCase();

    } else if (number >= 70 && number < 80) {

        console.log('A');
        document.getElementById("grade_result").innerHTML = 'a'.toUpperCase();

    } else if (number >= 80 && number <= 100) {

        console.log('A+');
        document.getElementById("grade_result").innerHTML = 'a+'.toUpperCase();

    } else {

        console.log('you are fail.');
        document.getElementById("grade_result").innerHTML = 'you are fail.';

    }
}

function calculates(num1, num2) {
    console.log(`sum = ${num1 + num2}`);
    console.log(`sub = ${num1 - num2}`);
    console.log(`mul = ${num1 * num2}`);
    console.log(`div = ${num1 / num2}`);
    console.log(`modulus = ${num1 % num2}`);

    // document.getElementById("myList").innerHTML = '';

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(`sum = ${num1 + num2}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(`sub = ${num1 - num2}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(`mul = ${num1 * num2}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(`div = ${num1 / num2}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(`modulus = ${num1 % num2}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("myList").appendChild(node);

}

// calculate(30, 20);
// calculate(60, 20);

const return_string = (params) => {
    console.log(params);
    return params;
}


// while , do while , for loop, recursive function
let i = 10;

// while(i >= 1){
//     let mul = i + ' x 2 = ' + ( i * 2 ) ;
//     console.log( mul );

//     // increment or decrement
//     i--;
// }

// i = 1;
// do {
//     let mul = i + ' x 2 = ' + (i * 2);
//     console.log(mul);

//     // increment or decrement
//     i++;
// } while (i <= 10)

// let time = 3.50;

// for ( i = 1 ; i <= 10 ; i++) {

//     // if(i == 7){
//     //     break;
//     // }

//     let mul = i + ' x 2 = ' + (i * 2);
//     console.log(mul);
// }

// console.log(++i); // i = i + 1  ;
// console.log(++i); //
// console.log(i); // i++ ++i

// console.log(--i);
// console.log(i--);
// console.log(i);

// console.log( i += 3 ); // i = i+3;
// console.log( i += 3 );
// console.log( i = i+3 );
// console.log( i = i+3 );

// i = 10;
// console.log( i ); // i = i-3
// console.log( i -= 3 ); 
// console.log( i -= 3 ); 

let html = '';

for (let index = 1; index <= 12; index++) {
    html  += `
        <div class="img">
            <img src="images/players/player-${index}.png" alt="">
        </div>
    `;
}

document.getElementById('gallery').innerHTML = html;

// let namess = 'amit';
// namess += " asjdflkajsflk";
// namess = namess + " asjdflk   ajsflk";
// console.log(namess);


const multiply_table = (multiplicant, multiplier, range) => {
    let mul = multiplier + ' x '+ multiplicant +' = ' + (multiplier * multiplicant);
    console.log(mul);

    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(mul); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("mul_result").appendChild(node);

    if (multiplier < range) {
        return multiply_table(multiplicant, ++multiplier, range);
    }
}

// multiply_table(2, 1, 5);
// console.log('');

// multiply_table(3, 5 , 10);
// console.log('');

// multiply_table(4, 11, 20);
// console.log('');