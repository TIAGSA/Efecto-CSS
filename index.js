const img = [
  "./assets/Imagen1.jpg",
  "./assets/Imagen2.jpg",
  "./assets/Imagen3.png",
  "./assets/Imagen4.jpg",
  "./assets/Imagen5.jpg",
];

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  if (Math.abs(x - lastX) > 160 || Math.abs(y - lastY) > 160) {
    let diffX = lastX - x;
    let diffY = lastY - y;
    lastX = x;
    lastY = y;
    newImage(x, y, diffX, diffY);
  }
});

let i = 0;

const newImage = (x, y, diffX, diffY) => {
  const $imge = document.createElement("img");
  $imge.src = img[i];
  $imge.style.left = x + "px";
  $imge.style.top = y + "px";
  $imge.style.transform = `translate(${diffX}px,${diffY}px)`;
  document.body.append($imge);
  $imge.classList.add("fadeIn");
  i = i === img.length - 1 ? 0 : i + 1;
  setTimeout(() => {
    $imge.classList.add("fadeOut");
    setTimeout(() => {
      $imge.remove();
    }, 500);
  }, 500);
};
