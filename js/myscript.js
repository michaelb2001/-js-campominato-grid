
// al click richiamo la funziona che stabilizza il livello e crea la tabella di gioco di conseguenza
document.getElementById("play").addEventListener("click",function(){
    //creo la funziona che stabilizza il livello e crea la tabella di gioco di conseguenza{
        const lv = document.getElementById("modalita").value;
        let tabella = document.getElementById("tabella");
        let colPerRow = 10;
        //controllo difficoltà e creazione tabella di conseguenza
        tabella.innerHTML = "";
        if( lv == "facile" ) {            
            colPerRow = 10;            
        };
    
        if( lv == "media" ) {           
            colPerRow = 9;
        };

        if( lv == "difficile" ) {           
            colPerRow = 7;           
        };

        generaCelle( colPerRow )  

        let myArray = document.getElementsByClassName("blocco");

        selezionaCelle(myArray);

});

function generaCelle( numeroCelle )
{
    let contatore = 1;
    for(let i=0;i < numeroCelle; i++){

        tabella.innerHTML += `<div id="riga-${i}" class="d-flex flex-row justify-content-center"></div>`;
        const riga         = document.getElementById( "riga-" +i )
        
        for(let j=0;j < numeroCelle; j++){

                riga.innerHTML += 
                `<div id="cella-${i}-${j}" class="col-1 blocco ">${ ( numeroCelle * i ) + j +1 } 
                </div> `;

                contatore++
        } 
        
    } 
}

function selezionaCelle(myArray){
    for (let index = 0; index < myArray.length; index++) {

        myArray[index].addEventListener("click",function(){
            this.classList.remove("blocco");
            this.classList.add("acqua");
    
        });
    }   

};
