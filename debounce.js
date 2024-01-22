/**
 * Problem: Implement basic debounce
 * Problem - https://bigfrontend.dev/problem/implement-basic-debounce
 * Blog - https://www.joshwcomeau.com/snippets/javascript/debounce
 **/

function debounce(func, wait) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
