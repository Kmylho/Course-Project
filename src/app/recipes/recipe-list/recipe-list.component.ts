import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('capuchino','bebida espumosa','https://www.recetasderechupete.com/wp-content/uploads/2021/03/Capuchino-perfecto.jpg'),
    new Recipe('helado','postre frio','https://ken-foods.com/en/wp-content/uploads/2018/07/el-origen-del-helado-e1530726550260.jpg'),
  ];

  constructor() {}

  ngOnInit() {

  }
}
