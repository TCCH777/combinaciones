let sky_iz_button = document.getElementById("sky_iz_button");

console.log(sky_iz_button);

sky_iz_button.addEventListener("click", changeBackground);

sky_image = document.getElementById("sky_image");

function changeBackground() {
  sky_counter -= 1;

  if (sky_counter < 1) {
    sky_counter = 4;
  }

  sky_image.src = "./imagenes/c" + sky_counter + ".png";
  console.log("change background");
}

let grass_iz_button = document.getElementById("grass_iz_button");

console.log(grass_iz_button);

grass_iz_button.addEventListener("click", changeGrass);

grass_image = document.getElementById("grass_image");

function changeGrass() {
  grass_counter -= 1;

  if (grass_counter < 1) {
    grass_counter = 4;
  }

  grass_image.src = "./imagenes/g" + grass_counter + ".png";
  console.log("change Grass");
}

let faro_iz_button = document.getElementById("faro_iz_button");

console.log(faro_iz_button);

faro_iz_button.addEventListener("click", changeFaro);

faro_image = document.getElementById("faro_image");

function changeFaro() {
  faro_counter -= 1;

  if (faro_counter < 1) {
    faro_counter = 4;
  }

  faro_image.src = "./imagenes/f" + faro_counter + ".png";
  console.log("change Faro");
}
