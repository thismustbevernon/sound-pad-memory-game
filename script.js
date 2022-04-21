// added feature variables and constants
//var audioFiles = ["","Bass-Drum-1","Bamboo","Claves","Bass-Drum-3","Clap-1","Electro-Tom"]
//const ext = ".wav";
//const dir ="/assets/"
//var audio = new Audio();

//Global Variables
var pattern = [];  //stores the pattern of the buttons pressed
var progress = 0  //player's progress
var gamePlaying = false
var guessCounter = 0;//to count the number of player's guesses
var tonePlaying = false //tracks whether tone is playing or not
var volume = 0.5       //must be between 0.0 and 1.0
var resume = false; //resume the audioContext
var mistakes = 5;
var timer = 5;
var timerVar;
var life = document.getElementById("life")
var time = document.getElementById("time") //clock countdown

var clueHoldTime = 800;//how long to hold each clue
const cluePauseTime = 50; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//StartGame()
function startGame(){
  progress = 0;
  gamePlaying = true;
  generatePattern();
  
  if(!resume){
    context.resume().then(() => {
        console.log('Resumed successfully');
      });
      resume = true;
  }
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  showChance();
  playClueSequence();

}


//generate random pattern
function generatePattern(){
  let size = 7;
  let max = 6;
  for(let i=0;i<size;i++){
    pattern[i] = Math.ceil(Math.random() * max);
  }
}//end generatePattern()

//show the chance prompt
function showChance(){
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("chance_prompt").classList.remove("hidden");
  life.textContent = mistakes;
  time.innerHTML = timer;

}

//stopGame()
function stopGame(){
  gamePlaying = false;
  
  //swap the Start and End Buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
  
  //resets all variables
  clueHoldTime = 1000;
  mistakes = 2;
  clearTimer();
  hideChance();

}

//hide the chance
function hideChance(){
  document.getElementById("welcome").classList.remove("hidden");
  document.getElementById("chance_prompt").classList.add("hidden");

}


// Sound Synthesis Functions


const freqMap = {
   1: 261.6,
   2: 329.6,
  3: 392,
  4: 520,
  5: 665,
  6: 780
}
function playTone(btn,len){ 
 o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
   tonePlaying = true
   setTimeout(function(){
     stopTone()
    },len)
}

function startTone(btn){
 if(!tonePlaying){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
 }
}


 function stopTone(){
     g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
     tonePlaying = false
 }

//Added feature optional sound synthesizer

//function playTone(btn,len){ 
  //playAudio(btn);
  //tonePlaying = true
  //setTimeout(function(){
    //stopTone()
  //},len)

//}

//function startTone(btn){
   // if(!resume){
        //context.resume().then(() => {
            //console.log('Resumed successfully');
          //});
    //}
   // playAudio(btn);
   
//}

//function stopTone(){
    //g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    //tonePlaying = false

//}

//Plays the added audio files when the buttons are pressed
//function playAudio(btn){
  //audio.src = dir+audioFiles[btn]+ext;
  //console.log("btn: ",btn);
  //audio.loop = false;
  //audio.play();

//}


//Controls the seqence of play
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }

}

function playClueSequence(){
  guessCounter = 0;
  const holdTime = 800;
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  setTimeout(startIntervalForTimer,delay);
  console.log(clueHoldTime)
  clueHoldTime = clueHoldTime - Math.floor(holdTime / (pattern.length));
}


//starts the interval for the clock timer
function startIntervalForTimer(){
  timerVar = setInterval(startTimer, 1000);

}

//starts the countdown of the clock timer
function startTimer(){
  timer--;
  time.innerHTML = timer;
  if(timer == 0){
    loseGame();
  }
}

/* light and clear button*/
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


//Winning and losing the game

function loseGame(){
  if(timer == 0){
    setTimeout(function(){alert("Times up. Game Over. You lost.");},50);
  }else{
    setTimeout(function(){alert("Game Over. You lost.");},50);
  }
  stopGame();
  
}


function winGame(){
  stopGame();
  alert("You won. Congratulations!")

}


//Controls the guesses made by the player
function guess(btn){
   console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == (pattern.length)-1){
        winGame();
      }else{
        clearTimer();
        time.innerHTML = timer;
        progress++;
        playClueSequence()
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes--;
    life.innerHTML = mistakes;
    if(mistakes == 0){
      loseGame()
    }
    
  }

}

//resetting the timer
function clearTimer(){
  timer = 5;
  clearInterval(timerVar);

}


//Page Initialization

var contextClass = (window.AudioContext || 
    window.webkitAudioContext || 
    window.mozAudioContext || 
    window.oAudioContext || 
    window.msAudioContext);

if (contextClass) {
  var context = new contextClass();
  var o = context.createOscillator()
  var g = context.createGain()
  g.connect(context.destination)
  g.gain.setValueAtTime(0,context.currentTime)
  o.connect(g)
  o.start(0)
  
} else {
  // Web Audio API is not available.
  console.log("Web Audio API is not available. ")
}



