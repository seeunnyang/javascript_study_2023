//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다!
//1. 생성 : function 함수명 (매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(str){ //접속 회원 맞춤형 인사
    console.log(`${str}님 어서오세요!`)
}//생성함수 end
func1('홍길동')
func1('abc1234')
//------------------------------------------------------------------
//함수 기능 : 리턴(return)함수결과값 외부로 반환명령
function func2(a){
    return a+1 //리턴활용 함수 결과값만 외부로 반환
}
func2(50) //함수결과값을 출력하는 메서드가 없어 출력XX
console.log(func2(50)) //함수결과를 호출앞 메서가드가 출력OO //콘솔출력
/* window.alert(func2(100)) */ //팝업출력
document.write(func2(10)) //화면출력
//------------------------------------------------------------------
function func3(a, b){
    return a*b //함수 내 return 1개 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
//------------------------------------------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10))
//------------------------------------------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //10+20 = 30   //(+=) unm1기존값에 추가대입
    num2 = a+b //20제거, 2+4 = 6   //(=) num2기존값 버리고 대입
    num1 += num2 //30+6 = 36   //(+=) unm1기존값에 추가대입
    return num1 // 36 외부반환
}
console.log(func5(2,4)) //36 함수호출
//------------------------------------------------------------------
const txtInput = document.querySelectorAll('.box .txt') //css 선택자 작성하듯 (부모 띄고 자식)
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow') //노랑
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue') //파랑
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2], 'pink') //분홍
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target, color){
    return target.style.backgroundColor = color
}
//함수는 생성만 되면 호출 작성 위치가 위든 아래든 상관없음!!
//------------------------------------------------------------------
//관심상품, 알림성정 이미지에 마우스를 올렸을 때
//off -> on 이미지 변경
//마우스를 나갔을 때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    // likeImg.src = './images/heart_on.png' //이미지에 마우스올리면 검은하트이미지로 바끰
    onOff(likeImg, 'heart', 'on')
})
likeImg.addEventListener('mouseout',function(){
    // likeImg.src = './images/heart_off.png' //이미지에 마우스떼면 다시 빈하트이미지로 바끰
    onOff(likeImg, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    // ideaImg.src = './images/idea_on.png' //이미지에 마우스올리면 검은하트이미지로 바끰
    onOff(ideaImg, 'idea', 'on')
})
ideaImg.addEventListener('mouseout',function(){
    // ideaImg.src = './images/idea_off.png' //이미지에 마우스떼면 다시 빈하트이미지로 바끰
    onOff(this, 'idea', 'off') //this=현재 이벤트 적용대상(이렇게 적어도 같은값이 적용됨!!) 
})
function onOff(target,name,status){
    return target.src = `./images/${name}_${status}.png`
}