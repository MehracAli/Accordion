$(document).ready(function () {
  let last;
  let lastIcon;
  $(".sect").click(function () {
    if (last) {
      last.slideUp();
      lastIcon.classList.toggle("fa-rotate-180");
    }

    let sect = $(this);

    let sectParagraph = sect[0].nextElementSibling;
    sectParagraph.setAttribute("data-id", this.id);
    last = $(`[data-id = ${this.id}]`).slideToggle();

    // last[0].removeAttribute("data-id")
    // console.log(last[0].getAttribute("data-id"));

    let icon = sect[0].lastElementChild;
    icon.setAttribute("rotated", this.id);
    let rotated = $(`[rotated = ${this.id}]`);
    lastIcon = rotated[0];
    rotated[0].classList.toggle("fa-rotate-180");
  });
});
