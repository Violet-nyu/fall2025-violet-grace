console.log("listing");


people.forEach(function(character){ 
    console.log(character.name);
    
    const subsection = document.getElementById(character.group);

    const characterDescription = document.createElement("li");
    characterDescription.textContent = character.description;
    
    subsection.appendChild(characterDescription);
});