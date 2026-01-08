const likeSound = document.getElementById("likeSound");

document.addEventListener("click", (e) => {

  const likeBtn = e.target.closest(".action-pill.like");
  if (!likeBtn) return;

  let liked = likeBtn.getAttribute("data-liked") === "true";
  const countEl = likeBtn.querySelector(".like-count");

  // Play sound only on LIKE
  if (!liked) {
    likeSound.currentTime = 0;
    likeSound.play();
    countEl.textContent = parseInt(countEl.textContent.replace("K","")) + 1;
  } else {
    countEl.textContent = parseInt(countEl.textContent) - 1;
  }

  likeBtn.classList.toggle("active");
  likeBtn.setAttribute("data-liked", !liked);
});
