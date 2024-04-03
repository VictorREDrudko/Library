// icon в header
const linkMenuRegistration = document.querySelector('.link_menu_registration')
const linkMenuRegistration1 = document.querySelector('.link_menu_registration1')
// Инициалы в иконке пользователя
let userInitial = document.querySelector('.initial');
let userInitial1 = document.querySelector('.initial1');
// Смена иконки пользователя
const userIcon = document.querySelector('.icon__round');
const userIcon1 = document.querySelector('.icon__round1');
const iconImg = document.querySelector('.icon');
const iconImg1 = document.querySelector('.icon1');
// меню регистрации
const menuRegistration = document.querySelector('.profile__reg')
const linkModalRegistration = document.querySelector('.module-link')
const linkModalLogIn = document.querySelector('.linkLogIn')
// модальное окно регистрации
const modalRegistration = document.querySelector('.module__reg')
const bodyModalRegistration =  document.querySelector('.body__reg')
const crossModalRegistration =  document.querySelector('.close__reg')
const buttonSighUpCards = document.querySelector('.button__module')
const buttonModalRegistration = document.querySelector('.reg-button')
const userFirstName = document.querySelector('.firstNameReg');
const userLastName = document.querySelector('.lastNameReg');
const userEmail = document.querySelector('.emailReg');
const userPassword = document.querySelector('.passwordReg');
// Объект с данными пользователя
const userData = {}
// Счетчик посещений (включая регистрацию)
let countVisits = 0
// Данные с поля ввода карты раздела Digital Library Cards
const userLibraryCardName = document.querySelector('.card_name');
const userLibraryCardNumber = document.querySelector('.card_number');
const buttonCheckCard = document.querySelector('.check_card');
const infoCheckCard = document.querySelector('.check_info');
// модальное окно LOGIN
const modalLogIn = document.querySelector('.module__logIn');
const crossModalLogIn = document.querySelector('.close__logIn');
const bodyModalLogIn = document.querySelector('.body__logIn');
const buttonLibraryCardLogIn = document.querySelector('.button__LogIn');
const buttonLogInModalLogIn = document.querySelector('.buttonLogIn');
const inputEmailModalLogIn = document.querySelector('.emailLogIn');
const inputPasswordModalLogIn = document.querySelector('.passwordLogIn');
// Кнопки buy раздела favorites
const buttonsBuy = document.querySelectorAll('.button_buy');
const buttonsOwn = document.querySelectorAll('.button_own');
const countBooks = 0;
// меню пользователя (после авторизации)
const menuMyProfile = document.querySelector('.profile__In');
const bodyMenuMyProfile = document.querySelector('.profile__body');
const linkOpenModalMyProfile = document.querySelector('.link__profile');
const linkOutMenuMyProfile = document.querySelector('.link__profile__out');
const numberCardInMenuMyProfile = document.querySelector('.title__number_card');
// Модальное окно MY PROFILE
const modalMyProfile = document.querySelector('.module__profile');
const bodyModalMyProfile = document.querySelector('.module__body__myProfile');
const initialInModalMyProfile = document.querySelector('.initial__my__profile');
const fullNameInModalMyProfile = document.querySelector('.fullName__my__profile');
const blockFullNameInModalMyProfile = document.querySelector('.module__full-name');
const crossModalMyProfile = document.querySelector('.close__my__profile');
const countVisitsMyProfile = document.querySelector('.count_visits');
const countVisitsMyProfile1 = document.querySelector('.count_visits1');
const numberCardMyProfile = document.querySelector('.number_card');
const copyNumberCardInModalMyProfile =  document.querySelector('.copy');
const countBooksGetLibraryCard = document.querySelector('.text_sum_books');
const countBooksModalMyProfile = document.querySelector('.text_book_modal');
// Модальное окно BUY A LIBRARY CARDS
const modalBuyLibraryCards = document.querySelector('.modal__buy');
const bodyModalBuyLibraryCards = document.querySelector('.modal__buy-body');
const crossModalBuyLibraryCards = document.querySelector('.cross_buy_library');
const buttonBuyLibraryCards = document.querySelector('.button__buy');
const inputBankCardNumber = document.querySelector('.input_BankCardNumber');
const inputExpirationCode1 = document.querySelector('.input_ExpirationCode1');
const inputExpirationCode2 = document.querySelector('.input_ExpirationCode2');
const inputCVC = document.querySelector('.input_cvc');
const inputCardholderName= document.querySelector('.input_cardholderName');
const inputPostalCode = document.querySelector('.input_postalCode');
const inputCity = document.querySelector('.input_City');



