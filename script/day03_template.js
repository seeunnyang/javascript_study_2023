//자바 스크립트 = 객체지향 언어
//객체구분 > 변수생성 > 변수활용 속성, 이벤트 ,메서드
//--------------getElement 객체 방법
const ulWrap = document.getElementById('wrap');
const liTag = document.getElementsByTagName('li');
const aTag = document.getElementsByTagName('a');
console.log(ulWrap, liTag, aTag);
console.log(liTag[0],liTag[1], liTag[2], liTag[3]); // li개별출력
console.log(aTag[0],aTag[1], aTag[2], aTag[3]); // a개별출력
console.log('------------------------------');
//-------------querySelector 객체 방법
const ulWrapQ = document.querySelector('#wrap');
const liTagQ = document.querySelector('li'); //첫번째 li
const liTagQA = document.querySelectorAll('li'); //li 묶음
const aTagQ = document.querySelector('a'); //첫번째 a
const aTagQA = document.querySelectorAll('a'); //a 묶음
console.log(ulWrapQ, liTagQ, liTagQA, aTagQ, aTagQA);
console.log(liTagQA[0], liTagQA[1], liTagQA[2], liTagQA[3]); // li개별출력
console.log(aTagQA[0], aTagQA[1], aTagQA[2], aTagQA[3]); // a개별출력
console.log('------------------------------');
//-------------querySelector 객체 방법2
// 태그가 무수히 중복되는 경우 css 선택자 처럼 쓸 수 있음
const liTagQA1 = document.querySelectorAll('#wrap li');
const aTagQA1 = document.querySelectorAll('#wrap a');
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)');
console.log(liTagQA1, aTagQA1, aTagQ1) ;
//--------------------------------------------
console.log('------------------------------');
console.log('li태그 변수 값은' + liTagQA[0]+'입니다!');
console.log('1+1='+(1+1));
console.log('7x4='+(7*4));
console.log(`li태그 변수 값은 ${liTagQA[0]}입니다!`);
console.log(`1+1=${1+1}`);
console.log(`7x4=${7*4}`);