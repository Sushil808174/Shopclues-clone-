// here js is for only login popup

let btn = document.getElementById("signIn");
btn.addEventListener("click", () => {
  document.getElementById("overlay").classList.add("showoverlay");
  document.getElementById("loginform").classList.add("showloginform");
});
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  document.getElementById("loginform").classList.remove("showloginform");
  document.getElementById("overlay").classList.remove("showoverlay");
});

// ****************************************************************************

// here my login js start
let arr = JSON.parse(localStorage.getItem("register-Data")) || [];

let userLoginEmail = document.getElementById("email");
let userOtp = document.getElementById("otp");
let otpBtn = document.getElementById("otpBtn");
let appendSection = document.getElementById("inputpart");

otpBtn.addEventListener("click", () => {
  // console.log(userEmail.value)
  // var a = Math. floor(1000 + Math. random() * 9000);
  // alert(a)
  // if(Number(userOtp.value) === a){
  //     window.location.href="./admin.html"
  // }
  //   input.innerHTML = null;
});

// ****************************************************************************
// login section

document.getElementById("login").classList.add("logintext");
let login = document.getElementById("login");
login.addEventListener("click", () => {
  document.getElementById("login").classList.add("logintext");
  document.getElementById("register").classList.remove("registertext");
  document.getElementById("admin").classList.remove("admintext");

  let data = `
        <div class="inputemail">
        <input type="text" name="input" id="email" placeholder="Enter Your mobile number or email id">
        </div>
        <div class="inputemail">
        <input type="text" name="input" id="otp" placeholder="Enter OTP here">
        </div>
        <div class="otpBtn" id="otpBtn">Login via OTP</div>
        `;
  appendSection.innerHTML = data;
});

// register section
// ****************************************************************************

let register = document.getElementById("register");
register.addEventListener("click", () => {
  document.getElementById("register").classList.add("registertext");
  document.getElementById("admin").classList.remove("admintext");
  document.getElementById("login").classList.remove("logintext");
  let data = `
        <div class="inputemail">
        <input type="email" name="input" id="email" placeholder="Enter Your email id" required>
        </div>
        <div class="inputemail">
        <input type="number" name="input" id="mobile" placeholder="Enter Your mobile number">
        </div>
        <div class="inputemail">
        <input type="password" name="input" id="password" placeholder="Enter Your Password">
        </div>
        <div class="otpBtn-2" id="registerBtn">Register</div>
        `;
  appendSection.innerHTML = data;

  // let arr=JSON.parse(localStorage.getItem("register-Data")) || [];
  let userRegisterEmail = document.getElementById("email");
  let userRegisterMobile = document.getElementById("mobile");
  let userRegisterPassword = document.getElementById("password");
  let registerBtn = document.getElementById("registerBtn");

  registerBtn.addEventListener("click", () => {
    let obj = {
      email: userRegisterEmail.value,
      mobile: userRegisterMobile.value,
      password: userRegisterPassword.value,
    };

    let isthere = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].email === obj.email) {
        isthere = true;
        break;
      }
    }
    if (isthere === false) {
        if(obj.password.length!==10){
            alert("Incorrect Mobile Number")
        }else if(obj.email.length==0){
            alert("Please enter email id!")
        }else{
            arr.push(obj);
            localStorage.setItem("register-Data", JSON.stringify(arr));
            alert("Your registeration successful!!");
        }
    } else {
      alert("This Email id is already registered!");
    }
  });
});

// ****************************************************************************
// admin section

let admin = document.getElementById("admin");
admin.addEventListener("click", () => {
  document.getElementById("admin").classList.add("admintext");
  document.getElementById("register").classList.remove("registertext");
  document.getElementById("login").classList.remove("logintext");
  let data = `
        <div class="inputemail">
        <input type="email" name="input" id="adminemail" placeholder="Enter Your email id">
        </div>
        <div class="inputemail">
            <input type="password" name="input" id="password" placeholder="Enter Your Password">
        </div>
        <div class="otpBtn-1" id="register3">Register</div>
    `;
  appendSection.innerHTML = data;

  let userAdminEmail=document.getElementById("adminemail");
  let userAdminPassword=document.getElementById("password")
  let useradminregister=document.getElementById("register3")
  useradminregister.addEventListener("click",()=>{
    console.log(userAdminEmail.value)
    console.log(userAdminPassword.value)
  })
});
