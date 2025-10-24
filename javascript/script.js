const bodyText = document.getElementById("") /*Creating an element with an id then putting it in here will let me fill a page. I can adjust things depending on what parts I want to be pulling from an additional folder*/

content.forEach(function(element){ /*This creates a name to refer to whatever object might be in the container I'm using, then go through and create html for each element, which needs to match the names used in the reference document*/
    const contentDiv = document.createElement("div");

    const elementName = document.createElement("h2");
    elementName.textContent = element.name;
}) /* I'll need to figure out my template, then I can create my script to make the html for each page*/