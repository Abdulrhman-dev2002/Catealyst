const menuSm = document.getElementById("menuSm");
const tabBtn = document.querySelectorAll(".tab-btn");
const save = document.getElementById("save");
const prices = document.querySelectorAll(".price")
const highlights = document.querySelectorAll(".highlight")

 menuSm.classList.add("hidden");

document.querySelector(".hamburger").addEventListener("click",function(){
 this.classList.toggle("is-active")
 menuSm.classList.toggle("hidden")
});


tabBtn.forEach((tab) => {
 tab.addEventListener('click',() => {
  tabBtn.forEach((t) => t.classList.remove(
   "bg-primary",
   "border",
   "border-secondary/15",
   "text-black"

  ) );

  tab.classList.add(
   "bg-primary",
   "border",
   "border-secondary/15",
   "text-black"

  ) ;

  if(tab.dataset.plan === 'monthly'){
   save.classList.add('invisible')
  }else{
   save.classList.remove('invisible')

  }

  prices.forEach((price) => {
   price.textContent = 
   tab.dataset.plan === "monthly"
   ? price.dataset.monthly
   : price.dataset.yearly;

  })

  highlights.forEach((highlight) => {
   if(tab.dataset.plan === "monthly") {
    highlight.textContent = highlight.dataset.monthly;

    highlight.classList.remove(
     "p-2",
    "bg-primary",
    "rounded-lg",
    "font-bold",
    "text-center",
    "w-fit",
    );

    highlight.classList.add("text-secondary","text-sm");

   }else{
    highlight.textContent = highlight.dataset.yearly;
    highlight.classList.add(
     "p-2",
    "bg-primary",
    "rounded-lg",
    "font-bold",
    "text-center",
    "w-fit",
    );
   
    highlight.classList.remove("text-secondary","text-sm");


   }

  })
 });
});
