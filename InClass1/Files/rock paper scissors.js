var user = prompt("Rock, Paper or Scissors?");
var comp = Math.random();
if (comp < 0.34){
    comp = "Rock";
}else if(comp <= 0.67){
    comp = "Paper";
}
else{
    comp = "Scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "Tie";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "Rock wins";
        }
        else{
            return "Paper wins";
        }
    }
    if(choice1==="Paper"){
        if(choice2==="Rock"){
            return "Paper wins";
        }
        else{
            return "Scissors wins";
        }
    }
    if(choice1==="Scissors"){
        if(choice2==="Rock"){
            return "Rock wins";
        }
        else{
            return "Scissors wins";
        }
    }
};
compare(user,comp);