const url =`http://localhost:3000/Mobile&Laptop`;
let container = document.getElementById("menu") // body
// for filter 
let filter = [];
let filterData = [];



// for sorting 
let high = document.getElementById("h2l")
let low = document.getElementById("l2h")
let newArrival = document.getElementById("newArrive")
let popular = document.getElementById("highRate")

//for no indexing
let mainIndex = document.getElementById("indexCount")
// add event listeners 
window.addEventListener("load", () => {
  fetchData()
})
// *******************************************************************************
// sort event 
high.addEventListener("click", () => {
  console.log("ok")
  fetchData(`?_sort=price&_order=desc`)
  // high.style.borderBottom="cyan"
})

low.addEventListener("click", () => {
  fetchData(`?_sort=price&_order=asc`)
})

newArrival.addEventListener("click", () => {
  fetchData(`?_sort=createdAt&_order=desc`)
})

popular.addEventListener("click", () => {
  fetchData(`?_sort=rating&_order=desc`)
})
// **********************************************************************
//category filter index
let mobileTabletIndex = document.getElementById("mobile-tablet-ind")
let RefurbishedMobilesIndex = document.getElementById("Refurbished-Mobiles-ind")
let UnboxedTabletsIndex = document.getElementById("Unboxed-Tablets-ind")
let laptopIndex = document.getElementById("laptop-ind")
let newlaptopIndex = document.getElementById("newlaptop-ind")
let refurbishedLaptopIndex = document.getElementById("refurbished-laptop-ind")

// category filters 
// *********************************************
let mobileTablet = document.getElementById("mobile-tablets")
mobileTablet.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.category === "Mobile" || elem.category === "Tablet") {
      return true;
    } else {
      return false;
    }
  })
  mobileTabletIndex.innerText = `(${printData.length})`;
  display(printData)
})

let UnboxedTablets = document.getElementById("tablets")
UnboxedTablets.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.category === "Tablet") {
      return true;
    } else {
      return false;
    }
  })
  UnboxedTabletsIndex.innerText = `(${printData.length})`;
  display(printData)
})

let refurbishedMobile = document.getElementById("refurbished-mobile")
refurbishedMobile.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.condition === "Refurbished" && elem.category === "Mobile") {
      return true;
    } else {
      return false;
    }
  })
  RefurbishedMobilesIndex.innerText = `(${printData.length})`;
  display(printData)
})

let newLaptop = document.getElementById("newlaptop")
newLaptop.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.category === "Laptop" && elem.condition === "new") {
      return true;
    } else {
      return false;
    }
  })
  newlaptopIndex.innerText = `(${printData.length})`;
  display(printData)
})

let Laptops = document.getElementById("laptop")
Laptops.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.category === "Laptop") {
      return true;
    } else {
      return false;
    }
  })
  laptopIndex.innerText = `(${printData.length})`;
  display(printData)
})

let refurbishedLaptop = document.getElementById("refurbished-laptop")
refurbishedLaptop.addEventListener("click", () => {
  let printData = filterData.filter((elem) => {
    // console.log(elem.category)
    if (elem.category === "Laptop" && elem.condition === "Refurbished") {
      return true;
    } else {
      return false;
    }
  })
  refurbishedLaptopIndex.innerText = `(${printData.length})`;
  display(printData)
})
// ************************************************************************
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//discount filter index
let upto20Index = document.getElementById("Upto-20%-ind")
let p2140Index = document.getElementById("21-40%-ind")
let p4160Index = document.getElementById("41-60%-ind")
let p6180Index = document.getElementById("61-80%-ind")
let Morethan80Index = document.getElementById("More-than-80%-ind")

