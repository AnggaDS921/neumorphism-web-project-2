import * as Var from './myVariables.js'
// ============== FUNCTIONS NAVBAR SECTION ============= //
function easeInOutQuad (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

function getCurrentTheme()  { 
  return document.body.classList.contains('dark-theme') ? 'dark' : 'light'
};

function getCurrentIcon() {  
  return Var.navToggleThemeChange.classList.contains('fa-sun') ? 'fa-moon' : 'fa-sun'
};

if(Var.selectedTheme){
  document.body.classList[Var.selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
  Var.navToggleThemeChange.classList[Var.selectedIcon === 'fa-moon' ? 'add' : 'remove']('fa-sun');
}

export { easeInOutQuad ,getCurrentTheme, getCurrentIcon }

// ============== END FUNCTIONS NAVBAR SECTION ============= //