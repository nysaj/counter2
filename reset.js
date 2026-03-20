(() => {
  const $counter = document.getElementById("js-counter");
  const $result = document.getElementById("result");

  const clickHandler = () => {
    $counter.textContent = 0;
    $result.textContent = "0です";
  };

  document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();
