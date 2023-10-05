import { Injectable } from '@angular/core';
import { Ingredient } from '../share/model/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  amountInput: any;
  nameInput: any;
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [];

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  changeIngredient(index: number, item: Ingredient) {
    this.ingredients[index] = item;
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
  }
}
