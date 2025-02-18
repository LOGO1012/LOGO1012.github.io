console.log('javascript load');

const toTopEl = document.querySelector('#to-top');
const AboutMeEl = document.querySelector('#AboutMe');
const SkillInventoryEl = document.querySelector("#SkillInventory");
const ProjectsEl = document.querySelector("#Projects");
const HistoryEl = document.querySelector("#History");
const seemoreEl = document.querySelector("#see_more");
const headerEl = document.querySelector('header');
const headerFontEls = document.querySelectorAll('header .sub-menu ul.menu a');
const mainTitleEl = document.querySelector('header .maintitle');

// ScrollTo 기능
toTopEl.addEventListener('click', function () {
  gsap.to(window, .8, {
    scrollTo: 0
  });
});

seemoreEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo: "#AboutMe_section"
  });
});

AboutMeEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo: "#AboutMe_section"
  });
});

SkillInventoryEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo: "#skillinventory_section"
  });
});

ProjectsEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo: "#projects_section"
  });
});

HistoryEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo: "#history_section"
  });
});

// Scroll Event (Header 애니메이션)
window.addEventListener('scroll', _.throttle(
  () => {
    if (window.scrollY > 400) {
      headerEl.classList.add('moved');
      mainTitleEl.classList.add('moved');
      headerFontEls.forEach(headerFont =>
        headerFont.classList.add("moved")
      )
    } else {
      headerEl.classList.remove('moved');
      mainTitleEl.classList.remove('moved');
      headerFontEls.forEach(headerFont =>
        headerFont.classList.remove("moved"))
    }
  }
), 300);

// 각 슬라이드에 대해 독립적인 prev/next 기능 구현
document.addEventListener("DOMContentLoaded", function () {
  // 첫 번째 프로젝트 슬라이드
  const slides1 = document.querySelectorAll(".project_containor1 .slide");
  let currentIndex1 = 0;
  
  const prevButton1 = document.getElementById("prevButton1");
  const nextButton1 = document.getElementById("nextButton1");

  function showSlide1(index) {
    slides1.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  prevButton1.addEventListener("click", function () {
    currentIndex1 = (currentIndex1 === 0) ? slides1.length - 1 : currentIndex1 - 1;
    showSlide1(currentIndex1);
  });

  nextButton1.addEventListener("click", function () {
    currentIndex1 = (currentIndex1 === slides1.length - 1) ? 0 : currentIndex1 + 1;
    showSlide1(currentIndex1);
  });

  showSlide1(currentIndex1);

  // 두 번째 프로젝트 슬라이드
  const slides2 = document.querySelectorAll(".project_containor2 .slide");
  let currentIndex2 = 0;
  
  const prevButton2 = document.getElementById("prevButton2");
  const nextButton2 = document.getElementById("nextButton2");

  function showSlide2(index) {
    slides2.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  prevButton2.addEventListener("click", function () {
    currentIndex2 = (currentIndex2 === 0) ? slides2.length - 1 : currentIndex2 - 1;
    showSlide2(currentIndex2);
  });

  nextButton2.addEventListener("click", function () {
    currentIndex2 = (currentIndex2 === slides2.length - 1) ? 0 : currentIndex2 + 1;
    showSlide2(currentIndex2);
  });

  showSlide2(currentIndex2);
});






// 토글 메뉴
document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menu-icon');
  var subMenu = document.querySelector('.sub-menu');

  menuIcon.addEventListener('click', function () {
    subMenu.classList.toggle('active'); // 메뉴를 토글
    menuIcon.classList.toggle('moved');
    subMenu.classList.toggle('moved');
  });
});
