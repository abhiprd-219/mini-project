const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const statusMessage = document.getElementById("status-message");

let currentStep = 0;

function updateStepper() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("completed");
    } else {
      step.classList.remove("completed");
    }
  });

  // Update status message
  if (currentStep === steps.length - 1) {
    statusMessage.textContent = "Order Delivered successfully! 🎉";
    nextBtn.disabled = true;
  } else {
    statusMessage.textContent = `Step ${currentStep + 1} in progress`;
    nextBtn.disabled = false;
  }

  prevBtn.disabled = currentStep === 0;
}

// Handle Next button click
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateStepper();
  }
});

// Handle Previous button click
prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateStepper();
  }
});

// Initialize stepper
updateStepper();



///  14000  