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
    // gadgetsrenderdata()
    fetchandrenderdata()
})

async function fetchandrenderdata(){
    let response=await fetch("http://localhost:3000/Homepage?_limit=6&_page=1");
    let res=await response.json();
    console.log(res)
    getdata(res)
}
function getdata(data){
    let result=data.map((element)=>{
        return cartdata(element.profile,element.name,element.price)
    }).join("")
    dealsofday.innerHTML=result;
}

function cartdata(link,title,price){
    let data=`
    <a id="ancor" href="#">
       <div class="imageblock">
            <div class="dealblock">
                <img src=${link} alt="">
            </div>
            <h2>${title}</h2>
            <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
            <span>${price}</span>
        </div>
    </a>
    `
    return data;

    
}
// for storing the gadgets
let gadgetdata=document.getElementById("storegadget")
async function gadgetsrenderdata(){
    let response=await fetch("http://localhost:3000/Homepage?_limit=6&_page=2");
    let res=await response.json();
    console.log(res)
    getdata(res)
}
function gadgetgetdata(data){
    let result=data.map((element)=>{
        return cartdata(element.profile,element.name,element.price)
    }).join("")
    gadgetdata.innerHTML=result;
}