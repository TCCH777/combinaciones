let sky_button = document.getElementById("sky_button");

console.log(sky_button);

sky_button.addEventListener("click", changeBackground);

let sky_image = document.getElementById("sky_image");

let sky_counter = 1;

function changeBackground() {
  sky_counter += 1;

  if (sky_counter > 4) {
    sky_counter = 1;
  }

  sky_image.src = "./imagenes/c" + sky_counter + ".png";
  console.log("change background");
}

let grass_button = document.getElementById("grass_button");

console.log(grass_button);

grass_button.addEventListener("click", changeGrass);

let grass_image = document.getElementById("grass_image");

let grass_counter = 1;

function changeGrass() {
  grass_counter += 1;

  if (grass_counter > 4) {
    grass_counter = 1;
  }

  grass_image.src = "./imagenes/g" + grass_counter + ".png";
  console.log("change Grass");
}

let faro_button = document.getElementById("faro_button");

console.log(faro_button);

faro_button.addEventListener("click", changeFaro);

let faro_image = document.getElementById("faro_image");

let faro_counter = 1;

function changeFaro() {
  faro_counter += 1;

  if (faro_counter > 4) {
    faro_counter = 1;
  }

  faro_image.src = "./imagenes/f" + faro_counter + ".png";
  console.log("change Faro");
}
