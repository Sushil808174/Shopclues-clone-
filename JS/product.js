// implement clear all for discoount
let discountClrBtn=document.getElementById("discount-clear")
let discountOpt=document.querySelectorAll(".discounts")
discountClrBtn.addEventListener("click",(e) =>{
    e.preventDefault()
    for(let opt of discountOpt){
        opt.checked=false;
    }
})

// implement clear all for Price
let PriceClrBtn=document.getElementById("price-clear")
let PriceOpt=document.querySelectorAll(".Prices")
PriceClrBtn.addEventListener("click",(e) =>{
    e.preventDefault()
    for(let opt of PriceOpt){
        opt.checked=false;
    }
})

 // implement clear all for Rating
 let RatingClrBtn=document.getElementById("Rating-clear")
let RatingOpt=document.querySelectorAll(".Ratings")
RatingClrBtn.addEventListener("click",(e) =>{
    e.preventDefault()
    for(let opt of RatingOpt){
        opt.checked=false;
    }
})

 // implement clear all for Rating
 let BrandClrBtn=document.getElementById("Brand-clear")
let BrandOpt=document.querySelectorAll(".Brands")
BrandClrBtn.addEventListener("click",(e) =>{
    e.preventDefault()
    for(let opt of BrandOpt){
        opt.checked=false;
    }
})

 // implement clear all for Rating
 let ConditionClrBtn=document.getElementById("Condition-clear")
let ConditionOpt=document.querySelectorAll(".Conditions")
ConditionClrBtn.addEventListener("click",(e) =>{
    e.preventDefault()
    for(let opt of ConditionOpt){
        opt.checked=false;
    }
})
const url = `http://localhost:3000/Mobile&Laptop`;
let container = document.getElementById("menu") // body







//event listener
window.addEventListener("load", () => {
    fetchData()
  })

function fetchData(inputStr = null) {
    fetch(`${url}${inputStr ? inputStr : ""}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        display(data)
        // filter = data.data;
        
      })
  }
  function display(data) {
    container.innerHTML = `
    ${data.map((elem) => {
        return cards(elem.image,elem.id, elem.price, elem.title, elem.description, elem.ingredients)
      }).join("")
        })
    }
    `
  }
  function cards(image,id, price, title, description, ingredients) {
    let card=`
    <div class="card">
    <img src="https://media.istockphoto.com/id/1313901506/photo/cropped-shot-of-an-african-american-young-woman-using-smart-phone-at-home-smiling-african.jpg?s=612x612&w=0&k=20&c=geSmPOcfVl3aJ13j4XIDG85LZVbOVPhYsCBJ1I0BVrk=" alt="">
    <p>Refurbished Nokia 1600 Single Sim Feature phone 1.4 inches</p>
    <div>
        <h3 class="actual-price">₹899</h3>
        <h3 class="original-price"> ₹1899</h3>
        <h3 class="parcentage">53% Off</h3>
    </div>
    <p>Refurbished</p>
    <i class="fa-sharp fa-solid fa-star-sharp"></i>
</div>
    `
    return card;
  }