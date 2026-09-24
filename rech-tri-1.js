const tableau=[ 58,12,9,24,6 ]
       console.log(tableau)
    for(let i=0; i<tableau.length-1;i++){
        for(let j=0; j<tableau.length-1-i;j++){
            if(tableau[j]>tableau[j+1]){
                let temp = tableau[j];
                tableau[j]=tableau[j+1];
                tableau[j+1]=temp;
            }
        }
    }
    console.log(tableau)