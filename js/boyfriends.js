console.log("boyfriends");

const boyfriends_title = document.createElement("h3");
boyfriends_title.setAttribute("class", "boyfriends");
boyfriends_title.textContent = 'Our Associates, aka "The Boyfriends"';
section.appendChild(boyfriends_title);

const boyfriends_list = document.createElement("ul");
boyfriends_list.setAttribute("id", "boyfriends");
section.appendChild(boyfriends_list);

people.push(
    {
        name: "Cullen",
        description: "Cullen - ",
        group: "boyfriends",
    },
    
    {
        name: "Lazarene",
        description: "Lazarene - ",
        group: "boyfriends",
    },
);