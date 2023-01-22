// for the slider

let bannerData=["https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg",
"https://cdn.shopclues.com/images/banners/2023/Jan/19/HB2_AutomotiveSale_Web_Esha_19Jan23.jpg","https://cdn.shopclues.com/images/banners/2023/Jan/19/HB3_Prebuzz_Web_SYM_19Jan23.jpg",
"https://cdn.shopclues.com/images/banners/2023/Jan/19/JMAX_HB2_Web_Riya_19Jan22.jpg","https://cdn.shopclues.com/images/banners/2023/Jan/11/ShopcluesPCRefresh_Web_SYM_11Jan23.jpg"];

function randonBag(){
    let banner=document.getElementById("banner");
    banner.style.backgroundImage="url('https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg')"
    let index=0;
    setInterval(function(){
        banner.style.backgroundImage=`url(${bannerData[index]})`
        index+=1;
        if(index>=bannerData.length){
            index=0;
        }
    },2000);
}
randonBag()

// deals of the day
let dealsofday=document.getElementById("dealsofday");

window.addEventListener("load",()=>{
    gadgetsrenderdata()
    fetchandrenderdata()
    forbrandstore()
})

async function fetchandrenderdata(){
    let response=await fetch("http://localhost:3000/Homepage?_limit=6&_page=1");
    let res=await response.json();
    console.log(res)
    cartdata(res)
}
// function getdata(data){
//     let result=data.map((element)=>{
//         return cartdata(element.profile,element.name,element.price)
//     }).join("")
//     dealsofday.innerHTML=result;
// }

function cartdata(data){
    // let arr=[]
    // let data=`
    // <a id="ancor" href="#">
    //    <div class="imageblock">
    //         <div class="dealblock">
    //             <img src=${link} alt="">
    //         </div>
    //         <h2>${title}</h2>
    //         <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
    //         <span>${price}</span>
    //     </div>
    // </a>
    // `
    // return data; 

    data.forEach(element => {
        let ancortag=document.createElement("a");
        ancortag.setAttribute("id","ancor")
        ancortag.setAttribute("href","./checkout.html");
        let div1=document.createElement("div");
        div1.setAttribute("class","imageblock")
        let div2=document.createElement("div");
        div2.setAttribute("class","dealblock")
        let imgage=document.createElement("img");
        imgage.setAttribute("src",element.profile);
        div2.append(imgage)
        let h2=document.createElement("h2");
        h2.innerHTML=element.title;
        let span1=document.createElement("span")
        let icon=document.createElement("i");
        // icon.setAttribute("class","fa-solid fa-indian-rupee-sign")
        span1.append(icon)
        
        let span2=document.createElement("span")
        span2.innerHTML=element.price;
        div1.append(div2,h2,span1,span2);
        div1.addEventListener("click",()=>{
            // arr.push(element)
            localStorage.setItem("checkout",JSON.stringify(element))
        })
        ancortag.append(div1)

        dealsofday.append(ancortag)
    });
}
// for storing the gadgets
let gadgetdata=document.getElementById("storegadget")
async function gadgetsrenderdata(){
    let response=await fetch("http://localhost:3000/Homepage?_limit=6&_page=2");
    let res=await response.json();
    console.log(res)
    gadgetcartdata(res)
}
// function gadgetgetdata(data){
//     let result=data.map((element)=>{
//         return gadgetcartdata(element.profile,element.name,element.price)
//     }).join("")
//     gadgetdata.innerHTML=result;
// }

function gadgetcartdata(data){
    // let arr=[]
    // let data=`
    // <a id="ancor" href="./checkout.html">
    //    <div class="imageblock">
    //         <div class="dealblock" id="imagedealblock">
    //             <img src=${link} alt="">
    //         </div>
    //         <h2>${title}</h2>
    //         <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
    //         <span>${price}</span>
    //     </div>
    // </a>
    // `
    // let ancortag=document.getElementById("ancor");
    // ancortag.addEventListener("click",()=>{
    //     console.log("OK")
    // })

    data.forEach(element => {
        let ancortag=document.createElement("a");
        ancortag.setAttribute("id","ancor")
        ancortag.setAttribute("href","./checkout.html");
        let div1=document.createElement("div");
        div1.setAttribute("class","imageblock")
        let div2=document.createElement("div");
        div2.setAttribute("class","dealblock")
        div2.setAttribute("id","imagedealblock")
        let imgage=document.createElement("img");
        imgage.setAttribute("src",element.profile);
        div2.append(imgage)
        let h2=document.createElement("h2");
        h2.innerHTML=element.title;
        let span1=document.createElement("span")
        let icon=document.createElement("i");
        icon.setAttribute("class","fa-solid fa-indian-rupee-sign")
        span1.append(icon)
        
        let span2=document.createElement("span")
        span2.innerHTML=element.price;
        div1.append(div2,h2,span1,span2);
        div1.addEventListener("click",()=>{
            // arr.push(element)
            localStorage.setItem("checkout",JSON.stringify(element))
        })
        ancortag.append(div1)

        gadgetdata.append(ancortag)
    });
    // return data; 
};

let brandstore=document.getElementById("brandstore");
async function forbrandstore(){
    let response=await fetch("http://localhost:3000/Homepage?_limit=6&_page=7");
    let res=await response.json();
    storebrandData(res)
}

function storebrandData(data){
    // let arr=[];

    data.forEach(element => {
        let ancortag=document.createElement("a");
        ancortag.setAttribute("id","ancor")
        ancortag.setAttribute("href","./checkout.html");
        let div1=document.createElement("div");
        div1.setAttribute("class","imageblock")
        let div2=document.createElement("div");
        div2.setAttribute("class","dealblock")
        div2.setAttribute("id","branddealblock")
        let imgage=document.createElement("img");
        imgage.setAttribute("src",element.profile);
        div2.append(imgage)
        let h2=document.createElement("h2");
        h2.innerHTML=element.title;
        let span1=document.createElement("span")
        let icon=document.createElement("i");
        icon.setAttribute("class","fa-solid fa-indian-rupee-sign")
        span1.append(icon)
        
        let span2=document.createElement("span")
        span2.innerHTML=element.price1;
        div1.append(div2,h2,span1,span2);
        div1.addEventListener("click",()=>{
            // arr.push(element)
            localStorage.setItem("checkout",JSON.stringify(element))
        })
        ancortag.append(div1)

        brandstore.append(ancortag)
    });
}