// implement clear all for discoount
let discountClrBtn = document.getElementById("discount-clear")
let discountOpt = document.querySelectorAll(".discounts")
discountClrBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  for (let opt of discountOpt) {
    opt.checked = false;
  }
  fetchData()
})
// filter for price 
for (let checkbox of discountOpt) {
  checkbox.addEventListener("change", () => {
    let actualFilterData = []
    // console.log(checkbox.value)
    filter =
      Array.from(discountOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    // console.log(filter)
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === "Upto 20%") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.discount >= 0 && elem.discount <= 20) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        upto20Index.innerText = `(${printData.length})`;
      } else if (filter[i] === "21-40%") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.discount >= 21 && elem.discount <= 40) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p2140Index.innerText = `(${printData.length})`
      } else if (filter[i] === "41-60%") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.discount >= 41 && elem.discount <= 60) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p4160Index.innerText = `(${printData.length})`
      } else if (filter[i] === "61-80%") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.discount >= 61 && elem.discount <= 80) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p6180Index.innerText = `(${printData.length})`
      } else if (filter[i] === "More than 80%") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.discount > 80) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        Morethan80Index.innerText = `(${printData.length})`
      }
    }
    if (filter.length == 0) {
      fetchData()
      console.log("ok")
    } else {
      display(actualFilterData)
    }
  })
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//price filter index
let p5011000Index = document.getElementById("501-1000-ind")
let p10012500Index = document.getElementById("1001-2500-ind")
let p25015000Index = document.getElementById("2501-5000-ind")
let Above5000Index = document.getElementById("Above-5000-ind")

// implement clear all for Price
let PriceClrBtn = document.getElementById("price-clear")
let PriceOpt = document.querySelectorAll(".Prices")
PriceClrBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  for (let opt of PriceOpt) {
    opt.checked = false;
  }
  fetchData()
})
// filter for price 
for (let checkbox of PriceOpt) {
  checkbox.addEventListener("change", () => {
    let actualFilterData = []
    filter =
      Array.from(PriceOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    // console.log(filter)
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === "501-1000") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.price >= 501 && elem.price <= 1000) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p5011000Index.innerText = `(${printData.length})`
      } else if (filter[i] === "1001-2500") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.price >= 1001 && elem.price <= 2500) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p10012500Index.innerText = `(${printData.length})`
      } else if (filter[i] === "2501-5000") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.price >= 2501 && elem.price <= 5000) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        p25015000Index.innerText = `(${printData.length})`
      } else if (filter[i] === "Upto 5000") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.price >= 5001) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        Above5000Index.innerText = `(${printData.length})`
      }
    }
    if (filter.length == 0) {
      fetchData()
      console.log("ok")
    } else {
      display(actualFilterData)
    }
    // console.log(actualFilterData)
  })
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//rating filter index
let above4Index = document.getElementById("above-4-ind")
let above3Index = document.getElementById("above-3-ind")
let above2Index = document.getElementById("above-2-ind")
let above1Index = document.getElementById("above-1-ind")
// implement clear all for Rating
let RatingClrBtn = document.getElementById("Rating-clear")
let RatingOpt = document.querySelectorAll(".Ratings")
RatingClrBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  for (let opt of RatingOpt) {
    opt.checked = false;
  }
  fetchData()
})

// / filter for rating  
for (let checkbox of RatingOpt) {
  checkbox.addEventListener("change", () => {
    let actualFilterData = []
    filter =
      Array.from(RatingOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    // console.log(filter)
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === "above 4") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.rating >= 4) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        above4Index.innerText = `(${printData.length})`
      } else if (filter[i] === "above 3") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.rating >= 3) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        above3Index.innerText = `(${printData.length})`
      } else if (filter[i] === "above 2") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.rating >= 2) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        above2Index.innerText = `(${printData.length})`
      } else if (filter[i] === "above 1") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.rating >= 1) {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        above1Index.innerText = `(${printData.length})`
      }
    }
    if (filter.length == 0) {
      fetchData()
      console.log("ok")
    } else {
      display(actualFilterData)
    }
    // console.log(actualFilterData)
  })
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//brand filter index
let APPLEIndex = document.getElementById("APPLE-ind")
let SAMSUNGIndex = document.getElementById("SAMSUNG-ind")
let LENOVOIndex = document.getElementById("LENOVO-ind")
let HPIndex = document.getElementById("HP-ind")
let NOKIAIndex = document.getElementById("NOKIA-ind")

// implement clear all for brand
let BrandClrBtn = document.getElementById("Brand-clear")
let BrandOpt = document.querySelectorAll(".Brands")
BrandClrBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  for (let opt of BrandOpt) {
    opt.checked = false;
  }
  fetchData()
})

