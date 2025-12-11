
// script.js
// Annoying Button
// JJ
// 12.10.25


// Making an audio work
// function onPbuttonclick(){
//     var sound =document.getElementById('HOLLOW_PURPLE');
//         sound.load()
//         sound.play()
// }


//makes the buttons invisible
Teleport.style.display = 'none'
Cbutton1.style.display = 'none'
Cbutton2.style.display = 'none'


// get document elements
const redbutton = document.getElementById("redbutton");
let clicks = 0


// add EventListeners
redbutton.addEventListener('click', () => onButtonClick());


// main driver for annoying button
// This is the code for the main button, the red button that says DO NOT PRESS
function onButtonClick() {


    clicks++;
    if(clicks==1){
        alert("Click this button again to start the project. SideNote - Most of the Basic weapons and Advanced weapons were described by past knowledge and basic google searches.");
    }
    else if(clicks==2){
        alert("Thank you for starting.");
    }
    else if(clicks==3){
        alert("Basic Button Added");
        let Gbutton = document.createElement("BUTTON");
        Gbutton.textContent = "Basic Button";
        document.body.appendChild(Gbutton);
        Gbutton.classList.add("button");
        Gbutton.classList.add("greenbutton");
    // This is the code for the Green button I have, Had to put the function in the red buutton functionality area
    //split to make it work
    Gbutton.addEventListener('click', () => onButtonClick());
    let cliks = 0
    function onButtonClick() {
        cliks++;
        if(cliks==1){
            alert("This button is about the basic weaponry of World War 1.");
        }
        else if(cliks==2){
            alert("Bayonets");
        }
        else if(cliks==3){
            alert("A bayonet was normally a knife or a short blade attached to the barrel of a rifle for trench warfare so the troops would have a close range option to defend against enemies raiding and when raiding.");
        }
        else if(cliks==4){
            alert("Trench Maces");
        }
        else if(cliks==5){
            alert("As the name says. It’s a mace to use in Trenches for close quarters combat, sometimes it looked like a gear on the end, sometimes it had spikes. 100% of the time it’s a wooden club with a top or spikes.");
        }
        else if(cliks==6){
            alert("Rifles");
        }
        else if(cliks==7){
            alert("Rifles were best effective at medium ranges, precise, and were good in Trenches due to the Trenches distances from each other.");
        }
        else if(cliks==8){
            alert("That's all for this button, click the start button again for the next button.");
        }
    }
    }
    else if(clicks==4){
        alert("Advanced Weapons button added.");
        let Bbutton = document.createElement("BUTTON");
        Bbutton.textContent = "Advanced";
        document.body.appendChild(Bbutton);
        Bbutton.classList.add("button");
        Bbutton.classList.add("bluebutton");
    // This is the code for the Blue button I have, Had to put the function in the red buutton functionality area
//split to make it work
    Bbutton.addEventListener('click', () => onButtonClick());
    let clics = 0
    function onButtonClick() {
        clics++;
        if (clics==1){
            alert("This button is about the advanced weaponry of World War 1.");
        }
        else if (clics==2){
            alert("Grenades");
        }
        else if (clics==3){
            alert("A small, hand held explosive that had a fuse, started when the pin was pulled and the handle was released, giving soldiers only a short amount of time to throw it or risk getting blown up. Commonly used in trench raids since they didn’t need a direct line of sight to do heavy damage or cause injuries due to shrapnel.");
        }
        else if (clics==4){
            alert("Machine Guns");
        }
        else if (clics==5){
            alert("Machine guns, like a rifle, are a projectile throwing weapon. It is great in close ranges with a high rate of fire but the accuracy quickly decreases the farther away you are. Mostly used in fortified positions of a trench making the middle between the 2 closest trenches of a war a “No Man’s Land”.");
        }
        else if (clics==6){
            alert("Scoped Rifles");
        }
        else if (clics==7){
            alert("It is literally just a rifle but it has a scope, giving the soldiers using it a higher accuracy at longer ranges.");
        }
        else if (clics==8){
            alert("Mortar");
        }
        else if (clics==9){
            alert("A mortar is a small, portable, artillery piece. It consists of a tube barrel, a stand, and a base. It was used to fire over hills or buildings for indirect fire.");
        }
        else if (clics==10){
            alert("That's all for this button, click the Start button again.")
        }
    }
    }
    else if(clicks==5){
        alert("Machine's of War added");
        let Pbutton = document.createElement("BUTTON");
        Pbutton.textContent = "Machine";
        document.body.appendChild(Pbutton);
        Pbutton.classList.add("button");
        Pbutton.classList.add("purplebutton");
     // This is the code for the Purple button I have, Had to put the function in the red buutton functionality area
 //split to make it work
    Pbutton.addEventListener('click', () => onButtonClick());
    let taps = 0
    function onButtonClick() {
        taps++;
        if (taps==1){
            alert("This button is about the advanced weaponry of World War 1.");
            onPbuttonclick();
        }
        else if (taps==2){
            alert("Tanks")
        }        
	else if (taps==3){
            alert("Tanks were very simple but very influential in trench warfare. They were armored beasts run on treads, but very much a gamble. Out of 100 tanks on a battlefield, only 50 would start moving when the group was told to move up. A little fun fact about these early tanks is that they had “Genders”. Female tanks would have machine guns on it while Male tanks had 6 pound cannons on them. An unreliable but heavy hitting beast of metal and fear.")
        }
        else if (taps==4){
            alert("Artillery")
        }

        else if (taps==5){
            alert("Artillery is basically just a mortar with armor, and a lot more damage to cause. An artillery battery had more range than a mortar, more armor, and a lot of hell to raise, great to cause morale breaks in enemy lines and to shellshock them.")
        }
        else if (taps==6){
            alert("That's all for this button, click the Start button again")
        }
    }
    }
    else if(clicks==6){
        alert("Thank's for completing this project.");
    }
    else if(clicks==7){
        alert("Go to the google doc for the sources used.")
        redbutton.style.display = 'none'
    }
}
