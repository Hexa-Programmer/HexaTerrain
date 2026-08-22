const tiles = [
    "water",
    "grass",
    "mountain"
];

function generateWorld(size, noise, density, pattern = 1){

    let world = [];

    for(let y = 0; y < size; y++){

        world[y] = [];

        for(let x = 0; x < size; x++){

            let random = Math.random();
            let copied = false;

            if(noise > 30 && random < noise / 100){


                if(pattern === 1 && x > 0){
                    world[y][x] = world[y][x - 1];
                    copied = true;
                }

                else if(pattern === 2 && y > 0){
                    world[y][x] = world[y - 1][x];
                    copied = true;
                }

                else if(pattern === 3 && (x > 0 || y > 0)){
                    if(x > 0 && y > 0){
                        world[y][x] = Math.random() < 0.5 ? world[y][x - 1] : world[y - 1][x];
                    } else if(x > 0){
                        world[y][x] = world[y][x - 1];
                    } else {
                        world[y][x] = world[y - 1][x];
                    }
                    copied = true;
                }

                else if(pattern === 4){
                    let wave = Math.sin(x * 0.2) + Math.cos(y * 0.2);
                    if(wave > 0.5){
                        world[y][x] = "mountain";
                    } else if(wave > -0.5){
                        world[y][x] = "grass";
                    } else {
                        world[y][x] = "water";
                    }
                    copied = true;
                }
            }

            if(!copied){
                let threshold = density / 100;

                if(random < threshold * 0.5){
                    world[y][x] = "mountain";
                }
                else if(random < 0.5 + (threshold * 0.3)){
                    world[y][x] = "grass";
                }
                else{
                    world[y][x] = "water";
                }
            }

        }
    }

    return world;
}
