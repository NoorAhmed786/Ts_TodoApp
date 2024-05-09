import inquirer from "inquirer";
// todo arry 
// function
// operation
///todo array
let todos = ['bilal', 'noor'];
//function 
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select your operation",
            name: "select",
            choices: ['add', 'update', 'view', 'delete']
        });
        /// operation
        ///add 
        if (ans.select == 'add') {
            let addTodo = await inquirer.prompt({
                type: 'input',
                message: 'Add item',
                name: 'todo'
            });
            todos.push(addTodo.todo);
            let newTodo = todos.filter(val => val !== addTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        // update
        if (ans.select == 'update') {
            let updateTodo = await inquirer.prompt({
                type: 'list',
                message: 'select the item to update',
                choices: todos.map(item => item),
                name: 'todo'
            });
            let addTodo = await inquirer.prompt({
                type: 'input',
                message: 'Add item',
                name: 'todo'
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == 'view') {
            console.log(todos);
        }
        if (ans.select == 'delete') {
            let deleteTodo = await inquirer.prompt({
                type: 'list',
                message: 'select the item to update',
                choices: todos.map(item => item),
                name: 'todo'
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
/// operation 
