<script>
  AOS.init();
</script>

// Scroll animation
window.addEventListener("scroll", function() {
    var element = document.querySelectorAll(".scroll-animation");
    for (var i = 0; i < element.length; i++) {
      var position = element[i].getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight - 100) {
        element[i].classList.add("scroll-animation");
      }
    }
  });
  
  