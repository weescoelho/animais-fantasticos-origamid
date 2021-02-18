/* eslint-disable no-use-before-define */
export default function initNumbersAnim() {
  function animNumbers() {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 20);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }
  const observer = new MutationObserver(handleMutation);
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animNumbers();
    }
  }

  const observeTarget = document.querySelector('.numeros');
  observer.observe(observeTarget, { attributes: true });
}
