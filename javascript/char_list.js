const bodyText = document.getElementById("Dramatis Personae") /* This script creates html from one of my character list documents. I'll need to figure out exactly how I want to set this up when my brain is more functional*/

document.createElement("h4");
sectionName.textContent = the_gang.title; /* Pretty sure this doesn't work. I'll figure it out later*/

const list = document.createElement("ul");

people.forEach(function(character){ 
    console.log(character.name)
    const listItem = document.createElement("li");

    const characterName = document.createElement("strong");
    characterName = character.name;
    listItem.appendChild(characterName);

    const characterDescription = document.createElement("div");
    sectionName.textContent = character.description;
    listItem.appendChild(characterDescription);
    
    list.appendChild(listItem);
});