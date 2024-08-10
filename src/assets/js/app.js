const selects = document.querySelectorAll(".select");
const selectItems = document.querySelectorAll(".select-item");
const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const modalMessages = document.getElementById("myModal");
const myButton = document.getElementById("myButton");
const modalInner = document.querySelector(".modal-inner");
/*slider
let position = 0;
const slideToShow = 1;
const slideToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
if (container) {
  console.log(container.clientWidth);
  const itemWidth = container.clientWidth / slideToShow;
  const movePosition = slideToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    position -= movePosition;

    setPosition();
    checkBtns();
    //const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
  });

  btnPrev.addEventListener("click", () => {
    position += movePosition;

    setPosition();
    checkBtns();
    //const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
  };

  checkBtns();
}
  */

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

function getDeviceType() {
  const ua = navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  return isMobile;
}

if (myButton) {
  myButton.addEventListener("click", function () {
    if (getDeviceType()) {
      window.location.href = "mobile-messages.html";
    } else {
      // Open modal window
      modalMessages.classList.add("show");
      document.body.classList.add("no-scroll");

      setTimeout(() => {
        modalInner.style.transform = "none";
        modalInner.style.opacity = "1";
      }, 1);
    }
  });
}

// Add event listener to close modal window
if (modalMessages) {
  modalMessages.addEventListener("click", function (event) {
    if (event.target == modalMessages) {
      modalInner.removeAttribute("style");

      setTimeout(() => {
        modalMessages.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }, 200);
    }
  });
}

modalButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const modalId = item.dataset.modal;
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector(".modal-content");

    modal.classList.add("show");
    document.body.classList.add("no-scroll");

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 1);
  });
});

modals.forEach((item) => {
  item.addEventListener("click", (e) => {
    const modalContent = item.querySelector(".modal-content");

    if (e.target == item) {
      modalContent.removeAttribute("style");

      setTimeout(() => {
        item.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }, 200);
    }
  });
});

selects.forEach((item) => {
  const selectHeader = item.querySelector(".select-header");

  selectHeader.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.innerHTML;
    const currentText = item
      .closest(".select")
      .querySelector(".select-current");
    const currentSelect = item.closest(".select");

    currentText.innerHTML = text;
    currentSelect.classList.remove("active");
  });
});
