const tiles = [
    "water",
    "grass",
    "mountain"
];


function generateWorld(size, noise, density){

    let world = [];

    for(let y = 0; y < size; y++){

        world[y] = [];

        for(let x = 0; x < size; x++){

            let random = Math.random();


            if(noise > 50 && x > 0 && random < noise/100){

                world[y][x] = world[y][x-1];

            }

            else if(random < density/100){

                world[y][x] = "mountain";

            }

            else if(random < 0.6){

                world[y][x] = "grass";

            }

            else{

                world[y][x] = "water";

            }

        }
    }

    return world;
}