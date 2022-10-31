//importing the prompt-sync and calculator class

import PromptSync from "prompt-sync";
import { calculator } from "./calculaterClass.mjs";

//const cal=require("./calculaterClass.mjs");
//object creation & passing values to constructor
const object=new calculator(0,0);
const prompt=PromptSync();

var choice=Number(prompt("Which mode of calculator do you want to use:\npress 1 : expression calculator\npress 2 : values calculator\n"));
//expressionn calculator
if(choice==1)
{

let userInput=prompt("Please enter the expression to evaluate:\n");
console.log("="+eval(userInput));

}
//single value calculator
else if(choice==2)
{
    let userInput1=Number(prompt("Please enter the 1st number:  "));
    let operator=prompt("Please select the type of operator:\nAvailable  +  -  *  /\n");
    let userInput2=Number(prompt("Please enter the 2nd number:  "));
    if(operator == "+")
    {
        console.log(object.add(userInput1,userInput2));
    }
    else if(operator == "-")
    {
        console.log(object.subtract(userInput1,userInput2))
    }
    else if(operator == "/")
    {
        console.log(object.div(userInput1,userInput2));
    }
    else if(operator == "*")
    {
        console.log(object.mult(userInput1,userInput2));
    }
    else
    console.log("Invalid operator");
}