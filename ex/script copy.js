

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
                alert(`🎉 Congratulations! 🎉 \nIn ${i}attempt(s) you discovered the answer!`)
                break;
            }  else {
                if (i === 7) { alert (`Guessing is over!!!  \nUnfortunately, you misguessed "number: ${xxx}".`); break;} else { 
                    (xxx > yyy ) ? alert ("Increse ▲") : alert ("Decrease ▼"); continue; };
            }
        }
    }
}


