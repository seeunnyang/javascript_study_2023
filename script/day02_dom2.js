//getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const first = document.getElementsByClassName('first');
const last = document.getElementsByClassName('last');
console.log(mainTag, hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
console.log(first[0], last[0])

//querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents'); //className 앞에.적용
const boxIdQ = document.querySelector('#box');//Id 앞에 #적용
const aTagQ = document.querySelectorAll('a');
const firstQ = document.querySelector('.first');
const lastQ = document.querySelectorAll('.last');
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ,);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);
console.log(firstQ, lastQ[0])

// querySeletor, querySeletorAll
// 객체가 2개 이상일 때 태그 작성 순서상 한개만 인식하고 싶다면
// = querySelector()
// 객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
// = querySelectorAll()