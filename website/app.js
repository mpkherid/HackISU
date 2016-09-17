document.getElementById("searchGame").addEventListener("change", searchGameFunction);



function searchGameFunction(){

var searchQuery = document.getElementById("searchGame").value.toLowerCase();
  console.log(searchQuery);

  if (searchQuery == "basketball"){
    window.location = "prototype3.html";

  }

var gameQuery = document.getElementById("playThis").value.toLowerCase();
    console.log(gameQuery);

    if (gameQuery == "football"){
      window.location = "inactiveGame.html";

    }


}
