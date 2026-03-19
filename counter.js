(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget.dataset.step;
    let currentCount = parseInt($counter.textContent);
    // if ($targetButton.textContent === "+") {
    //   $counter.textContent = currentCount + 1;
    // } else if ($targetButton.textContent === "-") {
    //   $counter.textContent = currentCount - 1;
    // } else if ($targetButton.textContent === "+10") {
    //   $counter.textContent = currentCount +10;
    // } else {
    //   $counter.textContent = currentCount -10;
    // }
    if ($targetButton === "-1") {
      $counter.textContent = currentCount - 1;
    } else if ($targetButton === "1") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton === "-10") {
      $counter.textContent = currentCount - 10;
    } else {
      $counter.textContent = currentCount + 10;
    }
  };
  for (let i = 0; i < document.getElementsByClassName("js-button").length; i++) {
    document
      .getElementsByClassName("js-button")
      [i].addEventListener("click", (e) => clickHandler(e));
  }
})();

// const $buttons = document.getElementsByClassName("js-button");
// console.log($buttons);

// const clickHandler = (e) => console.log(e);

// for (let i = 0; i < document.getElementsByClassName("js-button").length; i++) {
//   document.getElementsByClassName("js-button")[i].addEventListener("click", (e) => clickHandler(e));
// }

// const clickHandler = (e) => console.log(e.currentTarget);
// for (let i = 0; i < document.getElementsByClassName("js-button").length; i++) {
//   document.getElementsByClassName("js-button")[i].addEventListener("click", (e) => clickHandler(e));
// }
