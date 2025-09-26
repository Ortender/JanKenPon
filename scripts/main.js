/*********************************************************************************
 * 
 * Starting point, this file initiate the game. 
 * 
 *********************************************************************************/

// We get all the elements that need to either be displayed or be removed during the game
let btnnewgame = document.getElementById("btnnewgame")
let vsicon = document.getElementById("vsicon")
let choicesection = document.querySelector(".userchoicesection")
let playerhealthbar = document.querySelectorAll(".playerhealth")
let pchealthbar = document.querySelectorAll(".PChealth")
let result_image = document.getElementById("resultimage")
let KOimage = document.querySelectorAll(".KOimage img")
let choiceicons = document.querySelectorAll(".choiceicon")

// We setup the healthpoint of the characters to "full" by indexing it at 0, it'll help us go through the different images
let playerhealth = 0
let PChealth = 0

setupgame()

/**
 * We setup a listner on the "New game" button
 * When the user click on "New game" we initiate the game
 */
btnnewgame.addEventListener( "click", () => {
    // we hide some elements if the player was already playing
    hide_element(playerhealthbar[playerhealth])
    hide_element(pchealthbar[PChealth])
    for (i=0; i < KOimage.length; i++) {
        hide_element(KOimage[i])
    }
    // we launch the game
    launchgame()
})