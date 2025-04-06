//your JS code here. If required.

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

let currentActive = 1;

function update() {
  // Update active classes
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Update progress line
  const activeCircles = document.querySelectorAll('.circle.active');
  const progressPercent = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressPercent}%`;

  // Handle button state
  prevBtn.disabled = currentActive === 1;
  nextBtn.disabled = currentActive === circles.length;
}

// Button Listeners
nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

update(); // Initial update

