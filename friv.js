
 
//Garfield
 
 function loadGame(gameUrl) {
      var container = document.getElementById('game-1');
      container.innerHTML = `<iframe  src="https://www.gameflare.com/embed/garfield-s-scary-scavenger-hunt/" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" width="900" height="490" allow="autoplay; fullscreen" allowfullscreen=""></iframe>`;
}

//Hount The House 

function loadGame(gameUrl) {
    var container = document.getElementById('game-2');
    container.innerHTML = `<iframe id="iframe-in-game" src="https://www.gameflare.com/embed/haunt-the-house/" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" width="800" height="635" allow="autoplay; fullscreen" allowfullscreen="" onload="iframeInGameLoaded(10)"></iframe>`;
}

//Jack Smith

function loadGame(gameUrl) {
    var container = document.getElementById('game-2');
    container.innerHTML = `<iframe id="iframe-in-game" src="https://www.gameflare.com/embed/jacksmith/" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" width="700" height="560" allow="autoplay; fullscreen" allowfullscreen="" onload="iframeInGameLoaded(10)"></iframe>`;
}

//Power Pamplona

function loadGame(gameUrl) {
    var container = document.getElementById('game-3');
    container.innerHTML = `<iframe id="iframe-in-game" src="https://www.gameflare.com/embed/power-pamplona/" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" width="800" height="435" allow="autoplay; fullscreen" allowfullscreen="" onload="iframeInGameLoaded(10)"></iframe>`;
}

//Crazy Penguin

function loadGame(gameUrl) {
    var container = document.getElementById('game-4');
    container.innerHTML = `<iframe id="iframe-in-game" src="https://www.gameflare.com/embed/crazy-penguin-catapult/" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" width="550" height="535" allow="autoplay; fullscreen" allowfullscreen="" onload="iframeInGameLoaded(10)"></iframe>`;
}



 function openGameInNewPage(gameUrl) {
    
     window.open(gameUrl,);
}







