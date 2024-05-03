console.log('javascript load');

const toTopEl = document.querySelector('#to-top');
const AboutMeEl = document.querySelector('#AboutMe');
const SkillInventoryEl = document.querySelector("#SkillInventory");
const ProjectsEl = document.querySelector("#Projects");
const HistoryEl = document.querySelector("#History");
const seemoreEl = document.querySelector("#see_more");
const headerEl = document.querySelector('header');
const headerFontEls= document.querySelectorAll('header .sub-menu ul.menu a')
const mainTitleEl = document.querySelector('header .maintitle');


toTopEl.addEventListener('click', function () {
  gsap.to(window, .8, {
    scrollTo: 0
  });
});

seemoreEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo:"#AboutMe_section"
  });
});

AboutMeEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo:"#AboutMe_section"
  });
});

SkillInventoryEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo:"#skillinventory_section"
  });
});

ProjectsEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo:"#projects_section"
  });
});
HistoryEl.addEventListener('click', () => {
  gsap.to(window, .8, {
    scrollTo:"#history_section"
  });
});


window.addEventListener('scroll', _.throttle(
  () => {
    if(window.scrollY>400){
      console.log(window.scrollY)
      headerEl.classList.add('moved');
      mainTitleEl.classList.add('moved');
      headerFontEls.forEach(headerFont =>
        headerFont.classList.add("moved")
      )}else{
        headerEl.classList.remove('moved');
      mainTitleEl.classList.remove('moved');
      headerFontEls.forEach(headerFont => 
        headerFont.classList.remove("moved"))
    }
  }
), 300)
