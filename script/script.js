document.addEventListener('DOMContentLoaded', function(){
		document.getElementById('link-about').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
		document.getElementById('link-fav').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
		document.getElementById('link-coffee').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
		document.getElementById('link-contacts').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
		document.getElementById('link-card').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
})


document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('burger').addEventListener('click', function(){
		document.querySelector('.header__nav').classList.toggle('active')
		document.querySelector('.menu_burger').classList.toggle('active')
	})
})




const imageItem = document.querySelectorAll('.image_item img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.item_black');

const sliderNext = document.querySelector('.slider__btn-next');
const sliderPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
let sliderWidth;


window.addEventListener('resize', showSlide, mySlider) 

function showSlide() {
	sliderWidth = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = (sliderWidth * 1.67857) + 'px';
	imageItem.forEach(item => {
		item.style.width = (sliderWidth / 3.11111) + 'px';
		item.style.height = 'auto';
	})

	rollSlider()
}

showSlide() 

function rollSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth * 0.33928}px)`
}

function thisSlide(index) {
	sliderDots.forEach(item => item.classList.remove('active-dot'))
	sliderDots[index].classList.add('active-dot')
}

sliderDots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		sliderCount = index
		rollSlider()
		thisSlide(sliderCount)
	})
})


let media768 = window.matchMedia('(max-width: 768px)')

function mySlider(media768) {
	if (media768.matches) {
		function showSlide() {
			sliderWidth = document.querySelector('.slider').offsetWidth;
			sliderLine.style.width = sliderWidth * imageItem.length + 'px';
			imageItem.forEach(item => {
				item.style.width = sliderWidth + 'px';
				item.style.height = 'auto';
		})
		rollSlider()
		}
	
		showSlide() 
	
		function rollSlider() {
			sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
		}
	
		function thisSlide(index) {
			sliderDots.forEach(item => item.classList.remove('active-dot'))
			sliderDots[index].classList.add('active-dot')
		}
	
		sliderDots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				sliderCount = index
				rollSlider()
				thisSlide(sliderCount)
			})
		})

		function nextSlide(){
			sliderCount++
			console.log(sliderCount)
			if(sliderCount > imageItem.length) {sliderCount = 0}
			if(sliderCount == imageItem.length) {sliderCount = imageItem.length - 1}

			rollSlider()
			thisSlide(sliderCount)
		}

		function prevSlide(){
			sliderCount--
			console.log(sliderCount)
			if(sliderCount < 0 && sliderCount !== -1) {sliderCount = imageItem.length - 1}
			if(sliderCount == -1) {sliderCount = 0}
			
			rollSlider()
			thisSlide(sliderCount)
		}

		sliderNext.addEventListener('click', nextSlide)
		sliderPrev.addEventListener('click', prevSlide)
	}
}

mySlider(media768)
media768.addEventListener(mySlider)




