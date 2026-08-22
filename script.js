let world;

document
.getElementById("generate")
.addEventListener("click",()=>{

    let size = Number(document.getElementById("size").value);
    let noise = Number(document.getElementById("noise").value);
    let density = Number(document.getElementById("density").value);
    let pattern = Number(document.getElementById("pattern").value);

    world = generateWorld(size, noise, density, pattern);

    drawWorld(world);

});

document
.getElementById("export")
.addEventListener("click",()=>{

    let link = document.createElement("a");
    link.download = "hexawfc.png";
    link.href = canvas.toDataURL();
    link.click();

});
