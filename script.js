let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const names = ["Le Phuoc Minh Quan", "Nguyen Tien Hung", "Trinh Thang"]
  let i;
  let slides = document.getElementsByClassName("slideshow_image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  document.getElementById("usrin4").innerHTML = names[slideIndex-1];
}

// TODO: merge to [nhansp][a3k55_yearbook]
//       pull request this.