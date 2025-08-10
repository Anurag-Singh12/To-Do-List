const inputbox = document.getElementById('input-box'); //Variables
const listcontainer = document.getElementById('list-container');

function addTask(){
    if (inputbox.value === "") {   //inputbox is a variable access through id of input box
        alert("Your Task Box is Empty"); //this willshow alret if the inputbox is empty
        
    } else { //else
        let liitem = document.createElement('li'); //liitem is a variable it will create new element li
        liitem.innerHTML= inputbox.value; //add new text in it adding value inside li and whatever user will write in inputbox.value
        listcontainer.appendChild(liitem); // it will append li as a child in list container and display

        let span = document.createElement('span'); //again same process and li is a parent element of span cross icon
        span.innerHTML = "\u00d7"; // Unicode
        liitem.appendChild(span); //everything through variable

    }
    inputbox.value=""; //Clears the text in the input box after a task is added
    savedata(); //by using hoisting

}

listcontainer.addEventListener("click",function(e){
    if (e.target.tagName ==='LI') { 
        e.target.classList.toggle('checked');   //for checked icon
        savedata(); 
    }
     else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();     //for unchecked and remove
        savedata();   
    }
},false);//third argument false shows the bubbling phase

inputbox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // stops the default "form submit" or newline
        addTask();          // reusing the same code that button uses
    }
});

function savedata(){ //saving data in local storage
    localStorage.setItem("storeddata",listcontainer.innerHTML);//add the value what you want to save i.e list container
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("storeddata"); //displaying using getitem whenever we will open website again

}

showTask();
