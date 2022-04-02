function onGeoOk(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const API_KEY = "67d9aaf5dfac46cd3f071bb225774e60"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    console.log(position);
    console.log("니가사는 곳은 바로 " , latitude , longitude);
    console.log(URL);
}
function onGeoError(){
    alert("where are you?")
}


//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//현재 위치를 브라우저를 통해 알게 해주는 func. 괄호안에는 (모든게 잘 되었을때 실행 될 함수, 에러났을때 실행 될 함수)가 필요함.
//이걸로 지금 위도 경도를 찾아냈다. 이걸 입력하면 위치를 찾아내서 날씨를 가져오는 API?뭐 그런걸 쓰겠지.
//API 페치 등등 쓰는데 대충 넘어가는군. 이건 담에 한다. 앞부분까지만 복습한번 하자.