// MENU REGISTRATION
const closeMenuRegistration = (event) => {
	const target = event.target

	if(target == menuRegistration) {
		menuRegistration.classList.remove('open')
	}
}

const openMenuRegistration = () => {
	menuRegistration.classList.add('open')
}

linkMenuRegistration.addEventListener("click", openMenuRegistration);
linkMenuRegistration1.addEventListener("click", openMenuRegistration);
menuRegistration.addEventListener("click", closeMenuRegistration);



// MODULE REGISTRATION
const closeModalRegistration = (event) => {
	const target = event.target

	if(target == bodyModalRegistration) {
		modalRegistration.classList.remove('openReg')
	}
}

const crossCloseModalRegistration = () => {
	modalRegistration.classList.remove('openReg')
}

const openModalRegistration = () => {
	menuRegistration.classList.remove('open');
	modalRegistration.classList.add('openReg');
}

linkModalRegistration.addEventListener("click", openModalRegistration);
buttonSighUpCards.addEventListener("click", openModalRegistration);
modalRegistration.addEventListener("click", closeModalRegistration);
crossModalRegistration.addEventListener("click", crossCloseModalRegistration);


// REGISTRATION DATA
const pushRegistrationData = () => {
	let randomNumberFunction = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	};

	let randomNumberCard = randomNumberFunction(100000000000, 999999999999).toString(16);
	let userNumberCard = randomNumberCard.slice(0, 8).toUpperCase()

	const userInfo = {email: userEmail.value,
							password: userPassword.value,
							card: userNumberCard,
							name1: userFirstName.value,
							name2: userLastName.value,
							count: countVisits + 1,
							countBook: 0,
							book: {},
						};

	iconImg.classList.add('unvisible');
	iconImg1.classList.add('unvisible');
	userIcon.classList.add('visible');
	userIcon1.classList.add('visible');
	userInitial.textContent = `${userFirstName.value[0]}${userLastName.value[0]}`
	userInitial1.textContent = `${userFirstName.value[0]}${userLastName.value[0]}`

	if(userFirstName.value !== '' && userLastName.value !== '' && userPassword.value.length >= 8 && userEmail.value !== '') {
		modalRegistration.classList.remove('openReg')
		localStorage.setItem(`${userFirstName.value} ${userLastName.value}`, JSON.stringify(userInfo));
	}

	
	// Номер карты
	numberCardInMenuMyProfile.textContent = userNumberCard;
	numberCardMyProfile.textContent = userNumberCard;







	const buttonCloseModalBuyLibraryCards = (event) => {
		event.preventDefault();
		if (inputBankCardNumber.value.length === 16 && inputExpirationCode1.value.length == 2 && inputExpirationCode2.value.length == 2 && inputCVC.value.length === 3 && inputCardholderName.value.length >= 1 && inputPostalCode.value.length >= 1 && inputCity.value.length >= 1) {
			modalBuyLibraryCards.classList.remove('open_modal_buy');
			modalLogIn.classList.remove('openLogIn');
			buyCardLibrary()
		}
	}

	const closeModalBuyLibraryCards = (event) => {
		const target = event.target

		if(target == bodyModalBuyLibraryCards) {
			modalBuyLibraryCards.classList.remove('open_modal_buy');
			modalLogIn.classList.remove('openLogIn');
		}
	}

	const crossCloseModalBuyLibraryCards = () => {
		modalBuyLibraryCards.classList.remove('open_modal_buy');
		modalLogIn.classList.remove('openLogIn');
	}

	const openModalBuyLibraryCards = () => {
		modalBuyLibraryCards.classList.add('open_modal_buy')
	}

	buttonsBuy.forEach(link => {
		link.addEventListener("click", openModalBuyLibraryCards)
	})

	crossModalBuyLibraryCards.addEventListener("click", crossCloseModalBuyLibraryCards);
	modalBuyLibraryCards.addEventListener("click", closeModalBuyLibraryCards);
	buttonBuyLibraryCards.addEventListener("click", buttonCloseModalBuyLibraryCards);



		// После покупки карты библиотеки
		const buyCardLibrary = () => {
			buttonsBuy.forEach((link, index) => {
				link.addEventListener("click", function() {
					modalBuyLibraryCards.classList.remove('open_modal_buy');
					modalLogIn.classList.remove('openLogIn');
					buttonsBuy[index].classList.add('own')
					
					// userInfo.book.index = `${buttonsBuy[index].classList.add('own')}`
					

					let userBooksCount = JSON.parse(localStorage.getItem(`${userFirstName.value} ${userLastName.value}`)).countBook + 1;
					userInfo.countBook = userBooksCount;
					localStorage[`${userFirstName.value} ${userLastName.value}`] = JSON.stringify(userInfo);
				});
			})
		}
	
	// информация в разделе Digital library cards
	buttonCheckCard.classList.add('no');
	infoCheckCard.classList.add('yes');

	userLibraryCardName.value = `${userInfo.name1} ${userInfo.name1}`;
	userLibraryCardNumber.value = `${userInfo.card}`

	countVisitsMyProfile1.textContent = `${userInfo.count}`
	countBooksGetLibraryCard.textContent = `${userInfo.countBook}`
}

