let tura = 0;
let yazi = 0;

let coin = document.querySelector(".coin");
let filtBtn = document.querySelector("#flip-button");
let resetBtm = document.querySelector("#reset-button");

// tıklama flipbtn 0tura 1 yazi

filtBtn.addEventListener('click', () => {
    let i  = Math.floor(Math.random() * 2);

    coin.style.animation = "none";
    if(i){
        // i 1 ise(tura)
        setTimeout(() => {
               coin.style.animation = "spin-yazi 3s forwards";

        }, 100);

        tura++
    }else {
        //tura
        setTimeout(() => {
             coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        yazi++;
    }

    // istatistik güncelle ve btn disabled
    setTimeout(updateStats,3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#tura-count").textContent = `Tura : ${tura}`
    document.querySelector("#yazi-count").textContent = `Yazı : ${yazi}`

}


function disableButton() {
    filtBtn.disabled = true;
    setTimeout(() => {
        filtBtn.disabled = false;
    }, 3000);
}

resetBtm.addEventListener('click', () => {
    coin.style.animation = "none";
    tura = 0;
    yazi = 0;
   updateStats()
});;





