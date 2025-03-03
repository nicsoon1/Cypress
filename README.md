<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Тест-кейсы, которые автоматизированы
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/nicsoon1/Cypress/refs/heads/main/static/baseURL.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/nicsoon1/Cypress/refs/heads/main/static/hooks.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/nicsoon1/Cypress/refs/heads/main/static/user.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/nicsoon1/Cypress/refs/heads/main/static/locators.png)

## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://raw.githubusercontent.com/nicsoon1/Cypress/refs/heads/main/static/ui.png)


## Автор

Григорьев Никита ([@nicsoon1](https://t.me/nicsoon1))
