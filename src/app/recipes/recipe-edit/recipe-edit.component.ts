import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormArray, FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Recipe } from 'src/app/share/model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  recipeEditForm:any;
  
  constructor(
    private activeRoute: ActivatedRoute, 
    private recipeService: RecipeService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initEditForm(); 
    })
  }
  // edit Recipe
  initEditForm() {
    var ingredients = new FormArray([]);
    let recipe = this.recipeService.getRecipe(this.id);
    let name = recipe.name;
    let imageUrl = recipe.imagePath;
    let description = recipe.description;

    if (recipe['ingredients']) {
      for (let ingredient of recipe.ingredients) {
        ingredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        )
      }
    }
    this.recipeEditForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingredients
    })
  }
  // add new form group to ingredient list
  addIngredient() {
    this.ingredients.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  // save Recipe (update after edit)
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeEditForm.value['name'], 
      this.recipeEditForm.value['description'], 
      this.recipeEditForm.value['imageUrl'], this.recipeEditForm.value['ingredients']);
    this.recipeService.changeRecipe(this.id, newRecipe);
    this.router.navigate(['/recipes', this.id]);
  };

  get ingredients(){
    return this.recipeEditForm.get('ingredients') as FormArray;
  }
  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  cancel() {
    this.router.navigate(['/recipes']);
  }
}
