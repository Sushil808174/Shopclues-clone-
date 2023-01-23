// // here js is for only login popup

let btn = document.getElementById("signIn");
// btn.addEventListener("click", () => {
//   document.getElementById("overlay").classList.add("showoverlay");
//   document.getElementById("loginform").classList.add("showloginform");
// });
// let closeBtn = document.getElementById("close");
// closeBtn.addEventListener("click", () => {
//   document.getElementById("loginform").classList.remove("showloginform");
//   document.getElementById("overlay").classList.remove("showoverlay");
// });

// // ****************************************************************************

// // here my login js start
// let arr = JSON.parse(localStorage.getItem("register-Data")) || [];

// let userLoginEmail = document.getElementById("email");
// let userOtp = document.getElementById("otp");
// let otpBtn = document.getElementById("otpBtn");
// let appendSection = document.getElementById("inputpart");

// otpBtn.addEventListener("click", () => {
//   if (arr.length === 0) {
//     alert("No User Till Now");
//     return;
//   }
//   let obj = {
//     email: userLoginEmail.value,
//     password: userOtp.value,
//   };
//   let flag = true;
//   arr.forEach(function (el) {
//     if (el.email === obj.email && el.password === obj.password) {
//       flag = false;
//       localStorage.setItem("signin", JSON.stringify(el));
//       alert("sign in Sucessfull");
//       window.location.href = "index.html";
//     }
//   });
//   if (flag === true) {
//     alert("user not Exist");
//   }
// });

// // ****************************************************************************
// // login section

// document.getElementById("login").classList.add("logintext");
// let login = document.getElementById("login");
// login.addEventListener("click", () => {
//   document.getElementById("login").classList.add("logintext");
//   document.getElementById("register").classList.remove("registertext");
//   document.getElementById("admin").classList.remove("admintext");

//   let data = `
//         <div class="inputemail">
//         <input type="text" name="input" id="email" placeholder="Enter Your email id">
//         </div>
//         <div class="inputemail">
//         <input type="text" name="input" id="otp" placeholder="Enter your password here">
//         </div>
//         <div class="otpBtn" id="otpBtn">Login via email id or mobile no ----</div>
//         `;
//   appendSection.innerHTML = data;
//   let userLoginEmail = document.getElementById("email");
//   let userOtp = document.getElementById("otp");
//   let otpBtn = document.getElementById("otpBtn");
//   let appendSection = document.getElementById("inputpart");
//   otpBtn.addEventListener("click", () => {
//     if (arr.length === 0) {
//       alert("No User Till Now");
//       return;
//     }
//     let obj = {
//       email: userLoginEmail.value,
//       password: userOtp.value,
//     };
//     let flag = true;
//     arr.forEach(function (el) {
//       if (el.email === obj.email && el.password === obj.password) {
//         flag = false;
//         localStorage.setItem("signin", JSON.stringify(el));
//         alert("sign in Sucessfull");
//       }
//     });
//     if (flag === true) {
//       alert("user not Exist");
//     }
//   });
// });

// // register section
// // ****************************************************************************

// let register = document.getElementById("register");
// register.addEventListener("click", () => {
//   document.getElementById("register").classList.add("registertext");
//   document.getElementById("admin").classList.remove("admintext");
//   document.getElementById("login").classList.remove("logintext");
//   let data = `
//         <div class="inputemail">
//         <input type="email" name="input" id="email" placeholder="Enter Your email id" required>
//         </div>
//         <div class="inputemail">
//         <input type="text" name="input" id="mobile" placeholder="Enter Your mobile number">
//         </div>
//         <div class="inputemail">
//         <input type="password" name="input" id="password" placeholder="Enter Your Password">
//         </div>
//         <div class="otpBtn-2" id="registerBtn">Register</div>
//         `;
//   appendSection.innerHTML = data;

//   // let arr=JSON.parse(localStorage.getItem("register-Data")) || [];
//   let userRegisterEmail = document.getElementById("email");
//   let userRegisterMobile = document.getElementById("mobile");
//   let userRegisterPassword = document.getElementById("password");
//   let registerBtn = document.getElementById("registerBtn");

