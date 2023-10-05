import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './services/recipe.service';
import { DropdownComponent } from './recipes/recipe-detail/dropdown/dropdown.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {NewWordComponent} from "./new-word/new-word.component";

@NgModule({
  declarations: [
    AppComponent,
      RecipesComponent,
      ShoppingListComponent,
      HeaderComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      DropdownComponent,
      RecipeNewComponent ,
      RecipeEditComponent,
      RecipeItemComponent,
      ShoppingEditComponent,
    NewWordComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
