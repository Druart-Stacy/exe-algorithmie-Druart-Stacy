//exercice 2.3
// Affiche tous les nombres pairs entre 1 et 100.
// faites deux versions différentes. La première doit utiliser while 
// et créer une boucle qui s'exécutera 100 fois. La seconde doit utiliser for et créer une boucle qui s'exécutera 50 fois.
let numberP=2;
let tab=Array();
let i=0;
    while(tab.length<100){

        if(numberP % 2==0){
            tab[i]=numberP
            i++
        }
        numberP++;
    }
    for(i=0; i<tab.length;i++)
    {
        console.log("les nombres paires sont: "+tab);
    }

//ok