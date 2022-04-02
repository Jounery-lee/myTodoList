const toDoForm = document.getElementById("todoform");
const whatToDo = document.querySelector("#todoform input")
const ul = document.querySelector("#toDoList");

//const toDos = []
let toDos = []
const TODOS_KEY = "todos"

function localStorageset(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function filtering(item){
    return item.id !== li.id;
}
function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(event.target.parentElement.innerText);
    console.log(li.id);
    console.log(typeof li.id)
    //이거 백번더봐도 까먹을듯 정리하자면
    //EventListener에 붙은 function의 경우 첫번째 arguement는 일어난 그 event를 가리키게 된다.
    //즉 일어난 event에 대한 정보를 얻을 수 있다는것. 
    //지금은 event에 대한 정보만으로는 모자라니 타겟을 찾고(button) 그 타겟의 부모태그(li)를 찾아서 지칭한다.
    //그럼 부모태그를 지칭할 수 있게 되었으니 컨트롤(없애기"remove")할 수 있다.
    li.remove();
    //deleteTarget.classList.add(CLASS_HIDDEN);이건 내가 한것
    //deleteTarget.remove(); 이것도 됨. 이게 좀 더 적절한듯. 함수의 의미상.. 휴.. 뭐든 괜찮은건지 아님 적절하게 쓰는게 좋은건지.
    
    //savedtoDos.filter(filtering);
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    //toDos를 toDos.filter하면 나오는 새로운 array로 교체하라 이말이란다. 
    // todo.id는 number다. li.id는 string다 이건 typeof해보면 앎. 그러니까 parseInt해야지 비교 가능.
    localStorageset();
    //마지막으로 로컬에 저장까지 해 줘야 됨.
    //toDo 만들기는 정말 어렵구나. 꼭 재탕해야한다!!
}

function printTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button") 
    button.innerText = '❌';
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click", deleteTodo);
    //왜 여기들어있지? button이 함수내에서 정의되어있어서 그런듯.
    toDos.push(newTodo);
    localStorageset();
}

function enterWhatToDo(event){
    event.preventDefault();
    const newTodo = whatToDo.value;
    const newTodoObj = {text:newTodo,
                        id:Date.now(),};
    whatToDo.value ="";
    printTodo(newTodoObj);
    }

toDoForm.addEventListener("submit", enterWhatToDo);

const savedtoDos = localStorage.getItem(TODOS_KEY);
if(savedtoDos !== null){
    const parsedtoDos = JSON.parse(savedtoDos);
    parsedtoDos.forEach(printTodo);
    //parsedtoDos.forEach(printTodo);
    //parsedtoDos.forEach(functionname)
    //   array의   각 아이템에대해(함수를 실행해라).
    //이경우 위에 함수까지 정의 해 줘야한다. 화살표함수(arrow function)라는 다른 방식도 있다.
    //parsedtoDos.forEach((item) => console.log("say hello" + item)); 이렇게.
    //두가지 방법중 니콜라스의 방법으로 하면 계속 array가 초기화 된다 이유는 const toDos가 계속 빈 array로 초기화되기 때문인데
    //내가 쓴 방법(따로 함수 정의하기)은 이상하게 toDos가 초기화가 안된다. 이유는 모른다.
    //일단 니콜라스 방법으로 진행하면 초기화가 되기 때문에 toDos를 이전에 쓰던 toDos로 재정의 해야한다.
    //모르겠음 한번 더 보라고; 몇번 더 복습해야 알게 될듯.
    toDos = parsedtoDos;
}

/*
해야할 일 목록   /////////////////// 더 좋은방법

1.입력했을때 새로고침하는거 막기
2.입력한 값을 로컬스토리지에 저장하기 //// 그냥 입력한 값을 하나하나 li태그 안에 넣기
3.입력한 값을 아래에 적기
4.삭제버튼 만들기
5.체크버튼? 만들기? 
6.체크버튼이 submit이랑 동조해서 hide시키기.

놓친 해야할 일
1.submit후 value삭제
2.submit 할때 리스트 생성이 아니고 submit할때마다 print하는 function을 실행시켜서 반복실행이 되도록.


하면서 막힌 것 궁금한 것
1.localstorage에 여러개를 저장하고 불러오는 법. 
array를 이용하나?

2.딜리트를 누르면 체크박스도 사라지게끔 했는데 한번 더 섭밋했을때 체크가 해제되어있으면 좋겠다.

3.const가 함수 밖에있는거 안에있는거의 차이를 잘 모르겠다. 계속 막히네.


filter 함수를 배웠다.
우리는 어떤 array에서 한가지 항목을 삭제할 때 실제로 삭제하는게 아니고 제외할 item이 빠진 새로운 array를 만드는거라고 생각해야 함.
function filtering(item){ return item!==3 };
[1,2,3,4,5].filter(filtering);
filter라는 함수는 foreach와 같이 ()안의 함수를 모든 item에다가 실행해 준다. (비슷한걸로 addEventListener가 있음. 일어난 이벤트에대해 바로 접근 가능)
그리고 filter는 들어온 item의 결과 return이 true면 보내주고 false면 삭제해 버린다.

한번더 
const array = [김밥, 바나나, 국밥];
fucntion filtering(food){ return food !==바나나 };
array.filter(filtering); 
array = [김밥, 국밥]; 이렇게 된다는 거임.
*/