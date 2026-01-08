const commentSheet = document.getElementById("commentSheet");
const backdrop = document.getElementById("sheetBackdrop");

// OPEN COMMENT SHEET (event delegation)
document.addEventListener("click", (e) => {

  // COMMENT BUTTON
  if (e.target.closest(".action-pill.comment")) {
    commentSheet.classList.add("active");
    backdrop.classList.add("active");
  }

  // LIKE BUTTON
  if (e.target.closest(".action-pill.like")) {
    const likeBtn = e.target.closest(".action-pill.like");
    likeBtn.classList.toggle("active");
  }
});

// CLOSE COMMENT SHEET
backdrop.addEventListener("click", () => {
  commentSheet.classList.remove("active");
  backdrop.classList.remove("active");
});
