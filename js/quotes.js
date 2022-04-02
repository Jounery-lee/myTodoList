const quotes = [
  { quotes: "사랑이야말로 인생의 꽃이다.", author: "미상" },
  { quotes: "「 마음먹은 날이 길일(吉日) 그렇지 않은날은 전부 흉일(凶日)! 」",
    author: "토리코",
  },
];
const button = document.querySelector("#changebt");
const goodtext = document.querySelector("#quote span:first-child");
const whoWrite = document.querySelector("#quote span:last-child");
const random = quotes[Math.floor(Math.random() * quotes.length)];

goodtext.innerText = random.quotes;
whoWrite.innerText = random.author;

