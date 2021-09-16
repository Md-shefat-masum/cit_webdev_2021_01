$(function () {

    // document.getElementById('nav_overlay').addEventListener('click',function(){
    //     document.getElementById('nav-bg').setAttribute('style',"display:none");
    // })
    $('.nav_overlay').on('click', function () {
        $('#nav-bg').hide();
    })
    $('#close_btn').on('click', function () {
        $('#nav-bg').hide();
    })
    $('#show_nav').on('click', function () {
        $('#nav-bg').show();
    })
})

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         // console.log(json);
//         let html = '';
//         json.forEach(element => {
//             console.log(element);
//             html += `
//                 <div class="col-6 my-2">
//                     <div class="card">
//                         <div class="card-body">
//                             <table class="table table-bordered">
//                                 <tr>
//                                     <td>name</td>
//                                     <td>:</td>
//                                     <td>${element.name}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>phone</td>
//                                     <td>:</td>
//                                     <td>${element.phone}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>username</td>
//                                     <td>:</td>
//                                     <td>${element.username}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>website</td>
//                                     <td>:</td>
//                                     <td>${element.website}</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             // $('#card_list').html(html);
//             document.getElementById('card_list').innerHTML = html;
//         });
//     })

// const app = new Vue({
//     el: '#vue_app',
//     created: function () {

//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json);
//                 this.todo_list = json;
//                 console.log(this.todo_list);
//             })

//         // .catch((err) => console.log(err))
//     },
//     data: function () {
//         return {
//             todo_title: '',
//             todo_list: [{
//                     completed: false,
//                     title: 'test1',
//                 },
//                 {
//                     completed: true,
//                     title: 'test2',
//                 },
//                 {
//                     completed: true,
//                     title: 'test3',
//                 },
//                 {
//                     completed: false,
//                     title: 'test4',
//                 },
//             ],
//         }
//     },
//     methods: {
//         show_todod_title_value: function () {
//             console.log(this.todo_title);
//         },
//         add_new_data: function () {
//             let data = {
//                 completed: false,
//                 title: this.todo_title,
//             };

//             if (this.todo_title) {
//                 this.todo_list.push(data);
//                 this.todo_title = '';
//             }

//         },
//         delete_data: function (index) {
//             // console.log({list: this.todo_list,index,title: this.todo_list[index].title});
//             this.todo_list.splice(index, 1);
//         }
//     }
// })

new Vue({
    el: "#test_vue",
    created: function () {
        console.log('hellow', this.name);
    },
    data: function () {
        return {
            name: 'sajid',
        }
    },
    methods: function(){
        
    }
})