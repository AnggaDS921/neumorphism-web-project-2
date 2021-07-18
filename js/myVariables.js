// ============== VARIABLES NAVBAR SECTION ============= //
export const navbar = document.querySelector('.navbar');
export const navToggle = document.getElementById('navbar__toggle');
export const navMenu = document.getElementById('navbar__menu');
export const navItems = document.querySelectorAll('.navbar-link-scroll');
export const navAnim = document.querySelectorAll('.navbar__anim');
export const navBtn = document.querySelector('.btn-to-top');
export const navToggleTheme = document.querySelector('.toggle-dark-theme');
export const navToggleIcon = navToggle.children[0];
export const navToggleThemeChange = navToggleTheme.children[0];
  // ========== VARIABLES THEME WEBSITE ========== //
  export const selectedTheme = localStorage.getItem('selected-theme');
  export const selectedIcon = localStorage.getItem('selected-icon');
  // ========== END VARIABLES THEME WEBSITE ========== //
// ============== END VARIABLES NAVBAR SECTION ============= //

