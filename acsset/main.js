
// header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//header-camera 
let usersContainer = document.querySelector('.header-camera-container');
let removeCamera = document.getElementById('camera-remove');
let isShow = true;

removeCamera.onclick = () => {
  usersContainer.classList.add('hide')
}
function showHideUsers() {
  isShow = !isShow
  usersContainer.classList.toggle('hide', isShow);
}

//end header camera

// cartegory left subchild
const itemsSliderbar = document.querySelectorAll(".cartegory-left-li");
itemsSliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
//introduce______detail information
const introduce = document.querySelector(".introduce");
const detail = document.querySelector(".detail");
const showdetail = document.querySelector(".slick-down");
if (showdetail) {
  showdetail.addEventListener("click", function () {
    document
      .querySelector(".product-content__right-bottom-container")
      .classList.toggle("showinfo");
  });
}
if (showdetail) {
  document.querySelector(
    ".product-content__right-bottom-detail__body"
  ).style.display = "none";
}

if (introduce) {
  introduce.addEventListener("click", function () {
    document.querySelector(
      ".product-content__right-bottom-detail__introduce"
    ).style.display = "block";
    document.querySelector(
      ".product-content__right-bottom-detail__body"
    ).style.display = "none";
  });
}
if (detail) {
  detail.addEventListener("click", function () {
    document.querySelector(
      ".product-content__right-bottom-detail__body"
    ).style.display = "block";
    document.querySelector(
      ".product-content__right-bottom-detail__introduce"
    ).style.display = "none";
  });
}


// ----------------catergory location---------------

function showProduct() {
  location.href = "product.php";
}

function removeProduct() {
  document.querySelector('#product').style.display = "none";
}