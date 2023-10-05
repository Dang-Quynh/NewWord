import { Component, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/share/model/ingredient.model';
import { NgForm } from '@angular/forms'; 
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription!: Subscription;
  editMode = false;
  indexIngredient!: number;
  editItem!: Ingredient;
  name!: string;

  @ViewChild('shoppingEditForm') shoppingEditForm!: NgForm

  constructor(
    private shoppingListService: ShoppingListService
    ) { }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.indexIngredient = index;
      this.editMode = true;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.shoppingEditForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addIngredients(item: NgForm) {
    const name = item.value.name;
    const amount = item.value.amount;
    const newIngredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.changeIngredient(this.indexIngredient, newIngredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredients(newIngredient)
    }
    this.shoppingEditForm.reset();
    this.editMode = false;
  }

  clear(amount:any) {
    amount.value='';
  }

  delete() {
    this.shoppingListService.deleteIngredient(this.indexIngredient)
    this.shoppingEditForm.reset();
    this.editMode = false;
  }
}
