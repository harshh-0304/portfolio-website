// This ensures the script runs after the entire page has loaded
document.addEventListener('DOMContentLoaded', () => {

  // Create a new Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the 'visible' class
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Get all the elements you want to reveal on scroll
  const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
  
  // Loop over the elements and add an observer to each of them
  hiddenElements.forEach((el) => observer.observe(el));
});