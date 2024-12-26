// Optional script for mobile navbar toggle
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar ul");
    //const toggleButton = document.createElement("button");
  
    toggleButton.textContent = "☰";
    toggleButton.classList.add("navbar-toggle");
    document.querySelector(".navbar").prepend(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  });


  // No JavaScript is needed for basic functionality
// Use JavaScript if you want to add interactivity like toggling dropdowns on click for mobile
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });


  //picture
  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-container .image');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    const imageCount = images.length;
  
    // Function to show the image at a given index
    function showImage(index) {
      images[currentIndex].classList.remove('active'); // Hide current image
      currentIndex = (index + imageCount) % imageCount; // Ensure index wraps around
      images[currentIndex].classList.add('active'); // Show new image
    }
  
    // Automatic image transition every 5 seconds
    let interval = setInterval(() => showImage(currentIndex + 1), 3000);
  
    // Click event for right arrow
    rightArrow.addEventListener('click', function () {
      clearInterval(interval); // Stop automatic transition
      showImage(currentIndex + 1); // Show next image
      interval = setInterval(() => showImage(currentIndex + 1), 3000); // Restart auto-transition
    });
  
    // Click event for left arrow
    leftArrow.addEventListener('click', function () {
      clearInterval(interval); // Stop automatic transition
      showImage(currentIndex - 1); // Show previous image
      interval = setInterval(() => showImage(currentIndex + 1), 3000); // Restart auto-transition
    });
  });
 
  // Notice
  const noticesElement = document.querySelector('.notices');

// Function to add a new notice
function addNotice(noticeText) {
  const noticeElement = document.createElement('div');
  noticeElement.classList.add('notice');
  noticeElement.textContent = noticeText;
  noticesElement.insertBefore(noticeElement, noticesElement.firstChild);
  
  // Update the animation to account for the new notice
  noticesElement.style.transform = 'translateY(0)';
  setTimeout(() => {
    noticesElement.style.transform = '';
  }, 100);
}
