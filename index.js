const paletteContainer = document.getElementById('palette');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const infoButton = document.getElementById('infoButton');

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generatePalette = () => {
  paletteContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
      if (navigator.onLine) {
        copyToClipboard(color);
        showNotification('Copied!');
      } else {
        showNotification('Internet Connection Lost', 'info');
      }
    });
    paletteContainer.appendChild(colorDiv);
  }
  showNotification('Reloaded colours!');
};

const copyToClipboard = (color) => {
  navigator.clipboard.writeText(color);
};

const showNotification = (message, type = 'default') => {
  notificationText.textContent = message;
  notification.classList.add('show');
  if (type === 'info') {
    notification.classList.add('info');
  } else {
    notification.classList.remove('info');
  }
  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.remove('info');
  }, 3000);
};

const redirectToInfoPage = () => {
  window.location.href = 'information.html';
};

generatePalette();

infoButton.addEventListener('click', redirectToInfoPage);

window.addEventListener('offline', () => {
  showNotification('Internet Connection Lost', 'info');
});

window.addEventListener('online', () => {
  showNotification('Internet Connection Restored');
});
