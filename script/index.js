const toggleBtn = document.querySelector('.js-dark-mode-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
  html.setAttribute('data-theme', savedTheme);

}else{
  html.setAttribute('data-theme', 'dark');
}

toggleBtn.addEventListener('change', () => {
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
})