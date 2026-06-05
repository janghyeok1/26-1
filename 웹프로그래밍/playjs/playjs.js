window.onload = setCTime;
function calc(){
	let x = document.getElementById("x").value;
	let y = document.getElementById("y").value;
	let sum = Number(x) + Number(y);
	document.getElementById("sum").value = sum;
}

let computerNumber = Math.floor(Math.random() * 100 + 1);
let nGuesses = 0;
function numGuess(){
	let result = "";
	let number = parseInt(document.getElementById("user").value);
	document.getElementById("real").value = computerNumber;
	nGuesses++;
	if (number == computerNumber) result = "성공입니다";
	else if(number < computerNumber) result = "낮습니다";
	else if(number > computerNumber) result = "높습니다";
	else result = "알수없음";
	document.getElementById("result").value = result;
	document.getElementById("guesses").value = nGuesses;
}
function replay(){
	nGuesses = 0;
	computerNumber = Math.floor(Math.random() * 100 + 1);
	document.getElementById("real").value = 0;
	document.getElementById("user").value = "";
	document.getElementById("guesses").value = nGuesses;
	document.getElementById("result").value = "";
}
function setCTime(){
	let now = new Date();
	mon = "";
	if(now.getMonth() == 0) mon = "Jan";
	else if(now.getMonth() == 1) mon = "Feb";
	else if(now.getMonth() == 2) mon = "Mar";
	else if(now.getMonth() == 3) mon = "Apr";
	else if(now.getMonth() == 4) mon = "May";
	else if(now.getMonth() == 5) mon = "Jun";
	else if(now.getMonth() == 6) mon = "Jul";
	else if(now.getMonth() == 7) mon = "Aug";
	else if(now.getMonth() == 8) mon = "Sep";
	else if(now.getMonth() == 9) mon = "Oct";
	else if(now.getMonth() == 10) mon = "Nov";
	else if(now.getMonth() == 11) mon = "Dec";
	else mon= "?";
	let s = mon + " " + now.getDate() + ". " + now.getHours() + ":" +
	now.getMinutes() + ":" + now.getSeconds();
	document.getElementById("ctime").innerHTML = s;
	setTimeout(setCTime,1000);
}

let WORD_LIST = ["apple","banana","computer","graphic","headphone","today","keyboard"];
function showWordList(){
	document.getElementById("wordList").innerHTML = WORD_LIST.join(", ");
}
function addWord(){
	let s = prompt("신규단어", "");
	for(let i = 0; i < WORD_LIST.length; i++){
		if(s == WORD_LIST[i]) {
			q = 1;
			alert("이미 존재합니다");
			return;
		}
	}
	WORD_LIST.push(s);
	showWordList();
}
function sortWord(){
	WORD_LIST.sort();
	showWordList();
}
function shuffleWord(){
	let i = WORD_LIST.length - 1;
	while(true){
		let ran = Math.floor(Math.random()*(i+1));
		let temp;
		temp = WORD_LIST[ran];
		WORD_LIST[ran] = WORD_LIST[i];
		WORD_LIST[i] = temp;
		i--;
		if(i == 1) break;
	}
	showWordList();
}
let MAX_GUESSES = 6;
let guesses = "";
let guessCount = MAX_GUESSES;
let word;
function newGame(){
	word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
	guessCount = MAX_GUESSES;
	guesses = "";
	document.getElementById("hguess").value = "";
	document.getElementById("guessbutton").disabled = false;
	updatePage();
}
function guessLetter(){
	if(guessCount == 0) return;
	if(document.getElementById("clue").innerHTML.indexOf("_") < 0) return;
	let letter = document.getElementById("hguess").value;
	if(guesses.indexOf(letter) >= 0) return;
	guesses += letter;
	if(word.indexOf(letter) < 0) guessCount--;
	updatePage();
	document.getElementById("hguess").value = "";
}
function updatePage(){
	document.getElementById("hangmanpic").src = "hangman" + guessCount + ".gif";
	let clueString = "";
	for(let i = 0;i < word.length;i++) {
		if(guesses.indexOf(word[i]) >= 0) clueString += `${word[i]} `;
		else clueString += "_ ";
	}
	let clue = document.getElementById("clue");
	clue.innerHTML = clueString;
	let guessArea = document.getElementById("guessstr");
	if(guessCount == 0) guessArea.innerHTML = "you lose";
	else if(clueString.indexOf("_") < 0) guessArea.innerHTML = "you win";
	else guessArea.innerHTML = `Guesses: ${guesses}`;
	let image = document.getElementById("hangmanpic");
	image.src = `hangman${guessCount}.gif`;
}

function innerTest(){
	let str = prompt();
	document.getElementById("innerTest").innerText = str;
}
function changeimage(){
	let img = document.getElementById("img");
	let sarray = img.src.split('/');
	let str = sarray[sarray.length - 1];
	if(str == "img1.png") img.src = "img2.png";
	else img.src = "img1.png";
}
let colorNames = ["maroon","red","orange","yellow","olive","purple","fuchsia",
	"white","lime","green","navy","blue","aqua","teal","black","silver","gray"];
function createColorTable(){
	for(let i = 0; i < colorNames.length;i++){
		let node = document.createElement("div");
		node.innerText = colorNames[i];
		node.setAttribute("class","ctbox");
		node.style.backgroundColor = colorNames[i];
		node.style.display = "inline-block";
		node.style.width = "60px";
		node.style.padding = "10px";
		document.getElementById("colorTable").append(node);
	}
}
function removeColorTable(){
	let parent = document.getElementById("colorTable");
	let child = parent.getElementsByClassName("ctbox");
	for(let i = child.length;i > 0;i--){
		child[i - 1].remove();
	}
}