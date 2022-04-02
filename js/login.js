const loginform = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const welcomeText = document.querySelector("#welcome");
const logoutform = document.querySelector("#logoutform");
const logoutbutton = document.querySelector("#logoutform button")
const HIDDEN_CLASS = "hidden";
const USERNAME_LOCALSTORAGEKEY = "namekey"

function userLogin(event){
  event.preventDefault();
  const userName = loginInput.value;
  printwelcome(userName);
  localStorage.setItem(USERNAME_LOCALSTORAGEKEY, userName);
};
function printwelcome(userName){
  welcomeText.innerText = `${userName} 좋은 하루!`
  loginform.classList.add(HIDDEN_CLASS);
  logoutform.classList.remove(HIDDEN_CLASS);
}

const savedName = localStorage.getItem(USERNAME_LOCALSTORAGEKEY);
if(savedName === null){
  loginform.addEventListener("submit", userLogin);
}else{
  const userName = loginInput.value;
  printwelcome(savedName);
};

function userLogout(event){
  event.preventDefault();
  printLogin();
  localStorage.removeItem(USERNAME_LOCALSTORAGEKEY);
};
function printLogin(){
  loginform.classList.remove(HIDDEN_CLASS);
  logoutform.classList.add(HIDDEN_CLASS);
}

if(savedName !== null){
  logoutform.addEventListener("submit", userLogout)
}
















/////////////////////////////////////////////////////////////////////////////////////////////
//아래는 고민의 흔적..
// const loginform = document.querySelector("#loginform");
// const loginInput = document.querySelector("#loginform input");
// const welcome = document.querySelector("#welcome");
// const CLASS_HIDDEN = "hidden";
// const LOCALSTORAGEKEY_username = "username";

// function loginSubmit(event){
//   event.preventDefault()
//   const username = loginInput.value;
//   loginform.classList.add(CLASS_HIDDEN)
//   paintwelcome(username);
//   localStorage.setItem(LOCALSTORAGEKEY_username, username);
// };

// function paintwelcome(username){
//   const welcome = document.querySelector("#welcome");
//   welcome.classList.remove(CLASS_HIDDEN)
//   welcome.innerText = (` ${username}, 좋은 하루! 여유있는 하루!`);
// }

// const savedName = localStorage.getItem(LOCALSTORAGEKEY_username);

//   if(savedName === null){
//     loginform.classList.remove(CLASS_HIDDEN);
//     loginform.addEventListener("submit", loginSubmit);
//   }else{
//     paintwelcome(savedName);
//   };

//   const logoutform = document.querySelector("#logoutform");
//   const logoutbutton = document.querySelector("#logoutform button");

//   function userLogout(event){
//     event.preventDefault()
//     logoutform.classList.add(CLASS_HIDDEN);
//     loginform.classList.remove(CLASS_HIDDEN);
//     localStorage.removeItem(LOCALSTORAGEKEY_username);
//   };

//   logoutform.addEventListener("submit", userLogout);

// 로그아웃 만들기
// 1.폼에 붙어있는 login버튼이라 재활용이 어렵다. logoutbutton은 그냥 새로 만드는게 맞다.
// 2.그니까 그냥 logininput이랑 button이 사라지고 welcome이랑 logoutbutton이 생겨나면 되는것.
// 3.천천히 따져보면 다 만들 수 있음. 



/*
  name.classList.remove(CLASS_HIDDEN)
  name.innerText = ("Hi " + username + " Welcome!");
  //아 이게 이퀄 (=)인 이유는 object의 추가 또는 변경으로 여기면 된다.

  function loginSubmit(event){
  if(username === ""){
  console.log("이름을 적어 주세요");
  }else if(username.length > 10){
    console.log("10자아래로 작성해 주세요.");
  }else{
  console.log(username);
  const CLASS_HIDDEN = "hidden";
  name.innerText = ("Hi " + username + " Welcome!");
  //이게 이퀄 (=)인 이유는 object의 추가 또는 변경이라서..다..//
  name.classList.remove(CLASS_HIDDEN);
  loginform.classList.add(CLASS_HIDDEN);
  localStorage.setItem('username', username);
  }
}
  //여기 위까지 코드의 문제는 if안쪽에서는 localStorage가 작동을 안한다는 점이다.//
  //아래와 같이 해결한다고 하는데 그냥 위처럼 if를 안써도 된다.//
  if (typeof window !== 'undefined') {
      const username = loginInput.value;
      localStorage.setItem('username', username);
      console.log(typeof window)
    }
*/
