const menuSm = document.getElementById("menuSm");
const tabBtn = document.querySelectorAll(".tab-btn");
const save = document.getElementById("save");
const prices = document.querySelectorAll(".price")
const highlights = document.querySelectorAll(".highlight")
const faqHead = document.querySelectorAll(".faq-head");
const expandAllBtn = document.getElementById("expandAll");
const collapseAllBtn = document.getElementById("collapseAll");

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

faqHead.forEach((head) =>{
 head.addEventListener("click", () =>{
  const body = head.parentElement.querySelector(".faq-body");

  if (body.classList.contains("max-h-0")){
   body.classList.remove("max-h-0");
   body.classList.add("max-h-40");
  }else {
   body.classList.add("max-h-0");
   body.classList.remove("max-h-40");
  }
 });
});

faqHead.forEach((head) => {
 head.addEventListener("click", () => {
  const plus = head.querySelector(".plus-icon");
  const close = head.querySelector(".close-icon");

  plus.classList.toggle("hidden");
  close.classList.toggle("hidden");


 })
});


expandAllBtn.addEventListener("click", () => {
 document.querySelectorAll(".faq-body").forEach((body) => {
  body.classList.remove("max-h-0");
  body.classList.add("max-h-40")
 });

 document.querySelectorAll(".plus-icon").forEach((icon) => {
  icon.classList.add("hidden");
 });

 document.querySelectorAll(".close-icon").forEach((icon) => {
  icon.classList.remove("hidden");
 });
});

collapseAllBtn.addEventListener("click", () => {
 document.querySelectorAll(".faq-body").forEach((body) => {
  body.classList.add("max-h-0");
  body.classList.remove("max-h-40")
 });

 document.querySelectorAll(".plus-icon").forEach((icon) => {
  icon.classList.remove("hidden");
 });

 document.querySelectorAll(".close-icon").forEach((icon) => {
  icon.classList.add("hidden");
 });
});
