const imageCards = [
    {
        imageFries: "/Assets/images/first order discount.png"
    },
    {
        imageFries: "/Assets/images/first order discount.png"
    },
    {
        imageFries: "/Assets/images/first order discount.png"
    },
    {
        imageFries: "/Assets/images/first order discount.png"
    },
    {
        imageFries: "/Assets/images/first order discount.png"
    },
    {
        imageFries: "/Assets/images/first order discount.png"
    },
];

const chefBurger = document.querySelector('.chefBurger');
chefBurger.innerHTML = imageCards.map((imageCard) =>
    `<img src="${imageCard.imageFries}" class="h-full w-[30%]"/>`
).join('');