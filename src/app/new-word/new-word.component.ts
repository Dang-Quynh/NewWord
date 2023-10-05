import { Component, OnInit } from '@angular/core';
import {NewWord} from "./new-word";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {
  items1 = NewWord;
  items2: any[] = [];
  items: any[] = []
  formFilter = new FormGroup({
    from: new FormControl(0),
    to: new FormControl(30),
    random: new FormControl(false),
    type: new FormControl(1),
  })

  constructor() { }

  ngOnInit() {
    const answers = this.items1.map(value => value?.name);
    this.items2 = this.items1.map((value) => {
      return {
        ...value,
        show: false,
        answers: [
          {checked: false, value: value.name},
          {checked: false, value: answers[Math.random()]},
          {checked: false, value: answers[Math.random()]},
          {checked: false, value: answers[Math.random()]}]
      }
    })
    this.items = [...this.items2];
  }

  show(){
    if(this.formFilter.value?.from && this.formFilter.value?.to){
      this.items = this.items2.slice(this.formFilter.value?.from, (this.formFilter.value?.to - this.formFilter.value?.from));
    }
    if(this.formFilter?.value.random){
      this.shuffleArray(this.items);
    }
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