//   registerBtn.addEventListener("click", () => {
//     let obj = {
//       email: userRegisterEmail.value,
//       mobile: userRegisterMobile.value,
//       password: userRegisterPassword.value,
//     };

//     let isthere = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].email === obj.email) {
//         isthere = true;
//         break;
//       }
//     }
//     if (isthere === false) {
//       if (obj.mobile.length !== 10) {
//         alert("Incorrect Mobile Number");
//       } else {
//         arr.push(obj);
//         localStorage.setItem("register-Data", JSON.stringify(arr));
//         alert("Your registeration successful!!");
//       }
//     } else {
//       alert("This Email id is already registered!");
//     }
//   });
// });

// // ****************************************************************************
// // admin section

// let admin = document.getElementById("admin");
// admin.addEventListener("click", () => {
//   document.getElementById("admin").classList.add("admintext");
//   document.getElementById("register").classList.remove("registertext");
//   document.getElementById("login").classList.remove("logintext");
//   let data = `
//         <div class="inputemail">
//         <input type="email" name="input" id="adminemail" placeholder="Enter Your email id">
//         </div>
//         <div class="inputemail">
//             <input type="password" name="input" id="password" placeholder="Enter Your Password">
//         </div>
//         <div class="otpBtn-1" id="register3">Register</div>
//     `;
//   appendSection.innerHTML = data;

//   const userlogin = "http://localhost:3000/ragister";
// let loginUserUsername = document.getElementById("adminemail");
// let loginUserPassword = document.getElementById("password");
// let loginUserButton = document.getElementById("ragister3");

// loginUserButton.addEventListener('click',async function(){
//   let userName = loginUserUsername.value;
//   let password = loginUserPassword.value;

//   let userObj = {
//     username: userName,
//     password: password,
//   }

//   try{
//     let res = await fetch(userlogin,{
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(userObj)
//     })
//     // let data = await res.json();
//     // let userAuthToken = data.accessToken;
//     // localStorage.setItem("localAccessToken", data.accessToken); 
//     alert('user successfully logged in.')
//     window.location.href='./admin1.html'
//   }catch (error) {
//     alert('Err.', JSON.stringify(error))
//   }
//   console.log("OLK")
// })
// });let btn = document.getElementById("btn");
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

otpBtn.addEventListener('click',()=>{
  if(arr.length===0){
    alert('No User Till Now')
    return
  }
  let obj ={
    email: userLoginEmail.value,
    password:userOtp.value,
  }
  let flag = true;
  arr.forEach(function(el){
    if(el.email===obj.email && el.password === obj.password){
      flag = false;
      localStorage.setItem('signin',JSON.stringify(el));
      alert('sign in Sucessfull')
      window.location.href='index.html'
    }
  })
  if(flag===true){
    alert('user not Exist')
  }
})


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
        <input type="text" name="input" id="otp" placeholder="Enter Your Password here">
        </div>
        <div class="otpBtn" id="otpBtn">Login</div>
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
        <div class="otpBtn-1" id="ragister3">Register</div>
    `;
  appendSection.innerHTML = data;
  const userlogin = "http://localhost:3000/ragister";
let loginUserUsername = document.getElementById("adminemail");
let loginUserPassword = document.getElementById("password");
let loginUserButton = document.getElementById("ragister3");

loginUserButton.addEventListener('click',async function(){
  let userName = loginUserUsername.value;
  let password = loginUserPassword.value;

  let userObj = {
    username: userName,
    password: password,
  }

  try{
    let res = await fetch(userlogin,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userObj)
    })
    // let data = await res.json();
    // let userAuthToken = data.accessToken;
    // localStorage.setItem("localAccessToken", data.accessToken); 
    alert('user successfully logged in.')
    window.location.href='admin1.html'
  }catch (error) {
    alert('Err.', JSON.stringify(error))
  }
})

});


