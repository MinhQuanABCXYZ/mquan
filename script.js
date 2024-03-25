let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const names = ["Tran Hoang Tien aka David Tien Tran", "Nguyen Tien Hung", "Trinh Thang", "Nguyen Le Phuoc Duy", "Tran Trung Nhan", "Nguyen Phu Trong (thủ khoa đầu vào)", "Nguyen Khanh Ky"];
  const dob = ["31/05/2006", "09/09/2006", "15/12/2006", "15/04/2006", "03/11/2006", "14/10/2006", "02/09/2006"];
  let i;
  let slides = document.getElementsByClassName("slideshow_image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  document.getElementById("usrin4").innerHTML = names[  slideIndex-1];
  document.getElementById("usrdob").innerHTML = "Date of birth: " + dob[slideIndex-1];
}

// TODO: merge to [nhansp][a3k55_yearbook]
//       pull request this.