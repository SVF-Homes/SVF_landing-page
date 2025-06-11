document.addEventListener("DOMContentLoaded", () => {
  const moreDetails = document.getElementById("more-details");
  const readBtn = document.getElementById("read-btn");
  const learnBtn = document.getElementById("learn-btn");
  const callBtn = document.getElementById("call-btn");

  readBtn.addEventListener("click", () => {
    if (moreDetails.classList.contains("hidden")) {
      moreDetails.classList.remove("hidden");
      readBtn.textContent = "🔽 Read Less";
    } else {
      moreDetails.classList.add("hidden");
      readBtn.textContent = "📖 Read More";
    }
  });

  learnBtn.addEventListener("click", () => {
    // Replace "learn.html" with your target page
    window.location.href = "learn.html";
  });

  callBtn.addEventListener("click", () => {
    // Replace with your actual number
    window.location.href = "tel:+919444892265";
  });
});
