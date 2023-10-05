import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EmptyComponent } from './recipes/empty/empty.component';
import {NewWordComponent} from "./new-word/new-word.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"recipes",
    pathMatch:"full"
  },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: EmptyComponent},
      { path: "new", component: RecipeNewComponent,},
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent,}
    ]
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent,
  },
  {
    path: "new-word",
    component: NewWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
