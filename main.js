
const allItems = document.querySelectorAll(".mh-menu li");

allItems.forEach(item => {
  item.addEventListener("click", function (e) {
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('active');
    }
    this.classList.add('active');
  });
});

$(document).click(function (event) {
  if (!$(event.target).closest('.mh-menu').length) {
    $('body').find('.member').removeClass('active');
  }
});