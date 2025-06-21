const parks = [
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
    {
        foodName: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image1: "/Assets/images/mc fries.png",
        imagePlus: "/Assets/icons/Plus.png",
    },
]

const friesContainer = document.querySelector('.fries')
friesContainer.innerHTML= parks.map((park) =>
`<div class="cardContainer">
<div class="mainCard grid grid-cols-2 p-4 shadow-2xl rounded-xl border-gray-200 border">
<div class="word-box pt-2">
<p class="text-lg font-bold">${park.foodName}</p>
<p class="py-5 text-sm">${park.description}</p>
<p class="font-bold text-lg">${park.price}</p>
</div>
<div class="image-box relative">
<img src="${park.image1}" class="object-cover w-full h-full rounded-xl" />
<div class="absolute rounded-tl-full right-0 bottom-0 bg-white opacity-70 place-items-center w-[40%] h-[30%] align-middle py-2">
<img src="${park.imagePlus}"/>
</div>
</div>
</div>
</div>
`
).join('')