document.getElementById("nameForm").addEventListener("change", makeGameFunction);

function makeGameFunction(){

var gameQuery = document.getElementById("nameForm").value.toLowerCase();
    console.log(gameQuery);

    if (gameQuery == "Syed"){
      window.location = "inactiveGame.html";

    }

}
