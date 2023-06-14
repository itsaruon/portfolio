<script>
  AOS.init();
</script>
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.fade-in');
  hiddenElements.forEach((el) => observer.observe(el));


  const codeAnimation = document.querySelector('.code-animation');

// Generate random 1s and 0s
function generateRandomCode(length) {
  let code = '';
  const characters = '01';

  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
}

// Update the code animation periodically
setInterval(() => {
  const newCode = generateRandomCode(codeAnimation.children.length);
  for (let i = 0; i < codeAnimation.children.length; i++) {
    codeAnimation.children[i].textContent = newCode.charAt(i);
  }
}, 200);

