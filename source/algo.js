function computerPlay(){
    let choices=["rock","paper","scissor"];
        return choices[(Math.floor(Math.random()*3))];
}
function battle(playerSelection,computerSelection){
    let flag=0;
    alert("AI chose "+computerSelection+" and You chose "+ playerSelection);
    // alert("You chose "+playerSelection);
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            //tie
            flag=0;
        }
        else if(computerSelection=="paper"){
            //you win
            flag=-1;
            // 
        }else if(computerSelection=="scissor"){
            flag=1;
            //ai wins
            // 
        }else{
            flag=-1;
            alert("You chose an invalid choice. Hence you loose.")
        }
        
    }else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            //you win
            flag=1;
        }else if(computerSelection=="paper"){
            //Tie
            flag=0;
        }else if(computerSelection=="scissor"){
            //computer wins
            flag=-1;
        }else{
            flag=-1;
            alert("You chose an invalid choice. Hence you loose.")
        }
    }else if(playerSelection=="scissor"){
        if(computerSelection=="rock"){
            //computer wins
            flag=-1;
        }else if(computerSelection=="paper"){
            //you win
            flag=1;
        }else if(computerSelection=="scissor"){
            //Tie
            flag=0;
        }else{
            flag=-1;
            alert("You chose an invalid choice. Hence you loose.")
        }
    }else{
        flag=-1;
        alert("You chose an invalid choice. Hence you loose.")
    }
    if(flag==-1){
        alert("Oh no! How did the A.I. win :(");
    }else if(flag==1){
        alert("Hell yeah! You showed them who's the real boss :)");
    }else{
        alert("Its a tie :|");
    }
    return flag;
}
function game(num=5){
    let ai=0,human=0;
    for(let i=0;i<num;i++){
        computerSelection=computerPlay();
        playerSelection=Number(prompt("Choose your weapon. Type 1 for rock, 2 for paper and 3 for scissor"));
        console.log(playerSelection);
        playerSelection=["rock","paper","scissor"][playerSelection-1];
        let win=battle(playerSelection,computerSelection);
        if(win==1)human++;
        else if(win==-1)ai++;
    }
    if(human==ai){
        //tie
        alert(" :| Human and AI both tied in a "+num+"-match series :|");
    }else if(human>ai){
        //humans win
        alert(":) Humans won in a "+num+"-match series :)");

    }else{
        //ai wins
        alert(":( ai won in a "+num+"-match series :(");
    }
}