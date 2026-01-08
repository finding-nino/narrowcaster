let slides = [];
let currentIndex = 0;
let defaultDuration = 8000;

fetch("slides.json")
  .then(response => response.json())
  .then(data => {
    slides = data.slides;
    defaultDuration = data.defaultDuration;
    showSlide();
  });

  function showSlide() {
  const slide = slides[currentIndex];
  const container = document.getElementById("slideshow");

  container.innerHTML = "";

  let element;

  switch (slide.type) {
    case "html":
      element = document.createElement("iframe");
      element.src = slide.src;
      break;

    case "image":
      element = document.createElement("img");
      element.src = slide.src;
      break;

    case "video":
      element = document.createElement("video");
      element.src = slide.src;
      element.autoplay = true;
      element.muted = true;
      element.loop = false;
      break;
  }

  container.appendChild(element);

  const duration = slide.duration || defaultDuration;

  setTimeout(nextSlide, duration);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide();
}
