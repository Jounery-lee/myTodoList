const photos = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
const backgroundphoto = document.createElement("img");
const photodiv = document.querySelector("#photodiv");
const randomphoto = Math.floor(Math.random() * photos.length);

photodiv.appendChild(backgroundphoto);
backgroundphoto.src = `css/image/${photos[randomphoto]}`

/*
const photos = ["modal.png","camping.jpeg"];
const randomphoto = Math.floor(Math.random() * photos.length);
여기까지는 같은데 나는 body태그를 갖고 와서 body태그에 css를 부여하는 방식으로 처리함.
이렇게 했을때 photos array가 복잡해서 보기가 안좋다. 이걸 해결 할 수 있다면 좋겠다.

니콜라스의 방식은 body태그를 가져오는게 아니고 JS에서 새로운 태그를 만들면서 시작함.
const bgImage = document.createElement("img");
              = <img> 생성됨

bgImage.src = `css/image/${randomphoto}`;
이건 <img src="css/image/modal.png or camping.jpeg">를 만드는것.

document.body.appendChild(bgImage);
이건 body태그 아래에 자식으로써 bgImage를 추가하는것. 
<body>
<img src="css/image/modal.png or camping.jpeg">
</body>
이렇게 되는거지. 둘다 맞는데 이렇게되면 h1, h2아래에 그림이 들어간다.
그러면 이제 position을 absolute로 잡고 width랑 height를 100%로하고 z-index를 -1로 하면 뒤로 가겠지.
근데 여기가 좀 불합리하다는 느낌? 
내껀 array가 불합리하다는 느낌?
니콜라스 버전이 더 좋네.

새로운 지식
appendChild()
createElement()
Math.floor
Math.round
Math.ceil
*/
