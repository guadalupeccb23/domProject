
function executeQuerySelector(){
    // selects the <p> using class selector
    let main = document.querySelector(".main");
    console.log("Content for main-->" + main);
    console.log("Content for main.innerHTML-->" + main.innerHTML);
    console.log("Content for main.innerHTML.trim()-->" + main.innerHTML.trim());

    main.style.color = "blue";
    main.style.fontSize = "20px";

    // Selects the <section> using tag selector
    let response = document.querySelector("section");
    console.log(response.innerHTML.trim());
    response.style.color = "green";
}

function getDescription(){
    let description = document.getElementById("description");
    console.log("The description is: " + description.innerHTML);
}


function executeSelectAll(){
    // Selects ALL the <li> elements and adds text to each one
    let listItems = document.querySelectorAll("li");
    for (let i=0; i < listItems.length; i++) {
       listItems[i].innerHTML += " is yummy";
       listItems[i].style.color = "red";
    }

}

function addRedFruit(){
    let myUnorderedList = document.querySelector("ul");

    //creating new item
    let newFruit = document.createElement("li");
    newFruit.textContent = "Cranberry";
    newFruit.style.color = "deeppink";

    myUnorderedList.appendChild(newFruit);
}

function removeRedFruit(){
    let myUnorderedList = document.querySelector("ul");

    //selecting all li items
    let listFruits = document.querySelectorAll("li");

    //Deleting last item
    myUnorderedList.removeChild(listFruits[listFruits.length-1]);
}