function init() {

    let basket = {
        milk: {
            price: 10,
            amount: 0,
        },
        bread: {
            price: 15,
            amount: 0,
        },
        apple: {
            price: 20,
            amount: 0,
        },
        amount: 0,
        price: 0,
    }

    // Молоко
    let addMilkButton = document.getElementById("addMilk")
    function addMilkToBasket() {
        basket.amount++
        basket.milk.amount++
        basket.price += basket.milk.price
        basketDiv.innerHTML = "В корзине: <br>" + "Молока: " + basket.milk.amount + "<br> Хлеба: " + basket.bread.amount + "<br> Яблок: " + basket.apple.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addMilkButton.addEventListener('click', addMilkToBasket)

    //Хлеб
    let addBreadButton = document.getElementById("addBread")
    function addBreadToBasket() {
        basket.amount++
        basket.bread.amount++
        basket.price += basket.bread.price
        basketDiv.innerHTML = "В корзине: <br>" + "Молока: " + basket.milk.amount + "<br> Хлеба: " + basket.bread.amount + "<br> Яблок: " + basket.apple.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addBreadButton.addEventListener('click', addBreadToBasket)

    //Яблоки   
    let addAppleButton = document.getElementById("addApple")
    function addAppleToBasket() {
        basket.amount++
        basket.apple.amount++
        basket.price += basket.apple.price
        basketDiv.innerHTML = "В корзине: <br>" + "Молока: " + basket.milk.amount + "<br> Хлеба: " + basket.bread.amount + "<br> Яблок: " + basket.apple.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    addAppleButton.addEventListener('click', addAppleToBasket)

    //Кнопка показать/скрыть корзину
    let basketDiv = document.getElementById("basketDiv")
    let showBasketButton = document.getElementById("showButton")
    function showBasket() {
        if (basketDiv.style.display == "none") {
            basketDiv.style.display = "block"
            showBasketButton.innerHTML = "Скрыть козрину"
        } else {
            basketDiv.style.display = "none"
            showBasketButton.innerHTML = "Показать корзину"
        }
    }
    showBasketButton.addEventListener('click', showBasket)

    //Кнопка Reset
    let resetButton = document.getElementById("resetButton")
    function resetBasket() {
        basket.amount = 0;
        basket.milk.amount = 0;
        basket.bread.amount = 0;
        basket.apple.amount = 0;
        basket.price = 0;
        basketDiv.innerHTML = "Корзина пуста."
        // basketDiv.innerHTML = "В корзине: <br>" + "Молока: " + basket.milk.amount + "<br> Хлеба: " + basket.bread.amount + "<br> Яблок: " + basket.apple.amount + "<br> Общая стоимость: " + basket.price + " рублей."
    }
    resetButton.addEventListener('click', resetBasket)

    //Кнопка Далее
    let basketWrapper = document.getElementById("basketWrapper")
    let nextButton = document.getElementById("nextButton")
    function next() {
        basketWrapper.style.display = "none"
        bottomWrapper.style.display = "block"
    }
    nextButton.addEventListener('click', next)

    // address, comms
    let addressArea = document.getElementById("address")
    let commsArea = document.getElementById("comms")

    //Кнопка Отправить
    let sendButton = document.getElementById("sendButton")
    function send() {
        addressArea.innerHTML = ""
        commsArea.innerHTML = ""
    }
    sendButton.addEventListener('click', send)

    //Кнопка Отмена
    let cancelButton = document.getElementById("cancelButton")
    function cancel() {
        basketWrapper.style.display = "block"
        bottomWrapper.style.display = "none"
    }
    cancelButton.addEventListener('click', cancel)

}

window.onload = init;
