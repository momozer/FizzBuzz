/*
FizzBuzz !

But de l'exercice :

Afficher en console les nombres de 1 à 35 (un par ligne) en remplaçant les
multiples de 3 par "Fizz!" et les multiples de 5 par "Buzz!". Les
multiples de 3 et 5 seront remplacés par "FizzBuzz!".
*/

// 1. recupere le ou les elements DOM pour travailler
let form = document.querySelector("body > div > form");


const fizzbuzz = (unNombre) => {
    for (let i = 0; i <= unNombre; i++) {
        // verifier si multiple de 3 et 5
        if (i%3 ==0 && i%5 ==0){
            console.log("FizzBuzz !");
        // verifier si multiple de 3
        }else if (i%3 ==0){
            console.log("Fizz !");
        // verifier si multiple de 5
        } else if (i%5 ==0){
            console.log("Buzz !");
        // sinon aucun
        }else{
            console.log(i);
        }
    }
}

/**
 * 3. Definir la fonction de prise en charge du formulaire
 * Il prend la valeur du champ d'entrée,
 * vérifie s'il s'agit d'un nombre positif et, si c'est le cas,
 * le transmet à la fonction pairImpaire.
 * @param evenementSubmit - l'objet événement
 */
const priseEnChargeDuFormulaire = (evenementSubmit)=>{
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    // console.log(evenementSubmit);
    // empeche les chiffres négatifs
    if (evenementSubmit.target.entreeNb.value > 0){
        fizzbuzz(evenementSubmit.target.entreeNb.value);
    }else{
        console.log("le nombre doit etre positif");
    };
    // vide mon input
    evenementSubmit.target.entreeNb.value=null;

}


// 2. ecoute d'evenement
form.addEventListener("submit",priseEnChargeDuFormulaire);