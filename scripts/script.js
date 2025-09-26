/*********************************************************************************
 * 
 * This file contains all the functions required for the game to run. 
 * 
 *********************************************************************************/

function setupGame() {
    for (index=0; index < choiceicons.length; index++) {
        // We monitor when the player chooses an option between rock, paper and scissor by clicking on the corresponding icon
        choiceicons[index].addEventListener( "click", clickEvent)
            
    }
}

function launchgame() {
    playerhealth = 0
    PChealth = 0
    // We hide the new game button
    hide_element(btnnewgame)
    // We display the rest of the elements
    display_element(vsicon)
    display_element(playerhealthbar[0])
    display_element(pchealthbar[0])
    display_element(choicesection)
   /*for (i=0; i < choiceicons.length; i++) {
        console.log(i)
        display_element(choiceicons[i])
    }*/
    
}

function clickEvent(event) {
    // we retrieve the id of the icon that was clicked on as the user choice
    let user_choice = event.target.id
    // we change the character image to the corresponding choice
    // we get the computer random choice
    let computer_choice = get_computer_choice()
    console.log(user_choice, computer_choice)
    change_character_image("Alexx", user_choice)
    change_character_image("computer", computer_choice)
    //we now display the result of the this round, first we identify the winner
    let round_result = identify_winner(user_choice, computer_choice)
    //then we display the right result text image "draw", "you win", "you lose"
    display_result_test(result_image, round_result)
    display_element(result_image)
    //then based on the result we impact the character health
    switch (round_result) {
        case "draw":
            break
        case "win":
            PChealth++
            healthbar_management(pchealthbar, PChealth)
            if (PChealth > 3) {
                endgame("computer", playerhealth, PChealth)
            }
            break
        case "lose":
            playerhealth++
            healthbar_management(playerhealthbar, playerhealth)
            if (playerhealth > 3) {
                endgame("player", playerhealth, PChealth)
            }
            break
    }
}

/**
 * this function removes the "hide" css class from a page element in order to display it.
 * @param {DOM element} element : the DOM element we want to display
 */
function display_element(element) {
    element.classList.remove("hide")
}

/**
 * this function adds the "hide" css class to a page element in order to hide it.
 * @param {DOM element} element : the DOM element we want to hide
 */
function hide_element(element) {
    element.classList.add("hide")
}

/**
 * this function returns a random choice for the computer between 1 and 3.
 */
function get_computer_choice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

/**
 * this function identify the winner by comparing the choices provided by the player and the computer.
 */
function identify_winner(user_choice, computer_choice) {
    if (user_choice === computer_choice) {
        return "draw"
    } else {
        switch (user_choice) {
            case "rock":
                if (computer_choice === "scissors") {
                    return "win"
                } else {
                    return "lose"
                }
            case "paper":
                if (computer_choice === "rock") {
                    return "win"
                } else {
                    return "lose"
                }
            case "scissors":
                if (computer_choice === "paper") {
                    return "win"
                } else {
                    return "lose"
                }
        }
    }
}

/**
 * this function manage the display of the right health bar when the player or computer lose health.
 * @param {DOM element} healthbar : the image element we want to hide or display
 * @param {Int} healthpoint : the current status of health of the Character
 */
function healthbar_management(healthbar, healthpoint) {
    healthbar[healthpoint-1].classList.add("hide")
    healthbar[healthpoint].classList.remove("hide")
}


/**
 * this function manage the display of the right character image depending on the chosen action.
 * @param {string} choice : the action to display
 * @param {string} character : which of the two character we want to change the image PC or Player
 */
function change_character_image(character, choice) {
    let character_image = document.getElementById(`${character}`)
    character_image.src = `images/${character}${choice}.png`
}

/**
 * this function manage the display of the right text image depending on the result of the round.
 * @param {string} result : the result of the round, to display
 * @param {element} result_image : the image to be replaced
 */
function display_result_test(result_image, result) {
    result_image.src = `images/${result}.png`
}

/**
 * this function manage the end of the game.
 * @param {string} looser : indicate which character as lost (to display the K.O.)
 */
function endgame(looser) {
    let looserKOimage = document.getElementById(`KO${looser}`)
    display_element(looserKOimage)
    display_element(btnnewgame)
    hide_element(vsicon)
    hide_element(choicesection)
    hide_element(result_image)
}