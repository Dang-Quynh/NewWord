import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormArray, FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Recipe} from 'src/app/share/model/recipe.model';



@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  id!: number;
  recipeForm!:FormGroup;

  constructor(
    public activeRoute: ActivatedRoute, 
    public recipeService: RecipeService, 
    public router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.recipeForm = new FormGroup({
        name: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        ingredients: new FormArray([])
      })
    })
  }
  // add new ingredient to ingredient list
  onAddIngredient() {
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

  //  new recipe to recipe array
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'], 
      this.recipeForm.value['description'], 
      this.recipeForm.value['imageUrl'], 
      this.recipeForm.value['ingredients']);

    this.recipeService.addRecipe(newRecipe);
    this.router.navigate(['/recipes'])
  };

  get ingredients(){
    return this.recipeForm.get('ingredients') as FormArray;
  }
  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
  onCancel() {
    this.router.navigate(['/recipes']);
  }

}
