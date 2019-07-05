var score;
score=[0,0];
activeplayer=0;
var totalscore=0;



document.getElementById('dice').style.display='none';


document.getElementById('roll-dice').addEventListener('click',function(){
	var dice;
	dice=Math.floor(Math.random()*6)+1;
	var DiceDOM=document.getElementById("dice");
	DiceDOM.style.display='block';
	DiceDOM.src="dice-" + dice + ".png"; 

	if(dice!==1){
		totalscore+=dice;
		document.getElementById("current-"+ activeplayer).textContent=totalscore;
	}
	else
	{	
		totalscore=0;
		change();
	}

});
document.getElementById("hold-dice").addEventListener("click",function(){
	score[activeplayer]+=totalscore;
	document.getElementById("final-score-"+activeplayer).textContent=score[activeplayer];
	change();


	

});

function change(){
		if(score[activeplayer]>99){
			document.getElementById("player-"+activeplayer).innerHTML="WINNER";
			document.getElementById("roll-dice").style.display='none';
			document.getElementById("hold-dice").style.display='none';
			document.getElementById("dice").style.display='none';


		}
		else{
		document.getElementById("current-"+ activeplayer).textContent=0;
		activeplayer===0?activeplayer=1:activeplayer=0;
		totalscore=0;
		document.querySelector(".first-player").classList.toggle("active");
		document.querySelector(".second-player").classList.toggle("active");
}

}
document.getElementById("new-game").addEventListener("click",function(){

	document.getElementById("current-0").textContent=0;
	document.getElementById("current-1").textContent=0;
	document.getElementById("player-0").innerHTML="PLAYER 1";
	document.getElementById("player-1").innerHTML="PLAYER 2";
	document.getElementById("final-score-0").textContent=0;
	document.getElementById("final-score-1").textContent=0;
	document.getElementById("roll-dice").style.display='block';
	document.getElementById("hold-dice").style.display='block';


});