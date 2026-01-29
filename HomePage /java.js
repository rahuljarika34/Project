// Function to handle Search button click
document.querySelector('.search-btn').addEventListener('click', function() {
    const medicine = prompt("What medicine are you looking for?");
    if (medicine) {
        alert("Searching for " + medicine + " in Bhubaneswar...");
    }
});

// Adding a simple fade-in effect on load
window.addEventListener('DOMContentLoaded', (event) => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease-out';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 100);
  // Handle Prescription Upload
document.querySelector('.outline-btn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,application/pdf';
    input.onchange = e => { 
        const file = e.target.files[0];
        alert("File selected: " + file.name + ". Verification in progress.");
    }
    input.click();
});

// Handle AI Assistant
document.querySelector('.ghost-btn').addEventListener('click', () => {
    alert("AI Assistant: Hello! How can I help you with your health checkup today?");
});
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements we want to animate
    const animatedElements = document.querySelectorAll('.step-card, .process-img');

    // Configuration for the observer
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it triggers before hitting the very bottom
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'appear' class to trigger the CSS transition
                entry.target.classList.add('appear');
                
                // Once it has appeared, we can stop observing it
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each element
    animatedElements.forEach(el => observer.observe(el));
});
  // Update the selector to include the new feature cards
const animatedElements = document.querySelectorAll('.step-card, .process-img, .feature-card');

// The rest of your Intersection Observer code from the previous step 
// will now automatically handle these cards too!
  // Add .quote-container to your existing list of animated elements
const animatedElements = document.querySelectorAll('.step-card, .process-img, .feature-card, .quote-container');
