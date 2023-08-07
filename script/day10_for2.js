//ES6 for DOM 쉽게 관리할 수 있는 for ~ in ~ of ~ Each
const study = ['html','css','javascript','design']
//기본 fot 문법(for변수생성;조건식;증감식){실행결과}
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//for ~in 문법(DOM index numbe)
for(let i in study){
    console.log(i)
}
//for ~of 문법(DOM 객체)
for(let i of study){
    console.log(i)
}

console.log('---------------------------')
//변수생성
const boxA = document.querySelectorAll('.box a')
for(let i in boxA){
    console.log(i) //DOM index+기본속성 출력
}//for in boxA end
for(let i of boxA){
    console.log(i) //DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.backgroundColor = 'aqua'
    })//mouseover end
    i.addEventListener('mouseout',function(){
        i.style.backgroundColor = 'coral'
        i.style.color = 'white'
    })//mouseout end
    //a클릭 했을 때 팝업창 '준비중입니다' 만들기
    i.addEventListener('click',function(){
        window.alert('준비중입니다!')
    })//click end
}//for of boxA end
//in보다는 of를 많이 씀. 객체대상 자체를 담을 수 있기 때문

//for ~ in 인덱스 위주 제어
//for ~ of 객체 위주 제어
//forEach 인덱스, 객체 , 배열 동시제어
const num = [20, 21, 22, 23, 24, 25]
/*
    객체.forEach(function(객체매개변수, 인덱스매개변수, 배열매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    })
    * 매개변수명은 의미만 맞게 자유롭게 설정 가능.
    * 매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의!
    * 매개변수 필요한 대상만 작성가능
*/
//num.forEach(function(t, i, a){})
//num.forEach(function(dom, in, ar){}) //매개변수 이름은 알아볼수있게 자유롭게 작성
num.forEach(function(target, index, array){
    console.log(target)
    console.log(`index=${index}`)
    console.log(`array=${array}`)
    console.log('-----------------------')
    /* target.addEventListener('mousedown',function(){
        target.style.color = 'red'
    })에러뜸 */
})