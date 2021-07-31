
// let names = [
//     'name1',
//     'name2',
//     'name3',
//     12563,
//     '232123ksdaf',
//     4.5,
// ];

// let name2 = [
//     'c2nd_name1',
//     'd2nd_name2',
//     'a2nd_name3',
// ];

// let rolls = [
//     4,8,3,5
// ];

// names.push('new data');
// names.push('new data2');
// names.push('new data3');
// names.unshift('new data4');

// console.log(name2.sort());
// console.log(rolls.sort(function(a, b){return b-a}));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi",1,3));

// console.log(rolls.sort(function(a, b){return a-b})[0]);

// console.log(name2.includes("2nd_name1"));
// console.log(name2.indexOf("2nd_name2"));
// console.log(name2.length);
// console.log(Array.isArray(asdfa), name2);

// names.shift();
// console.log(names);

// names.pop();
// console.log(names);

// let name_concat = names.concat(name2);
// let name_concat = [ ...names, ...name2 , ...names , ...name2];
// console.log( name_concat );

// localStorage.setItem('name_concat',JSON.stringify(name_concat));

// let storage_data = JSON.parse( localStorage.getItem('name_concat') );
// console.log(storage_data);

// for (let i = 0; i < name_concat.length; i++) {
//     const element = name_concat[i];
//     // console.log(element);
// }

// let list = '';

// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     list += `<li class="list-group-item">${element}</li>`;
// }

// document.getElementById('lists').innerHTML = list;

let dates = [];
let names = [];

function save_data(date, name) {
    // console.log(date, name);

    names = localStorage.getItem(date);
    
    if(names && names.length > 0){
        names = JSON.parse( localStorage.getItem(date) );
    }else{
        names = [];
    }

    if(!dates.includes(date) && date.length > 1){
        dates.push(date);
        localStorage.setItem( date , JSON.stringify(names) );
    }

    if(!names.includes(name) && dates.includes(date) && name.length > 1){
        names.push(name);
        localStorage.setItem( date, JSON.stringify(names) );
    }

    make_list(date);

}

function make_list(date) {
    let list = '';

    names = localStorage.getItem(date);

    if(names && names.length > 0){
        names = JSON.parse( localStorage.getItem(date) );
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            list += `<li class="list-group-item">${element}</li>`;
        }
    }else{
        list = '<li class="list-group-item">no result</li>';
    } 

    document.getElementById('attandance_list').innerHTML = list;
}

function search(params) {
    // console.log(params);
    if(names.includes(params)){
        data = names[names.indexOf(params)];
        list = `<li class="list-group-item">postion:${names.indexOf(params)+1} <br> <br> ${data}</li>`;
        document.getElementById('attandance_list').innerHTML = list;
    }
}