let userScore = 0;
let computerScore = 0;
// yaha humne html ke div or paragraph ko access karne ke liye querySelector ka use kiya hai taki hum score ko update kar sake aur message ko show kar sake //

const images = document.querySelectorAll(".image");
const msgPass = document.querySelector(".msg-container");
const msgShow = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

// har ek kaam ke liye ek function banao ussee hum modular kahte h isse code clean aur easy to read ho jata hai 
// taki in functions ka use hum future mein bhi kar sake jab jarurat pade //

const  genComputerChoice = () => {
    let choices = ["rock", "paper", "scissor"];
// iss function ke andar hum computer ki choice ko generate karenge aur return karenge 
// math.floor humne point ke baad ki values ko integer banane ke liye use kiya hai 
// math.random() isliye use kiya hai taki hume random values mil sake 
// *3 isliye use kiya hai taki hume 0, 1, 2 mein se koi bhi value mil sake isse jada  values chahiye to hum * ke age koi bhi number likh sakte hai jo bhi likhenge use ek number pehle tak ki random value milegi kyonki number 0 se start hota hai//

    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
const drawGame = () =>{
   
    msgShow.innerText = "Game was Draw! Try Again";
    msgShow.style.backgroundColor = "#fdc57b";
    msgShow.style.color = "black";
}

const showWinner = (userWin, userchoice, computerChoice) => {
    if(userWin){
        
        userScore++;
        userScorePara.innerText = userScore;
        // yaha humne winner ko show karne ke liye msgShow ke andar innerText ka use kiya hai taki hume message show ho sake //
        // kisi bhi div ya paragraph ke andar innerText ka use karne se hume us div ke andar text show ho jata hai //
        
        msgShow.innerText =   `congratulations! You are Winner! , your ${userchoice} beats ${computerChoice} `;
       
        // yaha humne winner ko show karne ke liye msgShow ke andar background color ko green kar diya hai taki user ko pata chal sake ki wo jeet gaya hai //
        // class ya id ke agge .style ka use karne se hum us div ke andar style ko change kar sakte hai for ex. .backgroundcolor, color, etc//
        
        msgShow.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msgShow.innerText = `You are Lose! Better Luck Next Time, your ${userchoice} lose to ${computerChoice}`;
        msgShow.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    
  // abb mujhe computer ki choice ko generate karwana h//
    const computerChoice = genComputerChoice();
   
  
    if(userchoice === computerChoice){
        // draw game//
        drawGame();
    }
    else {
        //userWin isliye true hai kyonki user ki choice computer ki choice se alag hai aur user ki choice computer ki choice se jeet rahi hai//

        let userWin = true;
        if(userchoice === "rock"){
            //abb humne rock choose kiya hai to computer ki choice paper ya scissor ho sakti hai//
            //agar computer ki choice paper hai to user lose karega aur agar computer ki choice scissor hai to user jeetega
            // false userWin ki true condition ko galat karne ke liye use kiya h kyonki user ne paper choose kiya hai or ho sakta h ki wo scissor choose kare to uske liye baad me :true use kiya taki userWin ki condition sahi rahe//
            userWin = computerChoice === "paper"? false: true;
        }
        else if(userchoice ==="paper"){
            userWin = computerChoice === "scissor"? false:true;
        }
        else {
            userWin = computerChoice ==="rock"?false :true;
        }
        showWinner(userWin, userchoice, computerChoice);


    }
}


// har div ke uper ek event listener lagaya hai jo click ko tarck karega indivisualy  //

images.forEach((image)=>{
   
    image.addEventListener("click",()=>{
        // yaha humne image ke uper click hone par har ek image ki id's ko alag alag track karne ke liye getAttribute ka use kiya hai //

        const userchoice = image.getAttribute("id");
        playGame(userchoice);

    })
})


