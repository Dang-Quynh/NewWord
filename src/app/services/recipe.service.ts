import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe} from '../share/model/recipe.model';
import { Ingredient } from '../share/model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChange = new Subject<Recipe[]>()
  recipes: Recipe[] = [
    new Recipe(
      'Nấm xào thịt gà',
      'Nấm xào thịt gà vừa ngon miệng lại đậm đà, đảm bảo ăn với cơm nóng ngày lạnh không còn gì hấp dẫn...',
      'https://cdn.eva.vn/upload/4-2021/images/2021-11-09/large/1636452692-101-thumbnail-width640height480.jpg',
      [new Ingredient('Nấm đùi gà', 2), new Ingredient('Đùi gà', 2), new Ingredient('Hành tím', 2), new Ingredient('Tỏi', 2)]
    ),
    new Recipe(
      'Cua rang me',
      'Cua rang me giòn giòn, vị chua ngọt đậm đà rất hấp dẫn.',
      'https://cdn.eva.vn/upload/4-2021/images/2021-11-05/large/1636086176-898-thumbnail-width640height480.jpg',
      [new Ingredient('Cua biển', 2), new Ingredient('Me', 20),new Ingredient('Hành tím', 2),new Ingredient('Ớt', 2)]
    ),
    new Recipe(
      'Cá hồi sốt cam',
      'Cá hồi sốt cam là một trong những món ăn ngon và bổ dưỡng. Ăn cá hồi giúp bổ sung protein, vitamin.',
      'https://cdn.eva.vn/upload/4-2021/images/2021-10-29/large/1635473400-459-thumbnail-width640height480.jpg',
      [new Ingredient('Cá hồi', 1), new Ingredient('Cam', 2)]
    ),
    new Recipe(
      'Bánh hỏi',
      'Bánh hỏi là một đặc sản dân dã được yêu thích bởi có đa dạng cách ăn',
      'https://cdn.eva.vn/upload/4-2021/images/2021-10-29/large/1635472373-315-thumbnail-width640height480.jpg',
      [new Ingredient('Bột gạo', 60), new Ingredient('Nước', 200)]
    ),
    new Recipe(
      'Đậu phụ sốt thịt',
      'Món đậu phụ sốt thịt băm nấm kim châm vừa ngon lại đậm đà,',
      'https://cdn.eva.vn/upload/4-2021/images/2021-11-01/large/ava-1635705417-610-width640height480.jpg',
      [new Ingredient('Đậu phụ', 2), new Ingredient('Thịt băm', 100), new Ingredient('Cà chua', 2)]
    )
  ];
 
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.recipes.slice())
  }
   // get list Recipe
  getRecipes() {
    return this.recipes.slice()
  }
  // delete a recipe
  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChange.next(this.recipes.slice());
  }
   //finds a recipe by id
  getRecipe(index: number) {
    return this.recipes[index]
  }
   // adds a new recipe
   addRecipe(recipe: Recipe) {
     this.recipes.push(recipe);
     this.recipesChange.next(this.recipes.slice());
   }
   // updates existing altered recipe
   changeRecipe(id: number, newRecipe: Recipe) {
     this.recipes[id] = newRecipe;
     this.recipesChange.next(this.recipes.slice());
   }
}
