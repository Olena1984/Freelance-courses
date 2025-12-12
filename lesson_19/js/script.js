document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	//----------------------------------------------
	// (код який додає датаатрибут для тега html по якому стилізується відображення меню бургер
	if (targetElement.closest('.burger-icon')) {
		document.documentElement.toggleAttribute('data-menu-header-open')
	}
	//----------------------------------------------
}

// Отримуємо елемент шапки
const header = document.querySelector('.header');
// Слухаємо подію scroll
window.addEventListener('scroll', () => {
  // якщо проскролено більше 0 пікселів додається клас модифікатор header--scroll-state
  if (window.scrollY > 50) {
    header.classList.add('header--scroll-state');
  } else {
    header.classList.remove('header--scroll-state');
  }
});
