colorBox=document.querySelectorAll('.colorBox');
questionColor=document.getElementById('qsColor');
//get game level buttons from html page
var easyBtn=document.getElementById('easy');
var hardBtn=document.getElementById('hard');
var respMsg=document.querySelector('#msg');
var h1=document.querySelector('h1');
var resetBtn=document.querySelector('#reset');

easyBtn.addEventListener('click',function(){
    reset();
    //chage selected button
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    levelNum=3;
    makeGame();
    if (levelNum===3){
    colorBox[3].style.backgroundColor="";
    colorBox[4].style.backgroundColor="";
    colorBox[5].style.backgroundColor="";
    }   
});

hardBtn.addEventListener('click', function(){
    reset();
    //chage selected button
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    levelNum=6;
    makeGame();
});
window.onload=function(){
   levelNum=6;
    makeGame();
};

//add eventlistener on click to reset button
resetBtn.addEventListener('click', function(){
    reset();
    //loop through our boxes and feed them with colors
    makeGame();
});

function makeGame(){
//Get new colors
colors=makeColorArr(levelNum);
//pic a random color and select it
selectedColor=colors[Math.floor(Math.random()* colors.length)];
for (i=0;i<colors.length;i++){
    if(colors[i]){
        colorBox[i].style.backgroundColor=colors[i];
    } else{
        colorBox[i].style.background="";
    }
    //attach color to the 
    questionColor.textContent=selectedColor;
    //add eventlistener to each box
    colorBox[i].addEventListener('click', function(){
    bgColor= this.style.backgroundColor;
    //check if clicked color is selected one
    if (selectedColor===bgColor){
    this.classList.add("right");
    resetBtn.textContent="Play Again";
    h1.style.backgroundColor=selectedColor;
   }
   else {
    this.classList.add("wrong");
   }
});
}
}

//reset everything function & generate colors as per level num
function reset(){
        //update selected color to h1 title &bg color
        h1.style.backgroundColor='';
        //remove right and wrong classes
        colorBox.forEach(function(color,index){
            colorBox[index].classList.remove("wrong");
            colorBox[index].classList.remove("right");
        });
}

//make a colors array as per input
function makeColorArr(num){
    arr=[];
    for (i=0; i<num;i++){
    arr.push(genRandColor());
}
    return arr;
}

//generate random colors function
function genRandColor(){
    //generate red color index
    var red= Math.floor(Math.random() *256);
    //generate red color index
    var green= Math.floor(Math.random() *256);
    //generate red color index
    var blue= Math.floor(Math.random() *256);
    return "rgb("+red+", "+green+", "+blue+")";
}
