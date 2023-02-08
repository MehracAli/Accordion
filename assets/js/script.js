$(document).ready(function () {

  $(".sect-1").click(function () {
    let sect = $(this)
    let sectParagraph =  sect[0].nextElementSibling
    sectParagraph.setAttribute("id", "toggle-1")
    $("#toggle-1").fadeToggle()
    let icon = $(".sect-1-icon")
    icon[0].classList.toggle("fa-rotate-180")
  });
  $(".sect-2").click(function () {
    let sect = $(this)
    let sectParagraph =  sect[0].nextElementSibling
    sectParagraph.setAttribute("id", "toggle-2")
    $("#toggle-2").fadeToggle()
    let icon = $(".sect-2-icon")
    icon[0].classList.toggle("fa-rotate-180")
  });
  $(".sect-3").click(function () {
    let sect = $(this)
    let sectParagraph =  sect[0].nextElementSibling
    sectParagraph.setAttribute("id", "toggle-3")
    $("#toggle-3").fadeToggle()
    let icon = $(".sect-3-icon")
    icon[0].classList.toggle("fa-rotate-180")
  });
});