buttonModalRegistration.addEventListener("click", pushRegistrationData);



// DATA BASE
const arrayKeysInLocalStorage = []
const arrayValueInLocalStorage = []

for(let i = 0; i < localStorage.length; i++) {
	// ключи из localStorage
	let key = localStorage.key(i);
	// массив ключей (имя - фамилия)
	arrayKeysInLocalStorage.push(key)
	// массив значений (объекты)
	arrayValueInLocalStorage.push(JSON.parse(localStorage.getItem(key)))
}



// Проверка раздела Digital Library Cards (зарегистрирован, но не авторизован)
let indexEmailUser = -1

userLibraryCardName.oninput = () => {
	userLibraryCardNumber.oninput = () => {	
		let indexNameInLocalStorage = arrayKeysInLocalStorage.indexOf(userLibraryCardName.value);
		const userData = arrayValueInLocalStorage[indexNameInLocalStorage];
	
		if (userData.card === userLibraryCardNumber.value && indexNameInLocalStorage !== -1) {
			buttonCheckCard.classList.add('no');
			infoCheckCard.classList.add('yes');

			countVisitsMyProfile1.textContent = arrayValueInLocalStorage[indexNameInLocalStorage].count

			function cardTime () {
				buttonCheckCard.classList.remove('no');
				infoCheckCard.classList.remove('yes');
				userLibraryCardName.value = ''
				userLibraryCardNumber.value = ''
			}
				
			setTimeout(cardTime, 10000)
		}
	}
}

userLibraryCardNumber.oninput = () => {
	userLibraryCardName.oninput = () => {
		let indexNameInLocalStorage = arrayKeysInLocalStorage.indexOf(userLibraryCardName.value);
		const userData = arrayValueInLocalStorage[indexNameInLocalStorage];
	
		if (userData.card === userLibraryCardNumber.value && indexNameInLocalStorage !== -1) {
			buttonCheckCard.classList.add('no');
			infoCheckCard.classList.add('yes');

			countVisitsMyProfile1.textContent = arrayValueInLocalStorage[indexNameInLocalStorage].count

			function cardTime () {
				buttonCheckCard.classList.remove('no');
				infoCheckCard.classList.remove('yes');
				userLibraryCardName.value = ''
				userLibraryCardNumber.value = ''
			}
				
			setTimeout(cardTime, 10000)
		}
	}
}



// Открытие модального окна LOGIN (для авторизации)
const closeModalLogIn = (event) => {
	const target = event.target

	if(target == bodyModalLogIn) {
		modalLogIn.classList.remove('openLogIn');
		menuRegistration.classList.remove('open');
	}
}

const crossCloseModalLogIn = () => {
	modalLogIn.classList.remove('openLogIn');
	menuRegistration.classList.remove('open');
}

const openModalLogIn = () => {
	modalLogIn.classList.add('openLogIn')
}

linkModalLogIn.addEventListener("click", openModalLogIn);
buttonLibraryCardLogIn.addEventListener("click", openModalLogIn);
crossModalLogIn.addEventListener("click", crossCloseModalLogIn);
modalLogIn.addEventListener("click", closeModalLogIn);

buttonsBuy.forEach(link => {
	link.addEventListener("click", openModalLogIn)
})




