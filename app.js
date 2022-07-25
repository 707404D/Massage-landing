// preview slider

let previewSlider = $("#previewSlider");

previewSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  // prevArrow: $('.preview__slider-btn'),
  // nextArrow: $('.preview__slider-btn1'),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
});

// features

$(document).ready(function () {
  $(".select").change(function () {
    window.location.href = $("option:selected", this).data("url");
  });
});

// reviews slider

$("#reviewsSlider").on("init", function (event, slick) {
  $(".reviews__nav-slide-current").text(parseInt(slick.currentSlide + 1) + "/");
  $(".reviews__nav-slide-all").text(slick.slideCount);
});

$("#reviewsSlider").on("afterChange", function (event, slick, currentSlide) {
  $(".reviews__nav-slide-current").text(parseInt(slick.currentSlide + 1) + "/");
  $(".reviews__nav-slide-all").text(slick.slideCount);
});
$("#reviewsSlider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".reviews__btn-left"),
  nextArrow: $(".reviews__btn-right"),
});

//  modal

// === modal choice worker
var modalworkersbtn = document.querySelector(".modal__worker-selector");
modalworkersbtn.addEventListener("click", function (event) {
  event.preventDefault();
  modalworkersbtn.classList.toggle("activeworkerbtn");
});

var modalworkers = document.getElementsByClassName("modal__worker");
var i;

for (i = 0; i < modalworkers.length; i++) {
  modalworkers[i].addEventListener("click", function () {
    Array.from(modalworkers).forEach((item) => {
      item.classList.remove("activeworker");
    });
    this.classList.add("activeworker");
  });
}

var modaltimesbtn = document.querySelectorAll(".modal__time-btn");

for (i = 0; i < modaltimesbtn.length; i++) {
  modaltimesbtn[i].addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("activetimebtn");

    var childs = $(this).find(".modal__worktime");

    for (i = 0; i < childs.length; i++) {
      childs[i].addEventListener("click", function () {
        Array.from(childs).forEach((item) => {
          item.classList.remove("activetimework");
        });
        this.classList.add("activetimework");
      });
    }
  });
}

//  modal choice day
var modaldays = document.querySelectorAll(".modal__days > ul > li");
var i;

for (i = 0; i < modaldays.length; i++) {
  modaldays[i].addEventListener("click", function () {
    Array.from(modaldays).forEach((item) => {
      item.classList.remove("choiceday");
    });
    if (this.classList.contains("freeday")) {
      this.classList.add("choiceday");
    } else {
      this.classList.remove("choiceday");
    }
  });
}
// modal choice type of features

var modaltypeoffeaturesbtn = document.querySelector(
  ".modal__typeoffeatures-btn"
);
modaltypeoffeaturesbtn.addEventListener("click", function (event) {
  event.preventDefault();
  modaltypeoffeaturesbtn.classList.toggle("activetyoffeaturesbtn");
});

var modaltypeoffeature = document.querySelectorAll(".modal__features-feature");
var i;

for (i = 0; i < modaltypeoffeature.length; i++) {
  modaltypeoffeature[i].addEventListener("click", function () {
    Array.from(modaltypeoffeature).forEach((item) => {
      item.classList.remove("activefeature");
    });
    this.classList.add("activefeature");
  });
}

// global sigh

var sighbtns = document.querySelectorAll(".btn-sigh");
var i;

for (i = 0; i < sighbtns.length; i++) {
  sighbtns[i].addEventListener("click", function () {
    let bodyblock = document.querySelector(".mainbody");
    bodyblock.classList.add("noscroll");
    let modal = document.querySelector(".modal");
    modal.classList.add("activemodal");
    let btnsuccesssigh = document.querySelector(".btn-successsigh");

    let modalclose = document.querySelectorAll(".modal__close");
    var i;
    for (i = 0; i < modalclose.length; i++) {
      modalclose[i].addEventListener("click", function () {
        modal.classList.remove("activemodal");
        bodyblock.classList.remove("noscroll");
      });
    }

    btnsuccesssigh.addEventListener("click", function () {
      let modalsuccess = document.querySelector(".modal__successsigh");
      modalsuccess.classList.add("activesuccess");

      setTimeout(function () {
        modalsuccess.classList.remove("activesuccess");
        modal.classList.remove("activemodal");
        bodyblock.classList.remove("noscroll");
      }, 2500);
    });
  });
}

//  slider for change months

let monthsSlider = $("#monthsSlider");

monthsSlider.slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  prevArrow: $(".modal__changemonthbtn-prev"),
  nextArrow: $(".modal__changemonthbtn-next"),
});

//  select

const select = document.querySelector(".sel");

select.addEventListener("blur", () => selectEvent());
select.addEventListener("click", () => selectEvent());

selectEvent = () => {
  if (event.type == "click") {
    if (select.classList.contains("selrotate")) {
      select.classList.remove("selrotate");
    } else {
      select.classList.add("selrotate");
    }
  }
  if (event.type == "blur") {
    select.classList.remove("selrotate");
  }
};

// styles fo select

$(".sel").each(function () {
  const _this = $(this),
    selectOption = _this.find("option"),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(":selected"),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="sel"></div>');
  $("<div>", {
    class: "new-select",
    text: _this.children("option:disabled").text(),
  }).insertAfter(_this);

  const selectHead = _this.next(".new-select");
  $("<div>", {
    class: "new-select__list",
  }).insertAfter(selectHead);

  const selectList = selectHead.next(".new-select__list");
  for (let i = 1; i < selectOptionLength; i++) {
    $("<a>", {
      class: "new-select__item",
      html: $("<span>", {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr("href", selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find(".new-select__item");
  selectList.slideUp(0);
  selectHead.on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(duration);

      selectItem.on("click", function () {
        let chooseItem = $(this).data("value");

        $("select").val(chooseItem).attr("selected", "selected");
        selectHead.text($(this).find("span").text());

        selectList.slideUp(duration);
        selectHead.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(duration);
    }
  });
});

// burger

let nav = document.querySelector(".header__inner");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  nav.classList.toggle("activeburg");
  burger.classList.toggle("closeburger");
});

// modal reviews

let bntreview = document.querySelector(".newsigh");

bntreview.addEventListener("click", function (event) {
  let bodyblock = document.querySelector(".mainbody");
  bodyblock.classList.add("noscroll");
  let modalreview = document.querySelector(".modal__review");
  event.preventDefault();
  modalreview.classList.add("activemodal");
  let modalreviewclose = document.querySelector(".closereview");
  modalreviewclose.addEventListener("click", function () {
    modalreview.classList.remove("activemodal");
    bodyblock.classList.remove("noscroll");
  });
  let btnsellreview = document.querySelector(".btnsellreview");
  btnsellreview.addEventListener("click", function () {
    modalreview.classList.remove("activemodal");
    bodyblock.classList.remove("noscroll");
  });
});

//  smooth links

const smoothLinks = document.querySelectorAll("a.smoothlink");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
