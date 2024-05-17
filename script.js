let yourscore=0;
let compscore=0;
let options=["rock","paper","scissors"];
let buttons = document.querySelectorAll(".options");
// console.log(buttons);
let scores = document.querySelectorAll(".score");

for (let i=0;i<3;i++) {
    buttons[i].addEventListener("click",(event) => {
        let comppick = Math.floor(Math.random()*3);
        // console.log(options[i]);
        // let i = button
        if(comppick==i) {
            document.getElementsByClassName("textbox")[0].innerHTML=`Its a draw. Both picked ${options[i]}`
        }
        else if (comppick-i == 1 || comppick-i==-2) {
            compscore++;
            scores[1].innerHTML=compscore;
            document.getElementsByClassName("textbox")[0].innerHTML=`You lose. You picked ${options[i]} & Computer picked ${options[comppick]}`;
        }
        else {
            yourscore++;
            scores[0].innerHTML=yourscore;
            document.getElementsByClassName("textbox")[0].innerHTML=`You win. You picked ${options[i]} & Computer picked ${options[comppick]}`;
    
        }
    });
}