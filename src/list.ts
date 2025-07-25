
import { randomUUID } from 'crypto';

export type GroceryItem = {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
};

const groceryList : GroceryItem[] = []; 

export function addItem(name: string, quantity: number): void {
  const item: GroceryItem = {
    id: randomUUID(),
    name,
    quantity,
    purchased: false,
  };
  groceryList.push(item);
  console.log(` Added "${name}" (x${quantity}) to the list.`);
}


export function removeItem(id: string): void {
  const index : number = groceryList.findIndex(item => item.id === id);
  if (index !== -1) {
    const removed = groceryList.splice(index, 1)[0];
    console.log(` Removed "${removed.name}"`);
  } else {
    console.log(` Item with ID ${id} not found.`);
  }
}



export function markPurchased(id: string): void {
  const item = groceryList.find(item => item.id === id);
  if (item) {
    item.purchased = true;
    console.log(` Marked "${item.name}" as purchased.`);
  } else {
    console.log(` Item with ID ${id} not found.`);
  }
}


export function showList(): void {
  console.log('\n Grocery List:');
  if (groceryList.length === 0) {
    console.log('(Empty)');
  } else {
    groceryList.forEach(item => {
      const status : string = item.purchased ? 'purchased' : 'not purchased';
      console.log(`[${status}] ${item.name} x${item.quantity} (ID: ${item.id})`);
    });
  }
}