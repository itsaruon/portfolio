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

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
  var loadingScreen = document.getElementById('loading-screen');
  var loadingProgress = document.getElementById('loading-progress');

  var progressSteps = [0, 35, 55, 78, 100]; // Define the progress steps

  var currentStep = 0;
  var updateInterval = 500; // Time in milliseconds between each progress update

  var updateProgress = function() {
    if (currentStep >= progressSteps.length) {
      loadingProgress.textContent = '100%';
      setTimeout(function() {
        gsap.to(loadingScreen, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.3,
          onComplete: function() {
            loadingScreen.remove();
            hiddenElements.forEach((el) => {
              el.style.visibility = 'visible';
              observer.unobserve(el);
            });
          }
        });
      }, 500);
      return;
    }

    loadingProgress.textContent = progressSteps[currentStep] + '%';
    currentStep++;
    setTimeout(updateProgress, updateInterval);
  };

  hiddenElements.forEach((el) => {
    el.style.visibility = 'hidden';
    observer.unobserve(el);
  });

  updateProgress();
});
