function createGame(player1, hour, player2) { 
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>   
`
}

var delay = 0;
function createCard(date, day, games) {
    delay = delay + 0.8; //tempo de animação
    return `
    <div class="card" style="animation-delay: ${delay}s"> 
        <h2>${date} <span>${day}</span></h2>
        <ul>
           ${games} 
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("brazil", "16:00", "serbia")) +
        
        createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
        
        createCard("01/12", "sexta", createGame("brazil", "16:00", "cameroon"))
