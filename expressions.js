const pronouns = ["I","He","She","It"];//
const pronouns2 = ["We","They"];
const pronouns3 = ["You"];
const demostrativePronouns = ["This","That"];//
const demostrativePronouns2 = ["These","Those"];
const properPronuns = ["Candelaria","Emily","Johan","Jairo","Maria","Julio","Andres","Sofia","Carmen","Javier"];//
const commmonPronouns = ["car","chair","table","apple"];//
const commmonPronouns2 = ["cars","chairs","tables","apples"];//
const article = ["The","A","An"];//
const article2 = ["The"];//
const verbsToBePast = ["Was","Were"];
const complements = ["a good doctor","beautiful","a player soccer","in England","in my house yesterday","a bad student","sick yesterday","happy","red"];
const complements2 = ["good doctors","beautiful","players soccer","in England","in my house yesterday","bad students","sick yesterday","happy"];

/*
SENTENCES
SHE WAS A GOOD DOCTOR
HE WAS A GOOD DOCTOR
I WAS A GOOD DOCTOR
YOU WERE A GOOD DOCTOR
WE WERE GOOD DOCTORS
THEY WERE GOOD DOCTORS
IT WAS A GOOD DOCTOR

THE TABLES WERE BEAUTIFUL
THE CHAIRS WERE BEAUTIFUL
THE CARS WERE BEAUTIFUL
THE TABLE WAS BEAUTIFUL
THE CHAIR WAS BEAUTIFUL
THE CAR WAS BEAUTIFUL
THOSE CARS WERE BEAUTIFUL
THESE CARS WERE BEAUTIFUL
THOSE CHAIRS WERE BEAUTIFUL
THESE CHAIRS WERE BEAUTIFUL
THOSE TABLES WERE BEAUTIFUL
THESE TABLES WERE BEAUTIFUL
THIS CAR WAS BEAUTIFUL
THAR CAR WAS BEAUTIFUL
THIS CHAIR WAS BEAUTIFUL
THAT CHAIR WAS BEAUTIFUL
THIS TABLE WAS BEAUTIFUL
THAT TABLE WAS BEAUTIFUL
I WAS BEAUTIFUL
SHE WAS BEAUTIFUL
HE WAS BEAUTIFUL
IT WAS BEAUTIFUL
YOU WERE BEAUTIFUL
THEY WERE BEAUTIFUL
WE WERE BEAUTIFUL

Y MUCHAS MAS....

*/


//EXPRESION REGULAR OPCION 1
const expression = {
    firstPerson:  /^(((I|She|He)|(Jairo|Candelaria|Emily|Johan|Julio|Maria|Andres|Sofia|Carmen|Josefa|Camilo|Javier)) (was) (a good doctor|beautiful|a player soccer|in England|in my house yesterday|a bad student|sick yesterday|a lawyer|tired last night|a good football player|happy))$/i,
    secondPerson: /^((You) (were) (a good doctor|beautiful|a player soccer|in England|in my house yesterday|a bad student|sick yesterday|a lawyer|tired last night|a good football player|happy))$/i,
    secondPersonPlural: /^(They|We) (were) (a good doctors|beautiful|players soccer|in England|in my house yesterday|bad students|sick yesterday|lawyers|tired last night|good football players|happy)$/i,
    thirdPerson: /^((She|He) (was) (a good doctor|beautiful|a player soccer|in England|in my house yesterday|a bad student|sick yesterday|a lawyer|tired last night|a good football player|happy))$/i,
    thirdPersonOthers: /^((((((The|A|This|That) (car|table|chair|shirt|computer|tree|pencil|notebook))|(It)) (was))|((The|Those|These) (cars|tables|chairs|shirts|computers|trees|pencils|notebooks)) (were)) (beautiful|blue|in England|in my house yesterday|big|expensive|here yesterday|very small|clean|in the garden))$/i,
}

// const form = document.getElementById('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     var sentence = document.getElementById('input').value;
//     if(expression.firstPerson.test(sentence)){
//         alert("Todo OK");
//     }else if(expression.secondPerson.test(sentence)){
//         alert("Todo OK");
//     }else if(expression.secondPersonPlural.test(sentence)){
//         alert("Todo OK");
//     }else if(expression.thirdPerson.test(sentence)){
//         alert("Todo OK");
//     }else if(expression.thirdPersonOthers.test(sentence)){
//         alert("Todo OK");
//     }else{
//         alert("Todo Mal");
//     }
// });

//EXPRESION REGULAR OPCION 2 (ON)
var expresion="^(((((("
for(let i=0; i<demostrativePronouns.length;i++){
    if(i==0){
        expresion+= demostrativePronouns[i];
    }else{
        expresion+= "|" + demostrativePronouns[i];
    }
}
expresion+=")|("
for(let i=0; i<article.length;i++){
    if(i==0){
        expresion+= article[i];
    }else{
        expresion+= "|" + article[i];
    }
}
expresion+=")) ("
for(let i=0; i<commmonPronouns.length;i++){
    if(i==0){
        expresion+= commmonPronouns[i];
    }else{
        expresion+= "|" +commmonPronouns[i];
    }
}
expresion+="))|(("
for(let i=0; i<properPronuns.length;i++){
    if(i==0){
        expresion+= properPronuns[i];
    }else{
        expresion+= "|" + properPronuns[i];
    }
}
expresion+= ")|(";
for(let i=0; i<pronouns.length;i++){
    if(i==0){
        expresion+= pronouns[i];
    }else{
        expresion+= "|" + pronouns[i];
    }
}
expresion+= "))) (was) (";
for(let i=0; i<complements.length;i++){
    if(i==0){
        expresion+= complements[i];
    }else{
        expresion+=  "|" +complements[i];
    }
}
expresion+= "))|(((((";
for(let i=0; i<demostrativePronouns2.length;i++){
    if(i==0){
        expresion+= demostrativePronouns2[i];
    }else{
        expresion+= "|" +demostrativePronouns2[i];
    }
}
expresion+="|The)) (";
for(let i=0; i<commmonPronouns2.length;i++){
    if(i==0){
        expresion+= commmonPronouns2[i];
    }else{
        expresion+= "|" +commmonPronouns2[i];
    }
}
expresion+= "))|(";
for(let i=0; i<pronouns2.length;i++){
    if(i==0){
        expresion+= pronouns2[i];
    }else{
        expresion+= "|" +pronouns2[i];
    }
}
expresion+= ")) (were) (";
for(let i=0; i<complements2.length;i++){
    if(i==0){
        expresion+= complements2[i];
    }else{
        expresion+= "|" +complements2[i];
    }
}
expresion+= "))|((";

for(let i=0; i<pronouns3.length;i++){
    if(i==0){
        expresion+= pronouns3[i];
    }else{
        expresion+= "|" +pronouns3[i];
    }
}
expresion+= ") (were) (";
for(let i=0; i<complements.length;i++){
    if(i==0){
        expresion+= complements[i];
    }else{
        expresion+= "|" +complements[i];
    }
}
expresion+= ")))$";

var expresionReg = new RegExp(expresion,"i");
console.log(expresionReg)
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var sentence = document.getElementById('input').value;
    if(expresionReg.test(sentence)){
        toastr.success('The sentence is correct!', 'Good Job!');
    }else{
        toastr.error('The sentence is wrong!', 'Error!');
    }
});
