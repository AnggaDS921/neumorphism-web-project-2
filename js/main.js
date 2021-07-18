import * as Var from './myVariables.js'
import { easeInOutQuad ,getCurrentTheme, getCurrentIcon } from './myFunctions.js';

// INTERACTIVE NAVBAR
(function interactiveNavbar(){
  let lastScrollTop = 0;

  function doCheck(query){
    if(query.matches){
      Var.navMenu.classList.contains('show-navbar-menu') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';
    } else{
      document.body.style.overflow = 'initial';
      // navToggle.classList.remove('toggle-anim');
      // navToggleIcon.classList.remove('fa-times');
      // navMenu.classList.remove('show-navbar-menu');
    };
  };

  function navbarToggle(){
    Var.navMenu.classList.toggle('show-navbar-menu');
    Var.navToggle.classList.toggle('toggle-anim');
    Var.navToggleIcon.classList.toggle('fa-times');

    Var.navAnim.forEach((item,i) => {
      if(Var.navMenu.classList.contains('show-navbar-menu')){
        item.style.animation = `linkFadeIn .5s ease forwards ${(i+1)/7}s`
      } else{
        setTimeout(()=>{item.style.animation = ''},500)
      };
    });

    const query = window.matchMedia('(max-width: 768px)')
    query.addEventListener('change', doCheck);
    doCheck(query);
  }

  function activeLink(section, link, fromTop, fix, fixHeight){
    if((section.offsetTop - fix) <= fromTop && (section.offsetTop - fix) + (section.offsetHeight - fixHeight) > fromTop){
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  }

  function matchBreakPointsLinks(section, link, fromTop, navbarLink, sectionProb1, sectionProb2,  fixTop1, fixHeight1, fixTop2, fixHeight2, fixTop3, fixHeight3){
    if(navbarLink && navbarLink !== sectionProb1 && navbarLink !== sectionProb2){
      activeLink(section, link, fromTop, fixTop1, fixHeight1);
    } else if(navbarLink && navbarLink == sectionProb2) {
      activeLink(section, link, fromTop, fixTop2, fixHeight2);
    } else{
      activeLink(section, link, fromTop, fixTop3, fixHeight3);
    }
  }

  Var.navToggle.addEventListener('click', function() {
    navbarToggle();
  });

  Var.navItems.forEach(link => link.addEventListener('click', (e)=> {
    e.preventDefault();
    const newLink = e.currentTarget.children[0];
    const startPosition = window.scrollY;
    const targetPosition = document.querySelector(newLink.hash).offsetTop;
    const distance =( targetPosition - 50) - startPosition;
    const duration = 1000;
    let start = null;

    if(Var.navMenu.classList.contains('show-navbar-menu')) navbarToggle();

    window.requestAnimationFrame(step);
    function step(timestamp){
      if(!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if(progress < duration) window.requestAnimationFrame(step);
    }
  }));

  window.addEventListener('scroll', ()=> {
    let fromTop = window.scrollY;
    const sectionHome = document.querySelector('#home').offsetHeight;
    const navbarHeight = Var.navbar.offsetHeight;

    fromTop > sectionHome ? Var.navBtn.classList.add('btn-appear') : Var.navBtn.classList.remove('btn-appear');
    fromTop > lastScrollTop ? Var.navbar.style.top = `-${navbarHeight}px` : Var.navbar.style.top= '0';
    lastScrollTop = fromTop;

    Var.navItems.forEach( link =>  {
      const newLink = link.children[0];
      let section = document.querySelector(newLink.hash);
      let sectionPricing = section.classList.contains('pricing')
      let sectionContact = section.classList.contains('contact')
      let navbarLink = newLink.classList.contains('navbar__link');
      const query = window.matchMedia(' screen and (min-height: 1366px) and (min-width: 1024px)');

      if(newLink.classList.contains('navbar__link')){
        function doCheck(query){
          if(query.matches){
            matchBreakPointsLinks(section, newLink, fromTop, navbarLink, sectionContact, sectionPricing, 100, 0, 100, 400, 500, 0)
          } else{
            activeLink(section, newLink, fromTop, 60, 0)
          }
        } 
        query.addEventListener('change', doCheck);
        doCheck(query);
      }
    });
  });
  
  Var.navBtn.addEventListener('click', ()=> {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);
    function step(timestamp){
      if(!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if(progress < duration) window.requestAnimationFrame(step);
    };
  });

  Var.navToggleTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    Var.navToggleThemeChange.classList.toggle('fa-sun')

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
  });
})();