import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/share/model/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(
    private activateRoute: ActivatedRoute, 
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    //get recipe
    const id = this.activateRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.recipe = this.recipeService.getRecipe(this.id)
    })

    //changes recipe
    this.recipeService.recipesChange.subscribe(
      (recipe: Recipe[]) => {
        this.recipe = recipe[this.id]
      })
  }
}
