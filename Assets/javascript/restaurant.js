const cards = [
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: 'url("/Assets/images/Cola and burger.png)',
        imagePlus: 'url("/Assets/icons/Plus.png)',
    },
]

const burgersContainer = document.querySelector('.Burgers')
burgersContainer.innerHTML= cards.map((card) =>
`<div class="cardContainer">
<P class="text-xl font-bold">Burgers</P>
<div class="mainCard grid grid-cols-2 p-4 shadow-2xl rounded-xl border-gray-200 border">
<div class="word-box pt-2">
<p class="text-lg font-bold">${card.foodName}</p>
<p class="py-5 text-sm">${card.description}</p>
<p class="font-bold text-lg">${card.price}</p>
</div>
<div class="image-box relative">
<img src="/Assets/images/Cola and burger.png" class="object-cover w-full h-full" />
<div class="absolute rounded-tl-full right-0 bottom-0 bg-white opacity-70 place-items-center w-[40%] h-[30%] align-middle py-2">
<img src="/Assets/icons/Plus.png"/>
</div>
</div>
</div>
</div>
`
).join('')