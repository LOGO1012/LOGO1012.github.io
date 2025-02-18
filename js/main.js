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
document.querySelectorAll('.slider').forEach((slider, index) => {
  let currentSlide = 0;

  const slides = slider.querySelectorAll('.slide');
  const prevButton = slider.querySelector('.leftButton');  // .leftButton으로만 선택
  const nextButton = slider.querySelector('.rightButton');  // .rightButton으로만 선택
  const currentSlideDisplay = slider.querySelector('#currentSlide');
  const totalSlideCount = slider.querySelector('#slideCount');

  // prevButton과 nextButton이 null이 아닌지 확인
  console.log('prevButton:', prevButton);
  console.log('nextButton:', nextButton);

  // 슬라이드 개수 및 현재 슬라이드 업데이트
  function updateSlideCount() {
    const totalSlides = slides.length;
    totalSlideCount.textContent = `/ ${totalSlides}`;
  }

  // 현재 슬라이드 번호 업데이트
  function updateCurrentSlide() {
    currentSlideDisplay.textContent = currentSlide + 1;
  }

  // 이전 슬라이드로 이동
  prevButton.addEventListener('click', ()  => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateCurrentSlide();
  });

  // 다음 슬라이드로 이동
  nextButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    updateCurrentSlide();
  });

  // 페이지 로드 시 슬라이드 개수와 현재 슬라이드 번호 초기화
  document.addEventListener('DOMContentLoaded', function () {
    updateSlideCount();
    updateCurrentSlide();
  });
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
