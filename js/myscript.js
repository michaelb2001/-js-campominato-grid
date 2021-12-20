
// al click richiamo la funziona che stabilizza il livello e crea la tabella di gioco di conseguenza
document.getElementById("play").addEventListener("click",function(){
    //creo la funziona che stabilizza il livello e crea la tabella di gioco di conseguenza{
        const lv = document.getElementById("modalita").value;
        let tabella = document.getElementById("tabella");
    
        //controllo difficoltà e creazione tabella di conseguenza
    
        if( lv == "facile" ) {
            tabella.innerHTML="";
          for(let i=0;i < 10;i++){
            tabella.innerHTML += `
            <div id="riga-${i}" class="d-flex flex-row justify-content-center">
            </div>
            `;
    
            for(let j=0;j < 10;j++){
                document.getElementById("riga-"+i).innerHTML += 
                `
                <div class="col-1 blocco "> 
                </div>
                `;
            }
    
          }  
        };
    
        if( lv == "media" ) {
            tabella.innerHTML="";
            for(let i=0; i < 9 ;i++){
                tabella.innerHTML += `
                <div id="riga-${i}" class="d-flex flex-row justify-content-center">
                </div>
                `;
        
                for(let j=0; j < 9 ;j++){
                    document.getElementById("riga-"+i).innerHTML += 
                    `
                    <div class="col-1 blocco "> 
                    </div>
                    `;
                };
        
            }; 
        };

        if( lv == "difficile" ) {
            tabella.innerHTML="";
            for(let i=0; i < 7 ;i++){
                tabella.innerHTML += `
                <div id="riga-${i}" class="d-flex flex-row justify-content-center">
                </div>
                `;
        
                for(let j=0; j < 7 ;j++){
                    document.getElementById("riga-"+i).innerHTML += 
                    `
                    <div class="col-1 blocco"> 
                    </div>
                    `;
                };
        
            };  
        };

        let myArray = document.getElementsByClassName("blocco");
console.log(myArray);
for (let index = 0; index < myArray.length; index++) {

    myArray[index].addEventListener("click",function(){
        this.classList.remove("blocco");
        this.classList.add("acqua");

    });

};

});




