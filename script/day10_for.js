//for
//0~4 반복문
for(let i=0; i<=4; i++){
    console.log(i)
}
console.log('---------------------------')
// 변수(li*4한번에 변수 만들기)
const li = document.querySelectorAll('.test li')
console.log(li, li[0], li[1])//li변수 하나씩 입력해서 불러오기
for(let i=0; i<li.length; i++){
    console.log(li[i]) //li변수 한번에 불러오기
    li[i].style.backgroundColor = 'yellow' //모든 li의 배경색 적용
    //홀수 li 노랑 //짝수 li 아쿠아
    if(i%2==1){
        li[i].style.backgroundColor = 'yellow'
    }else{
        li[i].style.backgroundColor = 'lightblue'
    }
}
console.log('---------------------------')
//다중 for 
for(let i=0; i<2; i++){ //0 > 1 까지 2번 반복문
    console.log(i)
    for(let j=1; j<6; j++){//1~5까지 5번 반복문
        console.log(`j=${j}`)
    }
}
console.log('---------------------------')
//ul-li*3-span*2
/* let ulTag = document.createElement('ul')
const answer1 = document.querySelector('.answer1')
console.log(ulTag, answer1)
for(let i=0; i<3; i++){//1단 for li*3
    ulTag.innerHTML +=`<li>li${i+1}`//+1처리해서 1부터 출력되게하기
    for(let j=0; j<2; j++){//2단 for span*2
        ulTag.innerHTML += `<span>span${j+1}</span><br>`;//줄바꿈처리
    }
    ulTag.innerHTML += `<li>`;
}
answer1.appendChild(ulTag)
console.log(ulTag) */
let ulTag = document.createElement('ul')
let liTag = document.createElement('li')
const answer1 = document.querySelector('.answer1')
console.log(ulTag, answer1, liTag)
for(let i=0; i<3; i++){//1단 for li*3
    liTag = document.createElement('li')
    liTag.innerHTML += `li${i+1}` //(+=)복합연산자를 쓰면 
    for(let j=0; j<2; j++){//2단 for span*2
        liTag.innerHTML += `<span>span${j+1}</span><br>`;//줄바꿈처리
    }
    ulTag.appendChild(liTag)//appendChild=집어넣기 //하나만들때마나 삽입하는구조
}
answer1.appendChild(ulTag)
console.log(ulTag)
//innerHTML 작성은 가장 마지막에 속한 내용 = inline or img등
//태그구성의 열고닫는형식을 제대로 인식하지 못함