// / filter for brand 
for (let checkbox of BrandOpt) {
  checkbox.addEventListener("change", () => {
    let actualFilterData = []
    filter =
      Array.from(BrandOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    // console.log(filter)
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === "APPLE") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.brand === "APPLE") {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        APPLEIndex.innerText = `(${printData.length})`
      } else if (filter[i] === "SAMSUNG") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.brand === "SAMSUNG") {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        SAMSUNGIndex.innerText = `(${printData.length})`
      } else if (filter[i] === "LENOVO") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.brand === "LENOVO") {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        LENOVOIndex.innerText = `(${printData.length})`
      } else if (filter[i] === "HP") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.brand === "HP") {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        HPIndex.innerText = `(${printData.length})`
      } else if (filter[i] === "NOKIA") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.brand === "NOKIA") {
            actualFilterData.push(elem)
            printData.push(elem)
          }
        })
        NOKIAIndex.innerText = `(${printData.length})`
      }
    }
    if (filter.length == 0) {
      fetchData()
      console.log("ok")
    } else {
      display(actualFilterData)
    }
  })
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//brand condition filter index
let NewIndex = document.getElementById("New-ind")
let RefurbishedIndex = document.getElementById("Refurbished-ind")

// implement clear all for brand condition
let ConditionClrBtn = document.getElementById("Condition-clear")
let ConditionOpt = document.querySelectorAll(".Conditions")
ConditionClrBtn.addEventListener("click", (e) => {
  // e.preventDefault()
  for (let opt of ConditionOpt) {
    opt.checked = false;
  }
  fetchData()
})

// / filter for brand condition
for (let checkbox of ConditionOpt) {
  checkbox.addEventListener("change", () => {
    let actualFilterData = []
    filter =
      Array.from(ConditionOpt) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

    // console.log(filter)
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === "New") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.condition === "new") {
            actualFilterData.push(elem)
            printData.push(elem)
            // return true;
          }
        })
        NewIndex.innerText = `(${printData.length})`
      } else if (filter[i] === "Refurbished") {
        let printData = []
        filterData.filter((elem) => {
          if (elem.condition === "Refurbished") {
            actualFilterData.push(elem)
            printData.push(elem)
            // return true;
          }
        })
        RefurbishedIndex.innerText = `(${printData.length})`
      }
    }
    if (filter.length == 0) {
      fetchData()
      // console.log("ok")
    } else {
      display(actualFilterData)
    }
  })
}


// **********************************
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
    mainIndex.innerText = data.length;
    container.innerHTML = `
      ${data.map((elem) => {
      return cards(elem.id,elem.image, elem.title, elem.originalprice, elem.discount, elem.rating, elem.condition, elem.price)
    }).join("")} 
      `
      let clickDiv = document.querySelectorAll(".checkout")
    // let cartData = JSON.parse(localStorage.getItem("checkOutData")) || [];
    
    for (let btn of clickDiv) {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        let cartData=[]
        data.forEach(element => {
          if (element.id === e.target.dataset.id) {
            cartData.push(element)
            localStorage.setItem("checkOutData", JSON.stringify(cartData))
          }
        });
      })
  
    }
    }
  function cards(id,image, title, originalprice, discount, rating, condition, price) {
    let card = `
    
      <div class="card" >
      <div class="img-div">
      <img src=${image} alt="">
      </div>
      <div class="detail-div">
      <p>${title.substring(0,50)}</p>
      <div>
      <h3 class="actual-price">₹${price}</h3>
      <h3 class="original-price"> ₹${originalprice}</h3>
      <h3 class="parcentage">${discount}%Off</h3>
      </div>
      <p>${fun(condition)}</p>
      <p>${rating} <i class="fa-solid fa-star"></i></p>
      <P class="checkout" data-id="${id}" >Read More</p>
      </div>
      </div>
      `
    return card;
  }
  function fun(condition) {
    if (condition === "Refurbished") {
      return `<i class="fa-solid fa-screwdriver-wrench"></i> ${condition} `
    }
    return "&nbsp;";
  }