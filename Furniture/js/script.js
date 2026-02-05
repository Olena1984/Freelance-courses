"use strict";

window.addEventListener('load', load)

function load() {
	/* Перевірка мобільного браузера */
	const isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	/* Додавання класу touch для HTML, якщо браузер мобільний */
	function addTouchAttr() {
		// Додавання data-fls-touch для HTML, якщо браузер мобільний
		if (isMobile.any()) document.documentElement.setAttribute('data-fls-touch', '')
	}

	function initSubMenu() {
		const matchMedia = window.matchMedia(`(width <= 41.875em)`)
		const subMenu = document.querySelector('.sub-menu')
		matchMedia.addEventListener('change', function () {
			setSubMenu(matchMedia.matches)
		})
		setSubMenu(matchMedia.matches)

		function setSubMenu() {
			if (matchMedia.matches) {
				subMenu.style.cssText += `height: 0;`
			} else {
				subMenu.style.cssText = ``
			}
		}
	}

	function initFooterMenus() {
		const footerMenus = document.querySelectorAll('.content-footer__list')	
		if (footerMenus.length) {
			const matchMedia = window.matchMedia(`(width <= 37.1875em)`)
			matchMedia.addEventListener('change', function () {
				setFooterMenus(matchMedia.matches)
			})

			function setFooterMenus() {
				footerMenus.forEach(menus => {
					if (matchMedia.matches) {
						menus.style.cssText +=`height: 0px;`
					} else {
						menus.style.cssText = ``
					}
				})	
			} 
			setFooterMenus()
		}	
		
	}
	initFooterMenus()
	initSubMenu()
	addTouchAttr()
	// =======intrsection observer =============
		const options = {
			root: null,
			rootMargin: "0px 0px 0px 0px",
			threshold: 0.1,
		}
		const callback = (entries, observer) => {
			entries.forEach(entry =>{
				const currentElement = entry.target
				if (entry.isIntersecting) {
				// currentElement.style.opacity = "1" 
				// currentElement.style.scale = "1" 
				currentElement.classList.add('animate')
				observer.unobserve(entry.target)
				}
			})
		}
		const observer = new IntersectionObserver(callback, options)
		const animElements = document.querySelectorAll('.item-product__item, .benefits__item')
		
		animElements.forEach(item => {
			observer.observe(item)
		})

	// ============================
	
	/* відкривання під меню на мобільних пристроях, додавання прослуховувача події */
	
	document.addEventListener('click', documentAction)
	// скрол для header
	window.addEventListener('scroll', windowScroll)

	const headerElement = document.querySelector('.header')
	// ===== подія при скролі=====
	function windowScroll(e) {
		if (scrollY > 10) {
			headerElement.classList.add('header--scroll')	
		}
		else{
			headerElement.classList.remove('header--scroll')
		}

		
		
	}
	// ===== подія при кліку======
	function documentAction(e){
		const targetElement = e.target;
		if (isMobile.any()) {
			if (targetElement.closest('.menu__sub-link')) {
				const subMenu = document.querySelector('.sub-menu')
				document.documentElement.toggleAttribute('data-sub-menu-open')
				if (window.innerWidth <= 670) {
					if (document.documentElement.hasAttribute('data-sub-menu-open')) {
						// open
						subMenu.style.cssText = ``
						const subMenuHeight = subMenu.offsetHeight /* визначаємо висоту об'єкта */
						subMenu.style.cssText += `height: 0;`
						subMenu.offsetHeight
						subMenu.style.cssText = `height: ${subMenuHeight}px`
					} else {
						// close
						subMenu.style.cssText += `height: 0;`
					}
				}
			} else {
				document.documentElement.removeAttribute('data-sub-menu-open')
			}

			if (targetElement.closest('.content-footer__title')) {
				const currentTitle = targetElement.closest('.content-footer__title')
				const currentList = currentTitle.nextElementSibling
				if (window.innerWidth <= 595) {
					const activeFooterMenu = document.querySelector('[data-footer-menu-open]')
					if (activeFooterMenu && activeFooterMenu !== currentTitle) {
						activeFooterMenu.removeAttribute('data-footer-menu-open')
						closeActiveFooterMenu(activeFooterMenu)
					}
					currentTitle.toggleAttribute('data-footer-menu-open')
					if (currentTitle.hasAttribute('data-footer-menu-open')) {
						currentList.style.cssText = ``
						const currentListHeight = currentList.offsetHeight
						currentList.style.cssText += `height: 0;`
						currentList.offsetHeight
						currentList.style.cssText = `height: ${currentListHeight}px`
					}
					else{
						currentList.style.cssText += `height: 0;`
					}
					function closeActiveFooterMenu(item) {
						item.removeAttribute('data-footer-menu-open')
						const currentList = item.nextElementSibling
						currentList.style.cssText = `height: 0;`
					}
				}
			}
// ==============================
			
		}

		// =====================
		if (targetElement.closest('.icon-menu')) {
			document.documentElement.toggleAttribute('data-menu-open')
		}

		// фільтр для категорії products

		if (targetElement.closest('.filter-product__link')) {
			const currentFilter = targetElement.closest('.filter-product__link')
			const cardProduct = document.querySelectorAll('.products-featured__items>.item-product__item')
			const activeFilter = document.querySelector('.filter-product__link--active')
			const filterValue = currentFilter.dataset.filterProduct
			
			if (activeFilter && activeFilter !== currentFilter) {
				activeFilter.classList.remove('filter-product__link--active')	
			}
			currentFilter.classList.add('filter-product__link--active')

			cardProduct.forEach(item => {
				if (filterValue !== '*' || cardProduct === filterValue) {
					item.style.display = 'none'
				}
				else{
					item.style.display = 'flex'
				}
				if (item.closest(`[class*="--${filterValue}"]`)) {
				item.style.display = 'flex'
				}
			})

			e.preventDefault()
		}

	
		
	}
}
