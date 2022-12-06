game.splash("Today we will calculate the area of a trapezoid!")
let Base_1 = game.askForNumber("Enter length of Base 1(cm):")
let Base_2 = game.askForNumber("Enter length of Base 2(cm):")
let Height = game.askForNumber("Enter height(cm):")
let Area = (Base_1 + Base_2) / 2 * Height
game.splash("the area of a trapezoid with a small base of " + Base_1 + "cm long, a big base of " + Base_2 + "cm long, and a height of" + Height + "cm, has the area of " + Area + "cm squared")
