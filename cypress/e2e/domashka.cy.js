describe('автотесты для формы логина и пароля', function () {

   it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и кликнуть на неё
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    })
   it('автотест на проверку логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').click(); // Найти нопку Забыли пароль и кликнуть на неё
        cy.get('#mailForgot').type('nikfff@mail.ru'); // Найти поле email и ввести email
        cy.get('#restoreEmailButton').click(); // Найти кнопку Отправить код и кликнуть на неё
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    })
      it('неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и ввести правильный логин
        cy.get('#pass').type('iLoveqa1'); // Найти поле пароль и ввести неверный пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и кликнуть на неё
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    }) 
   it('неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('gen@dolnikov.ru'); // Найти поле логин и ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и кликнуть на неё
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    }) 
   it('негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Найти поле логин и ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и кликнуть на неё
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    }) 
     it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти поле логин и ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести пароль
        cy.get('#loginButton').click(); // Найти кнопку войти и кликнуть на неё
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю есть ли текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Проверяю виден ли пользователю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю есть крестик и виден ли он пользователю
    })
})

