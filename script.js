// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the about section element
    const aboutSection = document.getElementById("about");
  
    // CSS class to trigger the fade-in animation
    aboutSection.classList.add("fade-in");
  });

  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000;
        var startTimestamp = null;
        
        function animation(timestamp) {
          if (!startTimestamp) startTimestamp = timestamp;
          var progress = timestamp - startTimestamp;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          
          if (progress < duration) {
            window.requestAnimationFrame(animation);
          }
        }
        
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }
        
        window.requestAnimationFrame(animation);
      }
    }
  });

  
  