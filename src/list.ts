
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


