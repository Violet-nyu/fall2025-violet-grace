console.log("gang");

const title = document.createElement("h3");
title.setAttribute("class", "the_gang");
title.textContent = 'Basil Bit and Company, aka "The Gang"';
section.appendChild(title);

const list = document.createElement("ul");
list.setAttribute("id", "the_gang");
section.appendChild(list);

people.push(
    {
        name: "Alkin Fence Brooklyn",
        description: "Alkin Fence Brooklyn, Human, M, age 19, 5'10 - A disorderly, simply a former valet to an officer in the Firlish Crowns own military. A half-patriot to the Firlish Crown, and a lukewarm Avethan, Alkin first found the party while searching for his recently deceased cousin. Closer to modern day, what began as a plucky lad eager to join up with his cousins friends has become a brash and blooded cutter, his body given way to sorcerous technologies. Alkin has taken on an almost purely combat role amongst the gang, hyperspecializing in gunspring, blade, and his own physical sharpness. He acts as frontline attack-hound/operator for the group. He likes long walks on the beach, drinking tea, and both redheads and vicountesses.",
        group: "the_gang",
    },
    
    {
        name: "Basil Bit of Silton",
        description: "Basil Bit of Silton, Mouse, M, age 23, 3'4 - Former churchmouse, now an aspiring banker, Basil Bit manages the gang's finances and acts as our primary negotiator in many external dealings. Frequently uses his small size and skill as a climber to act as a scout for us in dangerous circumstances, has considerable knowledge on a range of subjects, and is very capable with a pistol. Basil Bit is less often directly involved in the party's sorcerous dealings, but supports aggressive pursuit of sorcerous power.",
        group: "the_gang",
    },
    
    {
        name: "Helene Hase von Limmstadt",
        description: "Helene Hase von Limmstadt, Kriegsminister, Human, F, age 36, 5'5 - A kriegsminister, a commander in the Lothrheimer war machine, elevated swiftly then disgraced equally so, part of the continual command churn as Lothrheim wages its war. She maintains that she bears no true responsibility for the state of the war and her dismissal, having lacked the influence to have had a substantive impact. After her dismissal, she was found and picked up by the crew of The Chalice Overflowing, where she met the rest of the crew. Well-educated, well-versed in current events, experienced, and used to command, she has become something of a strategist and tactician for the group, as well as an occasional spokeswoman, though her crippled leg and severe consumption limit her physical capabilities and mobility.",
        group: "the_gang",
    },
    
    {
        name: "Herb Dower of Brighton",
        description: "Herb Dower of Brighton, Trespasser, Human, F, age 19, 4'10 - Granddaughter of Higglebottom Dower, has a nack for explosives, chemisty and some combat skills. Burn scar across her face but wrapped in Ragman quality wrappings. Subtle due to size but not lacking in strength. She tends to be the frontline for the group but can also be in the middle of group for certain situations.",
        group: "the_gang",
    },
    
    {
        name: "Lisbet Lennox",
        description: "Lisbet Lennox, Human, F, age 27, 6'11 - The newest member of the group, along with Helene, but without the kriegsminister's prior experience. Lisbet is an idler and former circus freak, finding her place with the group and beginning to collect assorted skills.",
        group: "the_gang",
    },
    
    {
        name: "Milo",
        description: "Milo, Ragman, M, age 32 (supposedly), 5'12 (supposedly) - An idler, bearing an eclectic collection of skills and neosorcerous aspirations, able to flexibly fill most needs the gang may have.",
        group: "the_gang",
    },
    
    {
        name: "Reed",
        description: "Reed, Human, F, age 22, 5'5 - Bodysnatcher turned neosorcerer, Reed is often one of the faces of the team, our primary medic and surgeon, and perhaps the member of the gang most prone to compassion for random people we meet, at least without an ulterior motive. She has a range of other useful skills and can hold her own in a fight through more conventional means, as well as application of knucklebones.",
        group: "the_gang",
    },
    
    {   
        name: "Terra",
        description: "Terra - A simple fleece herder, and occasional heavy weaponry expert for the group. The most normal of the gang, with considerable moral reservations at some of our worst deeds.",
        group: "the_gang",
    },
);