// После покупки карты библиотеки
const buyCardLibrary = () => {
	buttonsBuy.forEach((link, index) => {
		link.addEventListener("click", function() {
			console.log(index)
			modalBuyLibraryCards.classList.remove('open_modal_buy');
			modalLogIn.classList.remove('openLogIn');
			buttonsBuy[index].classList.add('own')
			
			let userBooksCount = JSON.parse(localStorage[arrayKeysInLocalStorage[indexEmailUser]]).countBook + 1
			arrayValueInLocalStorage[indexEmailUser].countBook = userBooksCount;
			localStorage[arrayKeysInLocalStorage[indexEmailUser]] = JSON.stringify(arrayValueInLocalStorage[indexEmailUser])
		});
	})
}

// Функция при нахождении в аккаунте пользователя
const authorized = () => {
	// счетчик посещений
	let userCount = JSON.parse(localStorage[arrayKeysInLocalStorage[indexEmailUser]]).count + 1
	arrayValueInLocalStorage[indexEmailUser].count = userCount;
	localStorage[arrayKeysInLocalStorage[indexEmailUser]] = JSON.stringify(arrayValueInLocalStorage[indexEmailUser])

	// закрытие модальных окон
	modalLogIn.classList.remove('openLogIn');
	menuRegistration.classList.remove('open');

	const buttonCloseModalBuyLibraryCards = (event) => {
		event.preventDefault();
		if (inputBankCardNumber.value.length === 16 && inputExpirationCode1.value.length == 2 && inputExpirationCode2.value.length == 2 && inputCVC.value.length === 3 && inputCardholderName.value.length >= 1 && inputPostalCode.value.length >= 1 && inputCity.value.length >= 1) {
			modalBuyLibraryCards.classList.remove('open_modal_buy');
			modalLogIn.classList.remove('openLogIn');
			buyCardLibrary()
		}
	}

	const closeModalBuyLibraryCards = (event) => {
		const target = event.target

		if(target == bodyModalBuyLibraryCards) {
			modalBuyLibraryCards.classList.remove('open_modal_buy');
			modalLogIn.classList.remove('openLogIn');
		}
	}

	const crossCloseModalBuyLibraryCards = () => {
		modalBuyLibraryCards.classList.remove('open_modal_buy');
		modalLogIn.classList.remove('openLogIn');
	}

	const openModalBuyLibraryCards = () => {
		modalBuyLibraryCards.classList.add('open_modal_buy')
	}

	buttonsBuy.forEach(link => {
		link.addEventListener("click", openModalBuyLibraryCards)
	})

	crossModalBuyLibraryCards.addEventListener("click", crossCloseModalBuyLibraryCards);
	modalBuyLibraryCards.addEventListener("click", closeModalBuyLibraryCards)
	buttonBuyLibraryCards.addEventListener("click", buttonCloseModalBuyLibraryCards)
	
	// изменение иконки пользователя
	iconImg.classList.add('unvisible');
	iconImg1.classList.add('unvisible');
	userIcon.classList.add('visible');
	userIcon1.classList.add('visible');
	userInitial.textContent = `${arrayValueInLocalStorage[indexEmailUser].name1[0]}${arrayValueInLocalStorage[indexEmailUser].name2[0]}`
	userInitial1.textContent = `${arrayValueInLocalStorage[indexEmailUser].name1[0]}${arrayValueInLocalStorage[indexEmailUser].name2[0]}`

	userIcon.setAttribute('title', `${arrayValueInLocalStorage[indexEmailUser].name1} ${arrayValueInLocalStorage[indexEmailUser].name2}`)
	userIcon1.setAttribute('title', `${arrayValueInLocalStorage[indexEmailUser].name1} ${arrayValueInLocalStorage[indexEmailUser].name2}`)

	// Отображение информации в разделе Digital Library Cards
	buttonCheckCard.classList.add('no');
	infoCheckCard.classList.add('yes');

	userLibraryCardName.value = `${arrayValueInLocalStorage[indexEmailUser].name1} ${arrayValueInLocalStorage[indexEmailUser].name2}`;
	userLibraryCardNumber.value = `${arrayValueInLocalStorage[indexEmailUser].card}`

	countVisitsMyProfile1.textContent = `${arrayValueInLocalStorage[indexEmailUser].count}`
	countBooksGetLibraryCard.textContent = `${arrayValueInLocalStorage[indexEmailUser].countBook}`
}


