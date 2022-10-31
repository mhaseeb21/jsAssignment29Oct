import PromptSync from "prompt-sync";

var prompt = PromptSync();
var userInput=prompt("Please Enter your name: ");
var response="Your name is ";
console.log(response + userInput);
