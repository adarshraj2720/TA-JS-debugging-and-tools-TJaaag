function fullName(firstName="",lastName=""){
return firstName+" "+lastName;
}

let result=fullName("Adarsh","Raj");

let expexted ="Adarsh Raj";

if(result !== expexted){
    throw new Error(`${result} is not equal to ${expexted}`);
}



function totalAmount(amount=0,taxRate=0){
    return amount+(amount+taxRate);
}

let result=totalAmount(200,10);

let expected=411;

if(result!==expected){
    throw new Error(`${result} is not equal to ${expected}`);
}