// Авторизация (вход в учетную запись)
inputEmailModalLogIn.oninput = () => {
	inputPasswordModalLogIn.oninput = () => {	
		const arrayEmailInLocalStorage = arrayValueInLocalStorage.map(el => {
			let elEmail = el.email
			return elEmail
		})
		
		const arrayPasswordInLocalStorage = arrayValueInLocalStorage.map(el => {
			let elPassword = el.password
			return elPassword
		})

		let indexEmail = arrayEmailInLocalStorage.indexOf(inputEmailModalLogIn.value)
		if (indexEmail !== -1 && inputPasswordModalLogIn.value === arrayPasswordInLocalStorage[indexEmail]) {
			buttonLogInModalLogIn.addEventListener("click", authorized);
			indexEmailUser = indexEmail;
		}
	}
	buyCardLibrary()
}

inputPasswordModalLogIn.oninput = () => {
	inputEmailModalLogIn.oninput = () => {	
		const arrayEmailInLocalStorage = arrayValueInLocalStorage.map(el => {
			let elEmail = el.email
			return elEmail
		})
		
		const arrayPasswordInLocalStorage = arrayValueInLocalStorage.map(el => {
			let elPassword = el.password
			return elPassword
		})

		let indexEmail = arrayEmailInLocalStorage.indexOf(inputEmailModalLogIn.value)
		if (indexEmail !== -1 && inputPasswordModalLogIn.value === arrayPasswordInLocalStorage[indexEmail]) {
			buttonLogInModalLogIn.addEventListener("click", authorized);
			indexEmailUser = indexEmail;
		}
	}
	buyCardLibrary()
}


// меню пользователя и модальное окно MY PROFILE
const closeMenuMyProfile = (event) => {
	menuMyProfile.classList.remove('open_my_profile')
}

const crossCloseModalMyProfile = () => {
	modalMyProfile.classList.remove('open_my_profile');
}

const closeModalMyProfile = (event) => {
	const target = event.target;

	if(target == bodyModalMyProfile) {
		modalMyProfile.classList.remove('open_my_profile');
	}
}

const closeAuthorized = () => {
	location.reload();
}

const openMenuMyProfile = () => {
	menuMyProfile.classList.add('open_my_profile');
	numberCardInMenuMyProfile.textContent = arrayValueInLocalStorage[indexEmailUser].card
}




	// Модальное окно MY PROFILE
const openModalMyProfile = () => {
	modalMyProfile.classList.add('open_my_profile');

	// Имя и инициалы в модальном окне MY PROFILE
	initialInModalMyProfile.textContent = `${arrayValueInLocalStorage[indexEmailUser].name1[0]}${arrayValueInLocalStorage[indexEmailUser].name2[0]}`;
	fullNameInModalMyProfile.textContent = `${arrayValueInLocalStorage[indexEmailUser].name1} ${arrayValueInLocalStorage[indexEmailUser].name2}`;

	if(fullNameInModalMyProfile.textContent.length > 11) {
		blockFullNameInModalMyProfile.style.width = '150px'
		blockFullNameInModalMyProfile.style.height = '50px'
	}

	// Счетчик визитов
	countVisitsMyProfile.textContent = arrayValueInLocalStorage[indexEmailUser].count
	// Номер карты
	numberCardMyProfile.textContent = arrayValueInLocalStorage[indexEmailUser].card
	// Счетчик книг
	countBooksModalMyProfile.textContent = arrayValueInLocalStorage[indexEmailUser].countBook

	// копирование нмера карты в буфер обмена
	const copyNumberCard = () => {
		navigator.clipboard.writeText(numberCardMyProfile.textContent)
	    .then(() => {
	        console.log('Text copied to clipboard');
	    })
	    .catch(err => {
	        console.error('Error in copying text: ', err);
	    });
	}

	copyNumberCardInModalMyProfile.addEventListener("click", copyNumberCard)
}

	userIcon.addEventListener("click", openMenuMyProfile);
	userIcon1.addEventListener("click", openMenuMyProfile);
	linkOutMenuMyProfile.addEventListener("click", closeAuthorized);
	linkOpenModalMyProfile.addEventListener("click", openModalMyProfile);
	menuMyProfile.addEventListener("click", closeMenuMyProfile);
	modalMyProfile.addEventListener("click", closeModalMyProfile);
	crossModalMyProfile.addEventListener("click", crossCloseModalMyProfile);


















