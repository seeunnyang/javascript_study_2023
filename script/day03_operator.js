//자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`); // 앞에 a와b를 문자로 보여지게 하기 위해 하나씩 ${} 적용
console.log(a+'+'+b+'='+(a+b));
console.log('------------------------')
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('------------------------')
//연결연산자
//'문자'가 하나라도 들어가면 연결연산자가 됨
console.log('10'+10); //1010 연결연산자
console.log(10+10); //20 더하기연산자
console.log(typeof('10'+10)); //string
console.log(typeof(10+10)); //number
console.log('------------------------')
//복합연산자
let age = 20;
// age = age+1
age += 1 //복합대입연산자 , 위의 줄과 같은 식인데 줄여서 간편하게 씀
console.log(`${age}살`)
age -= 1 //age = age-1
console.log(age);
age *= 5 //age = age*5
console.log(age);
age /= 2 //age = age/2
console.log(age);
age %= 2 //age = age%2
console.log(age);
console.log('----------------------')
//복합대입연산자를 이용한 태그 생성방법
let cart_li = '<ul>' //빈 장바구니 (초기)
//참기름 1개 장바구니 담기
cart_li += '<li>참기름1개</li>'// cart_li = cart_li+'<li>참기름1개</li>';
//베이글 2개 장바구니 담기
cart_li += '<li>베이글2개</li>'
cart_li += '</ul>' //ul닫기
console.log(cart_li);
console.log('----------------------')
//태그생성메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart .contents');
cartNewLi.innerHTML = '<li>참기름 1개</li>';
cartNewLi.innerHTML += '<li>베이글 2개</li>';
console.log(cartNewLi, cart_contents);
cart_contents.appendChild(cartNewLi); //자식으로 넣겠다
