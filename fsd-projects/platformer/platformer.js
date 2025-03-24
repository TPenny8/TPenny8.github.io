$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(180,695,100,20);
    createPlatform(279,695,100,20);
    createPlatform(500,600,100,20);
    createPlatform(600,600,100,20);
    createPlatform(300,500,100,20);
    createPlatform(279,380,100,20);
    createPlatform(200,500,100,20);
    createPlatform(900,500,100,20);
    
    

    




    // TODO 3 - Create Collectables
    createCollectable("database",600,560);
    createCollectable("steve",300,300);
    createCollectable("diamond",950,460);
    



    
    // TODO 4 - Create Cannons
    createCannon("right", 600,2000)
    createCannon("top",500,800)
    createCannon("top",800,700)
    createCannon("right",350,2000)
    
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
