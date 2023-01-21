let description = document.getElementById("description")
    let p = document.createElement("p")
    document.getElementById("prdct-spec").addEventListener("click", (e) => {
        // console.log("working")
        description.innerHTML = ""
        e.preventDefault()
        description.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aliquam iste at impedit quaerat rem nobis nihil? Adipisci quis nisi voluptate autem cupiditate, iusto obcaecati quod cum libero minus dolor, neque quae aliquam ipsum pariatur velit tempore non voluptatibus consequuntur esse amet! Laudantium quasi maiores ab porro a itaque repellat atque. Doloremque vero aliquid dicta! Corrupti deserunt reprehenderit repudiandae sapiente in dignissimos voluptatem voluptate harum error exercitationem alias, consequatur rerum asperiores vitae illo. Ipsum beatae nisi nobis modi? Ad, perferendis animi at, possimus a consequatur similique ratione provident voluptatibus corrupti exercitationem maiores, dolore ex recusandae voluptatum debitis qui? Ea, rerum.`
        description.append(p)
    })



    document.getElementById("prdct-desc").addEventListener("click", (e) => {
        // console.log("working")
        description.innerHTML = ""
        e.preventDefault()


        p.innerText = `tushar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aliquam iste at impedit quaerat rem nobis nihil? Adipisci quis nisi voluptate autem cupiditate, iusto obcaecati quod cum libero minus dolor, neque quae aliquam ipsum pariatur velit tempore non voluptatibus consequuntur esse amet! Laudantium quasi maiores ab porro a itaque repellat atque. Doloremque vero aliquid dicta! Corrupti deserunt reprehenderit repudiandae sapiente in dignissimos voluptatem voluptate harum error exercitationem alias, consequatur rerum asperiores vitae illo. Ipsum beatae nisi nobis modi? Ad, perferendis animi at, possimus a consequatur similique ratione provident voluptatibus corrupti exercitationem maiores, dolore ex recusandae voluptatum debitis qui? Ea, rerum.`
        description.append(p)
    })




    let legalinfo = document.getElementById("legal-info")
    legalinfo.addEventListener("click", (e) => {
        // console.log("working")
        // legalinfo.style.color="blue"
        description.innerHTML = ""
        e.preventDefault()
        p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aliquam iste at impedit quaerat rem nobis nihil? Adipisci quis nisi voluptate autem cupiditate, iusto obcaecati quod cum libero minus dolor, neque quae aliquam ipsum pariatur velit tempore non voluptatibus consequuntur esse amet! Laudantium quasi maiores ab porro a itaque repellat atque. Doloremque vero aliquid dicta! Corrupti deserunt reprehenderit repudiandae sapiente in dignissimos voluptatem voluptate harum error exercitationem alias, consequatur rerum asperiores vitae illo. Ipsum beatae nisi nobis modi? Ad, perferendis animi at, possimus a consequatur similique ratione provident voluptatibus corrupti exercitationem maiores, dolore ex recusandae voluptatum debitis qui? Ea, rerum.`
        description.append(p)
    })







 let obj={
    "id":10,
    "name":"Nokia Referbished",
    "profile": "https://cdn.shopclues.com/images1/thumbnails/56727/320/320/85444779-56727506-1668506622.jpg",
    "price1": "929",
    "price" : 929,
    "description": "Refurbished Nokia 1110I Single Sim Feature Phone (Assorted colours)"
 }

       let card=document.getElementById("card-wrapper")
       console.log(card)
renderpage(obj.id,obj.name,obj.profile,obj.price,obj.description);
let section=document.getElementById("productsection")

function renderpage(id,name,img,price,desc){
    console.log(name,id)
    card.innerHTML=`<div class="prdct-img"><img
    src=${img}
    alt=""></div>
<div class="prdct-info">
<div>
    <h3>
        ${name}
    </h3>
</div>
<div class="def_flex">
    <div>branded</div>
    <div>product id:${id}</div>
</div>
<span class="blue">be the first to write a review</span>
<div class="price">
    <div>
        <h2>${price}</h4>
    </div>
    <div class="mrp">MRP: <strike>2900</strike>
    </div>
    <div class="off blue">75% off</div>
</div>
<span class="grey">inclusive of all taxes</span>
<div class="offers">
    <h4>1 offer applicable for you</h5>
</div>
<div class="cart-buy">
    <div class="cartbtn"><a href=""><img class="buybtn" src="/image/addtocart.png" alt=""></a></div>
    <div><a href=""><img class="buybtn" src="/image/Screenshot_20230118_085337.png" alt=""></a>
    </div>
</div>
<div class="pinsec">
    <div><input type="text" id="pininput" placeholder="Enter pincode for delivery"></div>
    <div><button id="pincheck">Check</button></div>
</div>
<div id="delivery-option">
    <div class="grey">COD <b> Available</b></div>
    <div class="grey">Free Shipping</div>
    <div class="grey">Deliverd <b>2-5 Business Days</b></div>
</div>
<div class="grey">Easy Returns & Replacement</div>
<div class="grey">Payment Options: (Credit Card , Debit Card , Net Banking , Wallets , COD)</div>
</div>
<div class="sell-info grey">
<div class="infowrapper"><span>Sold By:</span>
    <span class="grey">SCSUPERCLONE22</span>
    <span class="grey">Gurgaon,Haryana</span>
    <a href="" class="blue"><span> visit seller store</span></a>
</div>
</div>
</div>
</div>`


}

