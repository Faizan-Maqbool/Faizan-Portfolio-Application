/**
 * =============================================
 * MAIN NAVIGATION SYSTEM
 * =============================================
 */

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to switch pages
function switchPage(targetPage) {
  // Hide all pages
  pages.forEach(page => {
    page.classList.remove("active");
  });
  
  // Remove active class from all nav links
  navigationLinks.forEach(link => {
    link.classList.remove("active");
  });
  
  // Show target page
  const target = document.querySelector(`[data-page="${targetPage}"]`);
  if (target) {
    target.classList.add("active");
  }
  
  // Add active class to clicked nav link
  const activeLink = document.querySelector(`[data-nav-link="${targetPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
  
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Set up event listeners for nav links
navigationLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetPage = this.getAttribute("data-nav-link");
    switchPage(targetPage);
  });
});

// Initialize with About page active
switchPage('about');

/**
 * =============================================
 * SIDEBAR FUNCTIONALITY
 * =============================================
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar
sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  
  // Update button text
  const span = this.querySelector("span");
  if (sidebar.classList.contains("active")) {
    span.textContent = "Hide Contacts";
  } else {
    span.textContent = "Show Contacts";
  }
});

// Make sidebar scrollable
sidebar.style.overflowY = "auto";
sidebar.style.scrollbarWidth = "thin";

/**
 * =============================================
 * PROFILE PICTURE MODAL
 * =============================================
 */
const avatarBox = document.querySelector(".avatar-box");
const profileModal = document.createElement("div");
profileModal.className = "profile-modal";
profileModal.innerHTML = `
  <div class="profile-modal-content">
    <span class="close-modal">&times;</span>
    <img src="${avatarBox.querySelector("img").src}" alt="Profile Picture">
  </div>
`;
document.body.appendChild(profileModal);

// Click event for avatar
avatarBox.addEventListener("click", function() {
  profileModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// Close modal
profileModal.querySelector(".close-modal").addEventListener("click", function() {
  profileModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close when clicking outside
profileModal.addEventListener("click", function(e) {
  if (e.target === profileModal) {
    profileModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

/**
 * =============================================
 * TESTIMONIALS MODAL
 * =============================================
 */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Toggle testimonials modal
function toggleTestimonialsModal() {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = modalContainer.classList.contains("active") ? "hidden" : "auto";
}

// Set up testimonials
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    toggleTestimonialsModal();
  });
});

// Close modal events
modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
overlay.addEventListener("click", toggleTestimonialsModal);

/**
 * =============================================
 * PORTFOLIO FILTERING
 * =============================================
 */
/**
 * =============================================
 * PORTFOLIO FILTERING (UPDATED)
 * =============================================
 */

// Portfolio filtering system
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterSelect = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");

// Initialize - show all projects by default
function initializePortfolio() {
  filterItems.forEach(item => {
    item.classList.add("active");
  });
  
  // Set 'All' as active by default
  document.querySelector('[data-filter-btn="all"]').classList.add("active");
}

// Filter projects function
function filterProjects(filterValue) {
  filterItems.forEach(item => {
    if (filterValue === "all" || item.dataset.category.toLowerCase().includes(filterValue)) {
      item.classList.add("active");
      animateElement(item, 'fadeIn', 300);
    } else {
      animateElement(item, 'fadeOut', 300, () => {
        item.classList.remove("active");
      });
    }
  });
}

// Button click handler
filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    // Add active to clicked button
    this.classList.add("active");
    
    const filterValue = this.dataset.filterBtn || this.textContent.toLowerCase();
    filterProjects(filterValue);
  });
});

// Mobile select handler
filterSelect.addEventListener("click", function() {
  this.classList.toggle("active");
});

selectItems.forEach(item => {
  item.addEventListener("click", function() {
    const filterValue = this.dataset.selectItem || this.textContent.toLowerCase();
    document.querySelector("[data-selecct-value]").textContent = this.textContent;
    filterSelect.classList.remove("active");
    filterProjects(filterValue);
    
    // Update active button in desktop view
    filterBtns.forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.filterBtn === filterValue || 
          btn.textContent.toLowerCase() === filterValue) {
        btn.classList.add("active");
      }
    });
  });
});

// Animation helper
function animateElement(elem, animation, duration = 300, callback = null) {
  elem.style.animation = `${animation} ${duration}ms ease-out forwards`;
  setTimeout(() => {
    elem.style.animation = '';
    if (callback) callback();
  }, duration);
}

// Initialize portfolio on load
initializePortfolio();

/**
 * =============================================
 * CONTACT FORM
 * =============================================
 */
/**
 * =============================================
 * CONTACT FORM (UPDATED WITH WORKING EMAIL FUNCTIONALITY)
 * =============================================
 */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Form validation
formInputs.forEach(input => {
  input.addEventListener("input", function() {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Form submission with actual email sending
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  // Show loading state
  formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
  formBtn.disabled = true;
  
  try {
    // Collect form data
    const formData = new FormData(form);
    
    // Using your Formspree URL
    const response = await fetch('https://formspree.io/f/xzzvdgnr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success-message';
      successMessage.innerHTML = `
        <ion-icon name="checkmark-circle" style="color: var(--accent); font-size: 2rem;"></ion-icon>
        <p>Message sent successfully! I'll get back to you soon.</p>
      `;
      form.parentNode.insertBefore(successMessage, form.nextSibling);
      
      // Reset form
      form.reset();
      formBtn.disabled = false;
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    // Error message
    alert("Oops! There was a problem sending your message. Please try again later.");
    console.error('Error:', error);
  } finally {
    // Reset button state
    formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
    formBtn.disabled = false;
  }
});

/**
 * =============================================
 * MOBILE RESPONSIVENESS
 * =============================================
 */
function handleMobileView() {
  if (window.innerWidth < 768) {
    // Mobile-specific adjustments
    sidebar.style.position = "relative";
    sidebar.style.height = "auto";
  } else {
    // Desktop adjustments
    sidebar.style.position = "fixed";
    sidebar.style.height = "100vh";
  }
}

// Initial check
handleMobileView();

// Update on resize
window.addEventListener("resize", handleMobileView);