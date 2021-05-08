function init() {

    // 1. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
    // Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

    let basket = {
        goods: [["apple", 10], ["orange", 20], ["banana", 30]],
        amount: 0,
        price: 0,
    }

    let basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";

    function addApple() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[0][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function addOrange() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[1][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function addBanana() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[2][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function resetBasket() {
        return basket.amount = 0,
            basket.price = 0,
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }

    let appleButton = document.getElementById("addApple")
    appleButton.addEventListener('click', addApple)

    let orangeButton = document.getElementById("addOrange")
    orangeButton.addEventListener('click', addOrange)

    let bananaButton = document.getElementById("addBanana")
    bananaButton.addEventListener('click', addBanana)

    let resetButton = document.getElementById("resetButton")
    resetButton.addEventListener('click', resetBasket)

    // 2 * У товара может быть несколько изображений. Нужно менять картинку при нажатии на картинку

    oranges = ["img/orange.jpg", "img/orange2.jpg"]
    apples = ["img/apple.jpg", "img/apple2.jpg", "img/apple3.png"]
    let i = 0;
    let orangePic = document.getElementById("orangePic")

    function changeOrangePic() {
        i++; i %= oranges.length;
        orangePic.src = oranges[i];
    }
    orangePic.addEventListener('click', changeOrangePic)


    let applePic = document.getElementById("applePic")
    function changeApplePic() {
        i++; i %= apples.length;
        applePic.src = apples[i];
    }
    applePic.addEventListener('click', changeApplePic)

}

window.onload = init;

