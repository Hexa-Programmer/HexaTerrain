const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawWorld(world){

    let pixelSize = canvas.width / world.length;

    for(let y = 0; y < world.length; y++){

        for(let x = 0; x < world[y].length; x++){

            let tile = world[y][x];

            if(tile == "water")
                ctx.fillStyle = "blue";

            if(tile == "grass")
                ctx.fillStyle = "green";

            if(tile == "mountain")
                ctx.fillStyle = "gray";

            ctx.fillRect(
                x * pixelSize,
                y * pixelSize,
                pixelSize,
                pixelSize
            );
        }
    }
}
