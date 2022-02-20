
const show = document.getElementById('players');
show.style.border = '5px solid red';
show.style.padding = '10px';
const player = document.getElementsByClassName('player');

function setPlayerStyle(eachPlayer) {
    eachPlayer.style.border = '2px solid brown';
    eachPlayer.style.padding = '5px';
    eachPlayer.style.borderRadius = '10px';
    eachPlayer.style.margin = '5px';
}
for (const eachPlayer of player) {
    setPlayerStyle(eachPlayer);


}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    console.log(newPlayer);
    newPlayer.innerHTML = `
     <h4 class="player-name">Player- 2</h4>
                <p>Dolore temporibus adipisci accusamus ex! Vero nemo temporibus minus doloribus! Totam eaque impedit
                    iste quia nisi fugiat ab, ipsa nihil saepe corrupti! Non incidunt temporibus minima deleniti
                    similique officia fugiat!</p>
    
    `;
    playersContainer.appendChild(newPlayer);
    setPlayerStyle(newPlayer);
}


document.getElementById('players').addEventListener('click', function (event) {
    // console.log();
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'red';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'orange';
    }
})
