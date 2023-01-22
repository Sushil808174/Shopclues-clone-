let mainsection = document.getElementById("cart-products")
console.log(mainsection)
// let obj = {
//     "id": 10,
//     "name": "Nokia Referbished",
//     "profile": "https://cdn.shopclues.com/images1/thumbnails/56727/320/320/85444779-56727506-1668506622.jpg",
//     "price1": "929",
//     "price": 929,
//     "description": "Refurbished Nokia 1110I Single Sim Feature Phone (Assorted colours)"
// }



let data = JSON.parse(localStorage.getItem("add-to-cart")) || []

let placeorder = document.getElementById("placeorder");
if (data.length == 0) {
    // placeorder.innerHTML = ""

}

else {
    renderpage(data);
    placeorder.style.display = "flex"
    let section = document.getElementById("productsection")

    function getcard(id, name, price, desc, img, quantity) {
        let card = ` <div class="card white">
    <div class="cardwrapper">
        <div  class="card-child-first">
            <div class="card-img"><img src=${img} alt=""></div>
            <div class="card-name">${name} </div>
        </div>
        <div  class="card-child-second">
            <div class="quantity-button">
            <button class="decriment-btn" value=${id}><b>-</b></button>
            <span class="quantity">${quantity}</span>
            <button class="incriment-btn" value=${id}><b>+</b></button>
        </div>
        <div class=" blue" ><button class="removeitem" value=${id}>remove</button></div>
        </div>
        <div  class="card-child-third">
            <div class="card-price">
<div>Price:&nbsp₹${price} </div>
<div>Discount:&nbsp₹500</div>
<div>Shipping: &nbspFREE</div>
            </div>
            <div class="card-total">
                <div><b>₹${price * quantity}</b></div>
                <div class="grey">inclusive of all the applicable taxes</div>

            </div>
        </div>
    </div>
</div>`
        return card
    }

    function renderpage(data) {
        mainsection.innerHTML = `${data.map((item, index) => getcard(item.id, item.title, item.price, item.description, item.image, item.quantity)).join("")}`
        // =================incriment button======================================================
        let inc = document.querySelectorAll(".incriment-btn")

        inc.forEach((item) => {
            item.addEventListener("click", () => {
                console.log(item.value)
                let cartdata = JSON.parse(localStorage.getItem("add-to-cart"))
                console.log(cartdata)
                cartdata.forEach((ele, index) => {
                    if (item.value == ele.id) {
                        ele.quantity++
                        //   ele.price=ele.price*ele.quantity;
                        localStorage.setItem("add-to-cart", JSON.stringify(cartdata))
                        window.location.reload();
                    }
                })
            })
        })
        // =============================================decriment=====
        let dec = document.querySelectorAll(".decriment-btn")
        dec.forEach((item) => {
            item.addEventListener("click", () => {
                console.log(item.value)
                let cartdata = JSON.parse(localStorage.getItem("add-to-cart"))
                //   console.log(cartdata)
                cartdata.forEach((ele, index) => {
                    if (item.value == ele.id) {
                        if (ele.quantity > 1) {
                            ele.quantity--
                            localStorage.setItem("add-to-cart", JSON.stringify(cartdata))
                            window.location.reload();
                        }
                    }
                })
            })
        })
        // ===============================================remove item===================
        let remove = document.querySelectorAll(".removeitem")
        console.log(remove)
        remove.forEach((item) => {
            item.addEventListener("click", () => {
                console.log(item.value)
                let cartdata = JSON.parse(localStorage.getItem("add-to-cart"))
                console.log(cartdata)
                cartdata.forEach((ele, index) => {
                    if (item.value == ele.id) {
                        cartdata.splice(index, 1);
                        localStorage.setItem("add-to-cart", JSON.stringify(cartdata))
                        alert("product removed successfully")
                        window.location.reload();

                    }
                })
            })
        })

        // ==============================================================
        let total = document.querySelector(".final-total");
        let gtotal = document.querySelector(".final-grand-total");
        // console.log(total,gtotal)
        let grand_total = 0
        let cartdata = JSON.parse(localStorage.getItem("add-to-cart"))
        cartdata.forEach((item) => {
            grand_total += item.price * item.quantity
        })
        // console.log(grand_total)
        total.innerText ="₹"+grand_total
        gtotal.innerText = "₹"+grand_total
        // ==========================================================================================================
    }
}
