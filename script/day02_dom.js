// dom = document object model
// 자바스크립트 = 객체지향언어
// bom = browser object model 웹브라우저의 기본 객체
let hellow ='hellow js';
// window.alert(hellow);
// window.prompt('이건뭘까?'); //텍스트 창이 뜸
// let qa = window.prompt('1+1?');
// window.alert('정답은 '+qa+'입니다.')
// let ox = window.confirm('자바스크립트는 객체지향언어다.'); 
//참,거짓을 나눠서 보여줌 //확인=ture(참), 취소=false(거짓)
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const price = document.getElementById('price');
const payBtn = document.getElementById('pay');
const login = document.getElementById('login');
const btn1 = document.getElementById('btn1');
console.log(btn1,login,payBtn,price);
btn1.style.color = 'red';

//클래스 객체 변수 생성하기
const li_last = document.getElementsByClassName('last')
const li_second = document.getElementsByClassName('second') 
const li_first = document.getElementsByClassName('first');
console.log(li_first,li_second,li_last);
console.log(li_first[0])
console.log(li_first[1])

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header')
const h1 = document.getElementsByTagName('h1')
const nav = document.getElementsByTagName('nav')
const aTag = document.getElementsByTagName('a') //두가지 이상 단어를 변수명으로 적용할때 카멜표기법
console.log(header,h1,nav,aTag)
console.log(aTag[0])
console.log(aTag[1])
console.log(aTag[2])

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header.innerHTML); //undefined (파일 찾지 못한다.)
console.log(header[0].innerHTML); //자식, 자손 읽기 //collection으로 인식하는게 아닌 정확하게 header의 자식자손을 인식
console.log('-------------------')
console.log(h1[0].innerHTML);
console.log(nav[0].innerHTML);
console.log(aTag[2].innerHTML);
console.log(li_first[0].innerTHML);
console.log(btn1.innerHTML);


h1[0].innerHTML = '로<br>고';
btn1.innerHTML = '전송';
aTag[1].innerHTML = ''; //빈문자열 = 문자열을 비운다.(삭제)

//style
h1[0].style.transform = 'rotate(10deg)';
nav[0].style.backgroundColor = 'lightblue';
nav[0].style.border = '2px solid pink';
aTag[0].style.color = 'black';
aTag[2].style.color = 'white';
btn1.style.background = 'pink';
btn1.style.border = 'none';
btn1.style.borderRadius = '10px';
login.style.background = 'linear-gradient(90deg,pink,lightblue)'
