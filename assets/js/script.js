'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}


// Certifications tabs functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.certifications-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.certifications-container .certifications-content');

  // Function to switch tabs
  function switchTab(tabId) {
    // Remove active class from all buttons and contents
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const activeContent = document.querySelector(`.certifications-content[data-content="${tabId}"]`);
    
    if (activeBtn && activeContent) {
      activeBtn.classList.add('active');
      activeContent.classList.add('active');
    }
  }

  // Add click event listeners to all tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Initialize first tab as active
  if (tabBtns.length > 0) {
    const firstTabId = tabBtns[0].getAttribute('data-tab');
    switchTab(firstTabId);
  }
});




/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});