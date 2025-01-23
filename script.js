//Валидация

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Сброс ошибок
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    let isValid = true;

    // Валидация имени
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Валидация email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Валидация сообщения
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    // Если форма валидна, отправляем данные
    if (isValid) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Успех');
                form.reset();
            } else {
                alert('Ошибка');
            }
        } catch (error) {
            alert('Ошибка на сервере.');
        }
    }
});


//Бургер меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.querySelector('#close')
const overlay = document.getElementById('overlay');

    burger.addEventListener('click', () => {
        menu.classList.toggle('open');
        overlay.classList.add('active');
    });


    close.addEventListener('click', () => {
        menu.classList.remove('open'); 
        overlay.classList.remove('active');
    });

