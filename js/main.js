var links = document.getElementsByTagName("a")
var numberOfLinks = links.length


function createLists(x){
    let newli = document.createElement("li");
    let  newlicontent = document.createTextNode(x);
    newli.appendChild(newlicontent);
    document.body.appendChild(newli);
}

createLists(numberOfLinks);

var lastLink = links[numberOfLinks-1]

createLists(lastLink)

var penultimo = links[numberOfLinks-2]
createLists(penultimo);

var wemanLinks = document.querySelectorAll("a[href=\"https://wemanconnect.com\"]")

createLists(wemanLinks.length);


var parrafo = document.getElementsByTagName("p");

var lastParr = parrafo[parrafo.length -1]

var linksInParr = lastParr.getElementsByTagName("a");
var numofLinksInParr = linksInParr.length

createLists(numofLinksInParr);

//////////////


function showOnClic(){
    var element = document.getElementsByTagName("span");
    element[0].classList.remove("hidden");
}


//////
function addOnClic(){
   let newli = document.createElement("li");
   let  newlicontent = document.createTextNode("x");
   newli.appendChild(newlicontent);
   document.body.appendChild(newli);
}
