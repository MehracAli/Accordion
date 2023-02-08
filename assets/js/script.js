$(document).ready(function () {
  
  $(".sect").click(function () {
    let sect = $(this)
    let sectParagraph =  sect[0].nextElementSibling
    sectParagraph.setAttribute("data-id", this.id)
    $(`[data-id = ${this.id}]`).fadeToggle()
    let icon = sect[0].lastElementChild
    icon.setAttribute("rotated", this.id)
    let rotated = $(`[rotated = ${this.id}]`)
    rotated[0].classList.toggle("fa-rotate-180")
  });
});
