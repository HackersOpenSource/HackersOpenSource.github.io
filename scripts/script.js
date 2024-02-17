// bars toggle
function toogleBars() { }

function dayNight() {
  const root = document.documentElement;
  if (root.style.getPropertyValue('bg') === '#000') {
    root.style.setProperty('bg', '#fff');
    root.style.setProperty('fg', '#000');
    return;
  } else {
    root.style.setProperty('bg', '#000');
    root.style.setProperty('fg', '#fff');
  }
}
