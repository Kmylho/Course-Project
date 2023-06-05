import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('capuchino','bebida espumosa','https://www.recetasderechupete.com/wp-content/uploads/2021/03/Capuchino-perfecto.jpg',[
      new Ingredient('obj1', 1),
      new Ingredient('obj2', 2)
    ]),
    new Recipe('helado','postre frio','https://ken-foods.com/en/wp-content/uploads/2018/07/el-origen-del-helado-e1530726550260.jpg',[
      new Ingredient('obj3', 3),
      new Ingredient('obj4', 4)
    ]),
  ];

  constructor(private slService: ShoppinglistService) {}

  gewtRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
