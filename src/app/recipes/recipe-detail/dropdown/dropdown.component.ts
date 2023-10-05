import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/share/model/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() id!: number;

  constructor(
    private shoppingListService: ShoppingListService, 
    private router: Router, 
    private recipeService: RecipeService
    ) { }

  ngOnInit() {
  }
//add ingredients to shopping list
  toShoppingList() {
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredients(ingredient)
    })
    this.router.navigate(['/shopping-list'])
  }
  // delete a recipe
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
  }
}
