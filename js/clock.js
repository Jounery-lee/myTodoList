const showMeDate = document.getElementById("date");
const clock = document.getElementById("clock");

//setInterval(functionName, milleSecond);
//between time you set, browser operate function time by time.
//setTimeout(functionName, milleSecond);
//after time you set, browser do function onetime.
//new(Date); is time of now.

function gosecond(){
    const dateInfo = new Date();
    //const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //getMonth()가 0~11까지 숫자를 내뱉으니 월별 이름이 들어간 array를 만들어서 해결. 근데 별로 안 이쁜데 그냥 날짜로 해야지 +1하면 됨
    //함수변수 전역변수 사용시기를 아직 잘 모르겠다.
    // typeof new Date는 objet다. 뭐때문인지는 몰라도 그대로 사용이 안되니 const date로 정의해서 사용한다.
    // 그냥사용이 안되고 변수로 잡아줘야 아래처럼 사용이 되는 듯..
    //getDay는 일주일중 일~토까지 0~6으로 integar output해줌.. getDate를 써야함.
    const year = String(dateInfo.getFullYear()).padStart(2, "0"); 
    const month = String(dateInfo.getMonth()+1);
    const date = String(dateInfo.getDate()).padStart(2, "0");
    const hour = String(dateInfo.getHours()).padStart(2, "0");   
    const minute = String(dateInfo.getMinutes()).padStart(2, "0");
    const second = String(dateInfo.getSeconds()).padStart(2, "0");
    const ms = String(dateInfo.getMilliseconds()).padStart(2, "0");
    //String() 내용물을 string으로.
    //padStart(최대 글자 수, "빈칸은 이걸로채워줘");
    showMeDate.innerText = `${year}년 ${month}월 ${date}일 `;
    clock.innerText = ` ${hour}:${minute}:${second}`;
    };

    gosecond();
    setInterval(gosecond, 1000);

    //시계만들기 끝. 인터벌은 보이저엑스 사진바뀌는거 그런거 할 수 있겠다.
    //벡틱``으로 글쓰기가 나쁘지 않네. 



