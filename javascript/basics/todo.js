const arrayOfList = [];
const qustn = `What would you like to do next?
"new" - Add a todo
"delete" - Delete a todo
"list" - list all todos
"q / quit" - Quit app`;
let input = prompt(qustn);
let choice = input && input.toLowerCase();
while(choice!=='quit' && choice!=='q') {
    switch (choice) {
        case 'new':
            const newItem = prompt('Add a new todo task');
            newItem !==null && arrayOfList.push(newItem) && console.log(`${newItem} added to todo list`);
            break;
        case 'delete':
            const index=parseInt(prompt('Enter index of the todo to be deleted'));
            if(!isNaN(index)){
                const toBeDeleted = arrayOfList[index];
                if(toBeDeleted) {
                    console.log(`${toBeDeleted} removed from the list`);
                    arrayOfList.splice(index,1);    
                } else {
                    console.log('Unknown index');
                }
            } else {
                console.log('Unknown index');
            }
            break;
        case 'list':
            break;
        default:
            console.log('Incorrect option');
            break;
    }
    console.log('***********');
    if(arrayOfList.length>0){
        console.log('Following are pending list of todo with its index:')
        for (let i=0; i<arrayOfList.length; i++) {
            console.log(`${i}: ${arrayOfList[i]}`);
        }
    } else {
        console.log('No todos to list')
    }
    const input = prompt(qustn);
    choice = input && input.toLowerCase();
}
if(arrayOfList.length>0){
    console.log('Bye!!!!Following are pending list of todo with its index:')
    for (let i=0; i<arrayOfList.length;i++) {
        console.log(`${i}: ${arrayOfList[i]}`);
    }
} else {
    console.log('Bye!!!No todos to list')
}