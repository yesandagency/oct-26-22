//add event to start button
var start = document.getElementById('start');
start.addEventListener('click', chooseTheme);
//all of the other buttons/divs
var game = document.getElementById('game');
var which = document.getElementById('which');
var yesand = document.getElementById('yesand');
var leader = document.getElementById('leader');
var hr = document.getElementById('hr');
yesand.addEventListener('click', chooseyesand);
leader.addEventListener('click', leaderButton);
hr.addEventListener('click', hrButton);


//add functions for chosing a theme
function chooseTheme(){
    //Hide the 'start game' button and show the game
    start.style.display="none";
    which.style.display="block";
}
function chooseyesand(){
    theme = 'yesand';
    words = [...wordsYes];
    game.style.display = "block";
    mistakes = 0;
    startGame();
}

function leaderButton(){
    alert("We are still working on this one, check back next quarter!");
}

function hrButton(){
    alert("Not safe for work!");
}

//this function will choose a word in random
function chooseWord() {
    //make sure there are words left
    if (words.length < 1) {
        //say you finished if there aren't more words
        if (mistakes == 1) {
            alert("Well done! you finished all the words. You've made "+mistakes+" mistake. Press OK to refresh");	
        } else {
            alert("Well done! you finished all the words. You've made "+mistakes+" mistakes. Press OK to refresh");
        }
        //reload the page
        document.location.reload();
    } else{
        //get a random number
        randomNumber = Math.floor((Math.random()*words.length));
        //choose the a random word using the random number generated
        chosenWord = [...words[randomNumber]];
        
        //remove the word from the list of words, so it can't be used again
        words.splice(randomNumber, 1);
        //choose the number of the missing letter
        missingLetterNum = Math.floor((Math.random()*chosenWord.length))
        //remove letter from array and make a var of the missing letter 
        missingLetter = chosenWord[missingLetterNum];
        chosenWord.splice(missingLetterNum, 1, '_');
    }
}

//this function will choose letters that you can choose from
function chooseLetters() {
    var randomLetters;
    var letters = [...lettersOG];
    //choose 8 random letters
    for (var i = 0; i < 8; i++) {
        //random number
        var random = Math.floor((Math.random()*letters.length));

        if (letters[random] == missingLetter) {
            random++
        }

        randomLetters += [...letters[random]];
        letters.splice(random, 1);
        chosenLetters = randomLetters;
    }
    //choose another random number
    random2 = Math.floor((Math.random()*(chosenLetters.length-9)));
    //make an array out of random chosen letters
    lettersArray = chosenLetters.split('');
    //remove the first 9 of the array (it said 'undefined')
    lettersArray.splice(0,9);
    //sort the array randomly
    lettersArray.sort(() => Math.random() - 0.5);
    //add the missing letter to a random place in the array, storing that random place so it can be used later on.
    lettersArray.splice(random2, 1, missingLetter);		
}



//function that will start the game
function startGame(){
    //hide the theme buttons
    which.style.display="none";
    //choose a word and letters that are beneath
    chooseWord();
    chooseLetters();
    //this is where the word/letters will be shown
    var showWord = document.getElementById('word');
    var showLetters = document.getElementById('letters');
    var wordsLeft = document.getElementById('wordsLeft');
    //show how many words you have left
    let wordsLeftCount = words.length+1;
    if (words.length>=1) {
        wordsLeft.innerHTML='You have '+wordsLeftCount+' words left';
    } else{
        wordsLeft.innerHTML='You have 1 word left';
    }
    //show the word as a string
    showWord.innerHTML = chosenWord.join('');

    //make buttons out of all the letters
    letterB1.innerHTML = lettersArray[0];
    letterB2.innerHTML = lettersArray[1];
    letterB3.innerHTML = lettersArray[2];
    letterB4.innerHTML = lettersArray[3];
    letterB5.innerHTML = lettersArray[4];
    letterB6.innerHTML = lettersArray[5];
    letterB7.innerHTML = lettersArray[6];
    letterB8.innerHTML = lettersArray[7];


    showLetters.appendChild(letterB1);
    showLetters.appendChild(letterB2);
    showLetters.appendChild(letterB3);
    showLetters.appendChild(letterB4);
    showLetters.appendChild(letterB5);
    showLetters.appendChild(letterB6);
    showLetters.appendChild(letterB7);
    showLetters.appendChild(letterB8);

    /* adds a function for each button.
    If it's the correct one,
        Show the full word by:
            removing the underscore
            replacing it with the real letter
        Wait 1 second
        Move to next word
            call the same function
        
        TODO: optimize this javascript file (dry)
    */

    letterB1.onclick=function(){
        if (random2==0) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB2.onclick=function(){
        if (random2==1) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB3.onclick=function(){
        if (random2==2) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB4.onclick=function(){
        if (random2==3) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB5.onclick=function(){
        if (random2==4) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB6.onclick=function(){
        if (random2==5) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB7.onclick=function(){
        if (random2==6) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

    letterB8.onclick=function(){
        if (random2==7) {
            chosenWord.splice(missingLetterNum, 1, missingLetter);
            showWord.innerHTML = chosenWord.join('');
            setTimeout(startGame, 1000);
        }else{
            mistakes++;
            if (mistakes < 2) {
                alert('false! you have '+mistakes+' mistake')
            } else{
                alert('false! you have '+mistakes+' mistakes')
            }
            
        }
    }

}