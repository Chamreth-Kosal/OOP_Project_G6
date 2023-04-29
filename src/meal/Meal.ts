// export enum Type{
//     VEGETARIAN,
//     VEGAN,
//     DAIRY,
//     HALAL,
//     KOSHER,
//     Forth,
// }

// export class Meal {
//     type: string;
//     count: number;
  
//     constructor(type: string, count: number) {
//       this.type = type;
//       this.count = count;
//     }
//   }
export enum MealType{
  VEGETARIAN= "vegetarian",
  VERGAN= "vergan",
  DAIRY = "dairy",
  HALAL = "halalan",
  KOSHER ="kosher",
  FORTH ="forth",
}
export class Meal{
  type:MealType;
  quantity:number;
  
  constructor(type:MealType, quantity:number){
      this.type = type;
      this.quantity = quantity;
  }
  getMealType(){
      return this.type;
  }
}