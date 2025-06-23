const mobileCards = [
    {
        label: "Farm House Extreme Pizza",
        img: "/Assets/images/pizza.png",
        description1:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
    {
        label: "Farm House Extreme Pizza",
        img: "/Assets/images/pizza.png",
        description1:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
    {
        label: "Farm House Extreme Pizza",
        img: "/Assets/images/pizza.png",
        description1:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    },
];

const farmHouse = document.querySelector(".farmHouse");
farmHouse.innerHTML = mobileCards
    .map(
        (mobileCard) =>
            `<div class="md:py-8 py-4 md:px-8 px-4 border-2 border-gray-200 shadow-lg my-5 rounded-md">
<div class="flex justify-between gap-8">
<div><p class="text-2xl font-bold">${mobileCard.label}</p>
<img src="/Assets/images/pepper.png"/></div>
<img src="${mobileCard.img}" class=""/>
</div>
<p class="-tracking-tighter md:my-6 my-4">1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</p>
<div class="grid grid-cols-2 gap-2 md:gap-4">
<div class="bg-black grid grid-cols-2 gap-1 text-center place-items-center py-2 px-3 rounded-lg">
<p class="text-white md:text-2xl font-bold text-sm">Small</p>
<p class="bg-green-700 text-sm md:text-2xl text-white md:px-8 px-1 py-2 rounded-lg">$21.19</p>
</div>
<div class="bg-white grid grid-cols-2 gap-2 text-center place-items-center py-2 px-3 rounded-lg border-2 border-gray-200">
<p class="text-[12px] md:text-2xl font-bold">medium</p>
<p class="bg-green-700 text-sm md:text-2xl text-white px-1 md:px-8 py-2 rounded-lg">$21.19</p>
</div>
</div>
<div class="grid grid-cols-2">
<div class="bg-white grid grid-cols-2 gap-1 text-center place-items-center py-2 px-3 rounded-lg border-2 border-gray-200 my-2">
<p class="md:text-2xl text-sm font-bold">Large</p>
<p class="bg-green-700 md:text-2xl text-white md:px-8 px-4 py-2 rounded-lg">$21.19</p>
</div></div>
<div class="bg-white grid grid-cols-2 gap-1 text-center place-items-center py-2 px-3 rounded-lg border-2 border-gray-200 w-[80%]">
<p class="text-sm md:text-xl font-bold">XL large with Sauces</p>
<p class="bg-green-700 md:text-2xl text-white md:px-8 px-4 py-2 rounded-lg">$21.19</p>
</div>


</div>`
    )
    .join("");
