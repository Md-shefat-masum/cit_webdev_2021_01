const app = new Vue({
    el: '#vue_app',
    created: function () {
        console.log(this.todo_list);
    },
    data: function(){
        return{
            todo_title: '',
            todo_list: [
                {
                    checked: false,
                    title: 'test1',
                },
                {
                    checked: true,
                    title: 'test2',
                },
                {
                    checked: true,
                    title: 'test3',
                },
                {
                    checked: false,
                    title: 'test4',
                },
            ],
        }
    },
    methods: {
        show_todod_title_value: function(){
            console.log(this.todo_title);
        },
        add_new_data: function(){
            let data = {
                checked: false,
                title: this.todo_title,
            };

            if(this.todo_title){
                this.todo_list.push(data);
                this.todo_title = '';
            }
            
        },
        delete_data: function(index){
            // console.log({list: this.todo_list,index,title: this.todo_list[index].title});
            this.todo_list.splice(index,1);
        }   
    }
})