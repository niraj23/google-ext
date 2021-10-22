//Global Variables
const BASE_URL = "http://localhost:3000/characters"
const cBar = document.getElementById("character-bar")
const vForm = document.getElementById("votes-form")
const rBtn = document.getElementById("reset-btn")
const cForm = document.getElementById("character-form")
const dInfo = document.getElementById("detailed-info")
const cName = document.getElementById("name")
const cImg = document.getElementById("image")
const dVotes = document.getElementById("vote-count")
let newCharacter;
let holdsTheData;

init();

function init(){
    getData(BASE_URL)
    vForm.addEventListener("submit", increaseVotes)
    rBtn.addEventListener("click", voteReset)
    cForm.addEventListener("submit", newChar)
}

function getData(BASE_URL){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(char => infoForData(char))
}

function infoForData(char){
    globalData(char);
    char.forEach(showNames);
    childFirst(char);
}

function globalData(char){
    holdsTheData = [...char]
    return holdsTheData;
}

function showNames(data){
    const div = document.createElement("DIV")
    const br = document.createElement("BR")
    const img = document.createElement("IMG")
    img.src = data.image
    img.style = "height: 100px; width: 100px;"
    const anc = document.createElement("A")
    anc.href = "#"
    anc.id = `cbA${data.id}`
    anc.style = `text-decoration:none; text-align: center; float: left;`
    const span = document.createElement("SPAN")
    span.style = "color: white;"
    span.textContent = data.name
    cBar.append(div)
    div.append(anc)
    anc.append(img)
    anc.append(br)
    anc.append(span)
    anc.addEventListener("click", () => charClick(data))
}

function childFirst(char){
    cName.textContent = char[0].name
    cImg.src = char[0].image
    dVotes.textContent = char[0].votes
}

function charClick(char){
    cName.textContent = char.name
    cImg.src = char.image
    dVotes.textContent = char.votes
    newCharacter = char
    return newCharacter;
}

function increaseVotes(e){
    e.preventDefault();
    let input = document.getElementById("votes").value
    let old = parseInt(dVotes.textContent)
    let newCount = old + parseInt(input)
    dVotes.textContent = newCount
    let updateData = {
        "id": `${newCharacter.id}`,
        "name": `${newCharacter.name}`,
        "image": `${newCharacter.image}`,
        "votes": `${newCount}`
    }
    updateDB(updateData)
    e.target.reset();
}

function voteReset(e){
    e.preventDefault();
    let updateData = {
        "id": `${newCharacter.id}`,
        "name": `${newCharacter.name}`,
        "image": `${newCharacter.image}`,
        "votes": `0`
    }
    updateDB(updateData)
    dVotes.textContent = 0
}

function newChar(e){
    e.preventDefault();
    const newName = document.querySelector("#character-form #name")
    const newImg = document.getElementById("image-url")
    let newCharData = {
        "id": holdsTheData.length+1,
        "name": newName.value,
        "image": newImg.value,
        "votes": 0
    }
    newCharToDB(newCharData);
    showNames(newCharData);
}

function newCharToDB(newCharData){
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCharData)
    })
    .then(resp => resp.json())
    .then(char => char)
}

function updateDB(updateData){
    fetch(`${BASE_URL}/${updateData.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    })
    .then(resp => resp.json())
    .then(data => data.votes)
}