

function mcc(){
    const xxx = Math.ceil(Math.random()*100);
    let yyy;
    result();

    function numberEntered() {
        yyy = prompt("Enter a number")*1;
        return yyy;
    }
    function result() {
        for (let i=1; i<8; i++) {
            // alert (`Try no: ${i}`);
            yyy = numberEntered();
            if  (xxx === yyy){
                alert(`Congrats! \nIn ${i}attempt(s) you discovered the answer!`)
                break;
            }  else {
                if (i === 7) { alert (`Guessing is over!!!  \nUnfortunately, you misguessed "number: ${xxx}".`); break;} else { 
                    (xxx > yyy ) ? alert ("Increse ▲") : alert ("Decrease ▼"); continue; };
            }
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                 CURVED TEXT                                */
/* -------------------------------------------------------------------------- */

            // //First put the function in the head.
            // function getName(){
            //     var input = document.getElementById("name");
            //     input.style.backgroundColor = ''; //Reseting the backgroundcolor

            //     if (input.value == ''){ //Add the.value
            //         input.style.backgroundColor = 'red';
            //     }
            //     else{
            //         //document.write('Hello ' + input.value); //This would overwrite the whole document, removing your dom.
            //         for (let i=1; i<4; i++){ 
            //         //Instead we write it in your greeting field.
            //         var tE = document.getElementById(`greet${i}`);
            //         tE.innerHTML = input.value;
            //     }}
            // }

            //     return false //Prevent the form from being submitted.
            // }





