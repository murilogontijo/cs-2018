/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 no high school diploma (sem diploma de nível médio) ganharam uma média de US$ 25.636/ano
a high school diploma (com nível médio completo) ganharam uma média de US$ 35.256/ano
an Associate's degree (com diploma de curso técnico) ganharam uma média de US$ 41.496/ano
a Bachelor's degree (com superior completo) ganharam uma média de US$ 59.124/ano
a Master's degree (com mestrado completo) ganharam uma média de US$ 69.732/ano
a Professional degree (com diploma profissional) ganharam uma média de US$ 89.960/ano
e a Doctoral degree (com doutorado completo) ganharam uma média de US$ 84.396/ano.
In 2015, a person with __________ earned an average of $__________/year.
 */

// change the value of `education` to test your code
var education = 'an Associate\'s degree';

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
  case "no high school diploma":
	var salary = 25636;
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "a high school diploma":                           
	var salary = 35256;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "an Associate's degree":                           
	var salary = 41496;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "a Bachelor's degree":                             
	var salary = 59124;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "a Master's degree":                               
	var salary = 69732;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "a Professional degree":                           
	var salary = 89960;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;                                                
  case "a Doctoral degree":                               
	var salary = 84396;                                  
    console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
	break;
}