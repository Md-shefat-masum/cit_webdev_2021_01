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

    if (names && names.length > 0) {
        names = JSON.parse(localStorage.getItem(date));
    } else {
        names = [];
    }

    if (!dates.includes(date) && date.length > 1) {
        dates.push(date);
        localStorage.setItem(date, JSON.stringify(names));
    }

    if (!names.includes(name) && dates.includes(date) && name.length > 1) {
        names.push(name);
        localStorage.setItem(date, JSON.stringify(names));
    }

    make_list(date);

}

function make_list(date) {
    let list = '';

    names = localStorage.getItem(date);

    if (names && names.length > 0) {
        names = JSON.parse(localStorage.getItem(date));
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            list += `<li class="list-group-item">${element}</li>`;
        }
    } else {
        list = '<li class="list-group-item">no result</li>';
    }

    document.getElementById('attandance_list').innerHTML = list;
}

function search(params) {
    // console.log(params);
    if (names.includes(params)) {
        data = names[names.indexOf(params)];
        list = `<li class="list-group-item">postion:${names.indexOf(params)+1} <br> <br> ${data}</li>`;
        document.getElementById('attandance_list').innerHTML = list;
    }
}

let array_test = [];
let array_2 = [55, 56, 57];

array_test = [
    5,
    90,
    123,
    5.6,
    3.5454,
    4
];


let merge_array = [...array_test, ...array_2];

array_test.push(77);
array_test.unshift(88);


// console.log(array_test);
// console.log(merge_array);
// console.log(array_test[4]);
// console.log(array_test.length);

for (let index = 0; index < array_test.length; index++) {
    const element = array_test[index];

    if (element % 2 == 0) {}
    // console.log(element);
}


let info_title = [
    'name',
    'roll',
    'class',
    'age',
    'grades',
];

let subjects_title = [
    'bangla',
    'english',
    'math'
];

let array_info = [
    [
        'zamil',
        10,
        12,
        90,
        [
            'F',
            'A',
            'A+',
        ],
        [
            'dhaka',
            'demra',
            '14 street',
            'schooler piocone'
        ]
    ],
    [
        'kamil',
        10,
        12,
        90,
        [
            'B',
            'F',
            'A+',
        ]
    ],
    [
        'rafiq',
        10,
        12,
        90,
        [
            'F',
            'F+',
            'F-',
        ]
    ],

];

// console.log(array_info);

// for (let index = 0; index < array_info.length; index++) {
//     const student = array_info[index];
//     // console.log(element);

//     for (let index2 = 0; index2 < student.length; index2++) {
//         const student_info = student[index2];


//         if(index2 == 4){
//             for (let index3 = 0; index3 < student_info.length; index3++) {
//                 const grades = student_info[index3];
//                 // console.log(grades);
//                 console.log(` ${subjects_title[index3]} : ${grades}`);
//             }
//         }else{
//             // console.log(index2);
//             console.log(` ${info_title[index2]} : ${student_info}`);
//         }

//     }
//     console.log('');
// }

let student_iformation = {
    name: 'akaram hossain',
    roll: '105551',
    year: '2nd',
    sub: 'CSE',

    result: {
        bangla: {
            grade: 'A+',
            number: 82,
        },
        english: {
            grade: 'A+',
            number: 82,
        },
        math: {
            grade: 'A+',
            number: 82,
        },
    },

    address: {
        village: "Rangpur Jela",
        post_office: 'Sodor',
        jela: "Ragpur",
    },

    init: function (name, roll, sub) {
        this.name = name;
        this.roll = roll;
        this.sub = sub;
    }
};

// function teacher(name, designation, address) {
//     this.name = name;
//     this.designation = designation;
//     this.address = address;
// }

// let teacher1 = new teacher('alpha','math',{
//     village: 'rongpur',
//     jela: 'sodor'
// });

// let teacher2 = new teacher('beta','math');

// console.log(teacher1, teacher2);

let student_information_list = [];

// for (let index = 0; index < 10; index++) {
//     const element = 10;
//     student_iformation.init('jamil', '12345', 'ECE');
//     student_information_list.push(student_iformation);
// }

// for (let index = 0; index < student_information_list.length; index++) {
//     const element = student_information_list[index];

//     console.log(element);
//     console.log('');
// }

// console.log(student_iformation);
// console.log(student_information_list);

// console.log(Object.keys(student_iformation));
// console.log('');
// console.log(student_iformation.name);
// console.log(student_iformation.result.math.number);
// console.log(student_iformation.result.bangla);


document.getElementById('save_info')
    .addEventListener('click', function () {
        let name = info_form.name.value;
        let roll = info_form.roll.value;
        let subjectname = info_form.subject.value;
        // console.log(name, roll, subjectame);
        // student_iformation.init(name, roll , subjectame);
        let student_info = {
            name: name,
            roll: roll,
            subjectname: subjectname,
        }

        student_information_list.push(student_info);
        document.getElementById('count').innerHTML = student_information_list.length;
        
        let tr = '';
        tr += `
            <tr>
                <td>${name}</td>
                <td>${roll}</td>
                <td>${subjectname}</td>
            </tr>
        `;

        let tbody = document.querySelector('#info_table tbody');
        tbody.innerHTML += tr;
    })