const url = `http://localhost:9090/departments`;
let container = document.getElementById("menu") // body
// for filter 
let filter=[];
let filterData=[];

// for sorting 
let high=document.getElementById("h2l")
let low=document.getElementById("l2h")
let newArrival=document.getElementById("newArrive")
let popular=document.getElementById("highRate")

//event listener
window.addEventListener("load", () => {
  fetchData()
})

// sort event 
high.addEventListener("click", () => {
  console.log("ok")
  fetchData(`?_sort=price&_order=desc`)
  high.style.borderBottom="cyan"
})

low.addEventListener("click", () => {
  fetchData(`?_sort=price&_order=asc`)
})

newArrival.addEventListener("click", () => {
  fetchData(`?_sort=createdAt&_order=desc`)
})

popular.addEventListener("click", () => {
  fetchData(`?_sort=rateing&_order=desc`)
})

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
    fetchData()
})
// filter for price 
for(let checkbox of PriceOpt){
    checkbox.addEventListener("change",()=>{
      let actualFilterData=[]
        // console.log(checkbox.value)
        filter = 
        Array.from(PriceOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
        
      console.log(filter)
      for(let i=0;i<filter.length;i++){
        if(filter[i]==="501-1000"){
          filterData.filter((elem)=>{          
            if(elem.price>=501 && elem.price <=1000){
              actualFilterData.push(elem)
            }
          })
        }else  if(filter[i]==="1001-2500"){
          filterData.filter((elem)=>{
            if(elem.price>=1001 && elem.price <=2500){
              actualFilterData.push(elem)
            }
          })
        }else  if(filter[i]==="2501-5000"){
          filterData.filter((elem)=>{
            if(elem.price>=2501 && elem.price <=5000){
              actualFilterData.push(elem)
            }
          })
        }else  if(filter[i]==="5001"){
          filterData.filter((elem)=>{
            if(elem.price>=5001){
              actualFilterData.push(elem)
            }
          })
        }
      }
      if(filter.length==0){      
          fetchData()
          console.log("ok")
      }else{
        display(actualFilterData)
      }
      // console.log(actualFilterData)
    })
}


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

function fetchData(inputStr = null) {
    fetch(`${url}${inputStr ? inputStr : ""}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        display(data)
        filterData = data;
        
      })
  }
  function display(data) {
    container.innerHTML = `
    ${data.map((elem) => {
        return cards(elem.image,elem.title,elem.originalprice,elem.discount,elem.rateing,elem.condition,elem.price)
      }).join("") } 
    `
  }
  function cards(image,title,originalprice,discount,rateing,condition,price) {
    let card=`
    <a href="">
    <div class="card">
    <div class="img-div">
    <img src=${image} alt="">
    </div>
    <div class="detail-div">
    <p>${title}</p>
    <div>
    <h3 class="actual-price">₹${price}</h3>
    <h3 class="original-price"> ₹${originalprice}</h3>
    <h3 class="parcentage">${discount}%Off</h3>
    </div>
    <p>${condition}</p>
    <p>${rateing}</p>
    </div>
    </div>
    </a>
    `
    return card;
  }
  