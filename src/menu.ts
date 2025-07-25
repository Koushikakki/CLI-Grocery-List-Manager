import * as readline from 'readline';
import { addItem,removeItem,markPurchased,showList } from './list';

const rl =readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


export function showMenu() :void {
    console.log(`\n===== Grocery List Menu =====`);
    console.log(`1. Add Item`);
    console.log(`2. Remove Item`);
    console.log(`3. Mark as Purchased`);
    console.log(`4. Show List`);
    console.log(`5. Exit`);
    rl.question('Choose an option (1-5): ', handleMenu);
} 

export function handleMenu(choice:string) : void {
    switch(choice.trim()){
        case '1':
            rl.question('Enter item name :  ',(name : string) => {
                rl.question('Enter quantity : ', (qtrStr : string) => {
                    const quantity : number = parseInt(qtrStr.trim(),10);
                    if(isNaN(quantity) || quantity < 0) {
                        console.log('Invalid quantity. Must be a positive number.')
                    }
                    else {
                        addItem(name.trim(), quantity);
                    }
                    showMenu();
                });
            });
            break;
        case '2' :
            
            rl.question('Enter item ID to remove: ', (id : string) => {
            removeItem(id.trim());
            showMenu();

            });
            break;

        case '3':
            
            rl.question('Enter item ID to mark as purchased: ', (id : string) => {
            markPurchased(id.trim());
            showMenu();

            });
            break;

        case '4':

            showList();
            showMenu();

        break;

        case '5':

            console.log('👋 Exiting Grocery List...');
            rl.close();

        break;

    default:

      console.log('Invalid option.');
      showMenu();
  }
    }

