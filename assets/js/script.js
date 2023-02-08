$(document).ready(function () {
  let last;
  $(".sect").click(function () {
    if(last){
      last.slideToggle()
    }
    let sect = $(this)
    let sectParagraph =  sect[0].nextElementSibling
    sectParagraph.setAttribute("data-id", this.id)
    last = $(`[data-id = ${this.id}]`).slideToggle()
    let icon = sect[0].lastElementChild
    icon.setAttribute("rotated", this.id)
    let rotated = $(`[rotated = ${this.id}]`)
    rotated[0].classList.toggle("fa-rotate-180")
  });
});
