(() => {
  const $counter = document.getElementById("js-counter");
  const $result = document.getElementById("result");
  const $button = document.getElementsByClassName("js-button");

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

    // 更新した値を取得
    const newCount = parseInt($counter.textContent);
    // 更新した値に応じてコメント
    if (newCount === 0) {
      $result.textContent = "0です";
    } else if (newCount >= 1000) {
      $result.textContent = "1000まで到達！、、、まだ押すの？";
    } else if (newCount <= -1000) {
      $result.textContent = "-1000まで到達！、、、まだ続けるの？";
    } else if (newCount === 100) {
      $result.textContent = "100突破！";
    } else if (newCount === -100) {
      $result.textContent = "-100突破！";
    } else if (newCount >= 100) {
      $result.textContent = "100以上です";
    } else if (newCount <= -100) {
      $result.textContent = "-100以下です";
    } else if (newCount < 100) {
      $result.textContent = "";
    }

    console.log($result.textContent);
  };

  for (let i = 0; i < $button.length; i++) {
    $button[i].addEventListener("click", (e) => clickHandler(e));
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
