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

    let orangePic = document.getElementById("orangePic")
    function changeOrangePic() {
        if (orangePic.src == "file:///C:/Users/king%20komp/Desktop/lesson6/img/orange.jpg") {
            return orangePic.src = "file:///C:/Users/king%20komp/Desktop/lesson6/img/orange2.jpg"
        } else {
            return orangePic.src = "file:///C:/Users/king%20komp/Desktop/lesson6/img/orange.jpg"
        }
    }
    orangePic.addEventListener('click', changeOrangePic)


    let applePic = document.getElementById("applePic")
    function changeApplePic() {
        if (applePic.src == "file:///C:/Users/king%20komp/Desktop/lesson6/img/apple.jpg") {
            return applePic.src = "file:///C:/Users/king%20komp/Desktop/lesson6/img/apple2.jpg"
        } else if (applePic.src == "file:///C:/Users/king%20komp/Desktop/lesson6/img/apple2.jpg") {
            applePic.src = "file:///C:/Users/king%20komp/Desktop/lesson6/img/apple3.png"
        } else {
            applePic.src = "file:///C:/Users/king%20komp/Desktop/lesson6/img/apple.jpg"
        }
    }
    applePic.addEventListener('click', changeApplePic)

}

window.onload = init;