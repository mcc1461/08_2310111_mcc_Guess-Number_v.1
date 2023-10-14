function mcc() {
  const xxx = Math.ceil(Math.random() * 100);
  let yyy;
  result();
  Swal({
    className: "swalClass"
  });

  function numberEntered() {
    yyy = prompt("Enter a number") * 1;
    return yyy;
  }
  function result() {
    for (let i = 1; i < 8; i++) {
      yyy = numberEntered();
      if (xxx === yyy) {
        Swal.fire(`
                🎉 Congratulations! 🎉
   In ${i} attempt(s) you discovered the answer!`);
        break;
      } else {
        if (i === 7) {
          swal.fire(`
                      😱  Guessing is over!!!  
                Unfortunately, you misguessed "${xxx}".`);
          break;
        } else {
          xxx > yyy ? alert("Increse ▲"): alert("Decrease ▼");
          continue;
        }
      }
    }
  }
}
