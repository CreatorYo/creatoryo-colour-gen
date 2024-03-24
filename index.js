const colors = document.querySelectorAll('.color-box');
const genBtn = document.querySelector('#gen-btn');

function genColor() {
  colors.forEach((color) => {
    let hexCode = '#' + Math.random().toString(16).substring(2, 8);
    console.log(hexCode);
    const colorCircle = color.querySelector('.color-circle');
    const colorHex = color.querySelector('h2');
    const copyBtn = color.querySelector('#copy-btn');

    colorCircle.style.backgroundColor = hexCode;
    colorCircle.style.boxShadow = `0 1rem 3rem -1rem ${hexCode}88`;
    colorHex.innerHTML = hexCode;

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(hexCode).then(() => {
        // Change the copy button to a green tick symbol with animation
        copyBtn.innerHTML = '<span class="material-symbols-outlined tick-symbol" style="color: #222; font-size: 24px; animation: tickFade 0.5s ease;">check_circle</span>';
        setTimeout(() => {
          // Reset the copy button after 3 seconds
          copyBtn.innerHTML = '<span class="material-symbols-outlined"> content_copy </span>';
        }, 3000);
      });
    });
  });
}

window.onload = genColor();
genBtn.addEventListener('click', () => {
  genColor();
});
