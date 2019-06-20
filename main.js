// THINK ABOUT INCLUDING A PRINT RECEIPT BUTTON -MAKE IT FANCY

// let customCard = document.querySelector('#card-customize');
let displayCard = document.querySelector('#display-data-card');
let mainCard = document.querySelector('#main-card');
let span = document.getElementsByClassName("close")[0];

function checkData(){
	let totalAmount = parseFloat(document.querySelector('#total').value);
	let partyNumber = parseFloat(document.querySelector('#party').value);
    let tip = parseFloat(document.querySelector('#gratuity').value);
    let userChoice = document.querySelector('#options').value;
    let inputFields = document.querySelector('.userInput').value;
    let myModal = document.querySelector('#myModal');

    if (userChoice === '1'){
        if(!isNaN(totalAmount) && !isNaN(partyNumber)){
            mainCard.style.display = 'none';
            displayCard.style.display = 'block';
            document.querySelector('#title').innerHTML='Split The Bill Evenly';
            doEvenly();
        }else{
            alert('Fill Out All The Fields');
        }
    }
    else if(userChoice === '2'){
        if(!isNaN(totalAmount) && !isNaN(partyNumber)){
            mainCard.style.display = 'none';
            displayCard.style.display = 'block';
            document.querySelector('#title').innerHTML='Split The Bill Randomly';
            console.log('We Goin into Random')
            doRandom();
        }else{
            alert('Fill Out Missing Field');
        }
    }
    else if(userChoice === '3'){
        if(!isNaN(totalAmount) && !isNaN(partyNumber)){
            mainCard.style.display = 'none';
            displayCard.style.display = 'none';
            myModal.style.display = "block";
        }else{
            alert('Fill Out Missing Field')
        }
    }
    else{
        alert('Please Select Payment Method');
    }
}

function doEvenly(){
    let totalAmount = parseFloat(document.querySelector('#total').value);
    let partyNumber = parseFloat(document.querySelector('#party').value);
    let tip = parseFloat(document.querySelector('#gratuity').value);
    if(isNaN(tip)){
        tip = 0;
    }
    console.log('this the tip', tip)
    console.log(typeof tip)
    let amount =( (totalAmount + tip) / partyNumber ).toFixed(2);  
    for( let numGuest = 1 ; numGuest <= partyNumber; numGuest++){
        let row = document.createElement('tr'); // create row node
        let col = document.createElement('td'); // create column node
        let col2 = document.createElement('th'); // create second column node
        row.appendChild(col); // append first column to row
        row.appendChild(col2); // append second column to row
        col.innerHTML = `Guest ${numGuest} :`; // put data in first column
        col2.innerHTML += '$ ' + amount ; // put data in second column
        let table = document.querySelector('#show-data'); // find table to append to
        table.appendChild(row); // append row to table
    }
}

function doRandom(){
    let totalAmount = parseFloat(document.querySelector('#total').value);
	let partyNumber = parseFloat(document.querySelector('#party').value);
    let tip = parseFloat(document.querySelector('#gratuity').value);
    if(isNaN(tip)){
        tip = 0;
    }
    console.log('this the tip', tip)
    let afterTip = parseFloat(totalAmount + tip);
	let newVal=[];
	for( let i = 0 ; i < partyNumber; i ++ ){
		if(i === partyNumber -1){
			newVal.push(afterTip)
		}
		else{
            newVal.push((Math.floor(Math.random().toFixed(2) * afterTip )));
            afterTip = afterTip - newVal[newVal.length-1].toFixed(2)
		}
	}
	for( let numGuest = 0 ; numGuest < partyNumber  && newVal.length; numGuest++){
	  let row = document.createElement('tr'); // create row node
      let col = document.createElement('td'); // create column node
      let col2 = document.createElement('th'); // create second column node
      row.appendChild(col); // append first column to row
      row.appendChild(col2); // append second column to row
      col.innerHTML = "Guest " + (numGuest + 1) + ":"; // put data in first column
      col2.innerHTML += '$ ' + newVal[numGuest] ; // put data in second column
      var table = document.querySelector('#show-data'); // find table to append to
      table.appendChild(row); // append row to table
      }
}
function goBack(){
    let showData = document.getElementById('show-data');
    if(displayCard.style.display === "block"){
        displayCard.style.display = "none";
        document.querySelector('#myform').reset();
        showData.textContent = '';
        mainCard.style.display = "block";
    }
    else if(customCard.style.display === "block"){
        customCard.style.display = "none";
        document.getElementById("myform").reset();
        showData.textContent = '';
        mainCard.style.display = "block";
    }
}
span.onclick = ()=>{
    myModal.style.display = "none";
    mainCard.style.display = 'block';
}
window.onclick = (event)=>{
    if(event.target === myModal) {
        myModal.style.display = "none";
        mainCard.style.display = 'block';
    }
}



