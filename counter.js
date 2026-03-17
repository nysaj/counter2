(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else {
      $counter.textContent = currentCount - 1;
    }
  };
  for (let i = 0; i < document.getElementsByClassName("js-button").length; i++) {
    document
      .getElementsByClassName("js-button")
      [i].addEventListener("click", (e) => clickHandler(e));
  }
})();