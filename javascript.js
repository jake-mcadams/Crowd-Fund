var itemModal = document.getElementById("my-modal");
var gotIt = document.getElementById("got-it");
var span = document.getElementById("closing");
var modal = document.getElementById("thanks");
var btn = document.getElementById("backing");
var bambooButton = document.getElementById('bambooButton');
var blackButton = document.getElementById('blackButton');
var mahoganyButton = document.getElementById('mahoganyButton');
var bambooSelected = false;
var blackSelected = false;
var mahoganySelected = false;
var chooseItem = document.getElementById('choose-modal-container');
var chooseClose = document.getElementById('choose-close');
// var closeItemModal = document.getElementById('')
var bamboochecked = document.getElementById('check1');
var noChecked = document.getElementById('check0');
var mahoganychecked = document.getElementById('check3');
var blackchecked = document.getElementById('check2');
var bambooPledgeChecked = false;
var noPledgeChecked = false;
var mahoganyPledgeChecked = false;
var blackPledgeChecked = false;
var plege0 = document.getElementById('pledge0');
var plege1 = document.getElementById('pledge1');
var plege2 = document.getElementById('pledge2');
var plege3 = document.getElementById('pledge3');
// pledge card checked border change
var border0 = document.getElementById('pledge-card-0');
var border1 = document.getElementById('pledge-card-1');
var border2 = document.getElementById('pledge-card-2');
var border3 = document.getElementById('pledge-card-3');
var cont0 = document.getElementById('continue0');
var cont1 = document.getElementById('continue1');
var cont2 = document.getElementById('continue2');
var cont3 = document.getElementById('continue3');
var input0 = document.getElementById('input0').value;
var input1 = document.getElementById('input1').value;
var input2 = document.getElementById('input2').value;
var input3 = document.getElementById('input3').value;
var numbers = /^[0-9]+$/;





// varibale end






// close button

gotIt.onclick = function(){
    // itemModal.style.display = "block";
    modal.style.display = "none";
}

span.onclick = function() {
    // console.log(spanID)
    itemModal.style.display = "none";
  }

  window.onclick = function(event){
    if (event.target == itemModal) {
        itemModal.style.display = "none";
    }else if(event.target == modal){
        modal.style.display = "none";
    }else{
        // console.log('didnt work');
    }
}


// book marking

var bookMark = document.getElementById('book-marked');
var bookMarked = false;

bookMark.onclick = function(){
    if(bookMarked == false){
        bookMarked =true
        this.style.color='hsl(176, 72%, 28%)'
    }else{
        bookMarked =false
        document.getElementById('book-marked').style.color='hsl(0, 0%, 48%)'
    }
    // this.style.color='hsl(176, 72%, 28%)'
    // console.log(bookMarked)
    }


// setting active state buttons

bambooButton.onclick = function(){
    if(bambooSelected == false){
        bambooSelected = true
        this.style.backgroundColor='hsl(176, 72%, 28%)'
    }else{
        bambooSelected = false;
        this.style.backgroundColor='hsl(176, 50%, 47%)';
    }
}

blackButton.onclick = function(){
    if(blackSelected == false){
        blackSelected = true
        this.style.backgroundColor='hsl(176, 72%, 28%)'
    }else{
        blackSelected = false;
        this.style.backgroundColor='hsl(176, 50%, 47%)';
    }
}

mahoganyButton.onclick = function(){
    if(mahoganySelected == false){
        mahoganySelected = true
        this.style.backgroundColor='hsl(0, 0%, 48%)';
        this.style.color='white';
    }else{
        mahoganySelected = false;
        this.style.backgroundColor='lightgrey';
        this.style.color='hsl(0, 0%, 48%)';
    }
}

// crowd fund page reload

var crowdButton = document.getElementById('crowdLogo');

crowdButton.onclick = function(){
    location.reload();
}


btn.onclick = function(){
    if(bambooSelected == true){
        itemModal.style.display = "block";
    }else if (blackSelected == true){
        itemModal.style.display = "block";
    }
    else if (mahoganySelected == true){
        itemModal.style.display = "block";
    }else{
        chooseItem.style.display="block";
    }
}

chooseClose.onclick = function(){
    chooseItem.style.display="none";
}

// clicking continue


cont0.onclick = function(){
    itemModal.style.display = "none";
    modal.style.display = "block";
    }

cont1.onclick = function(){
    itemModal.style.display = "none";
    modal.style.display = "block";
    var number = input1.value;
    console.log(number);
    }

cont2.onclick = function(){
    itemModal.style.display = "none";
    modal.style.display = "block";
    }

// checking item to pledge


bamboochecked.onclick = function(){
    if(bambooPledgeChecked == false){
        bambooPledgeChecked = true;
        this.classList.add("check-clicked");
        pledge1.classList.remove('pledge');
        border1.style.border='2px solid hsl(176, 50%, 47%)';
    }else{
        bambooPledgeChecked = false;
        this.classList.remove("check-clicked");
        pledge1.classList.add('pledge');
        border1.style.border='1px solid lightgrey';
    }
}

noChecked.onclick = function(){
    if(noPledgeChecked  == false){
        noPledgeChecked  = true;
        this.classList.add("check-clicked");
        plege0 .classList.remove('pledge');
        border0.style.border='2px solid hsl(176, 50%, 47%)';
    }else{
        noPledgeChecked  = false;
        this.classList.remove("check-clicked");
        plege0 .classList.add('pledge');
        border0.style.border='1px solid lightgrey';
    }
}


blackchecked .onclick = function(){
    if(blackPledgeChecked  == false){
        blackPledgeChecked  = true;
        this.classList.add("check-clicked");
        plege2 .classList.remove('pledge');
        border2.style.border='2px solid hsl(176, 50%, 47%)';
    }else{
        blackPledgeChecked  = false;
        this.classList.remove("check-clicked");
        plege2 .classList.add('pledge');
        border2.style.border='1px solid lightgrey';
    }
}


// functions

function offclick(event){
    if (event.target == itemModal) {
        itemModal.style.display = "none";
    }else if(event.target == modal){
        modal.style.display = "none"
    }else{
        // console.log('didnt work');
    }
}