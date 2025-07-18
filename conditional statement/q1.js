// conditional statement 

// leap year question

let leapyear = 1200;
/*
if(leapyear%4==0){
    if(leapyear%100==0){
console.log("this is not leap year");
    }
    console.log("this is  leap year");
}else{
    console.log("this is not leap year");
}
//second method 
if((leapyear % 4==0 && leapyear %100 != 0)){
    console.log("this is leap year")
}else if(leapyear % 400==0){
    console.log("this is  leap year");
}else {
    console.log("this is not leap year");
}
*/
// Amount amd Discount question

Amount = 80000;

if(Amount>=0 && Amount<= 5000){
    console.log(Amount)
}else if(Amount>5000 && Amount<=700){
    console.log(Amount-(5*Amount)/100);
}else if(Amount>7000 && Amount<=9000){
    console.log(Amount-(10*Amount)/100);
}else if(Amount>9000){
    console.log(Amount-(20*Amount)/100);
}else {
    console.log("Invalid");
}