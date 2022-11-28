let question = document.querySelectorAll(".question-section")
let response = document.querySelectorAll(".question-section p")
let plus = document.querySelectorAll('.plus')

for(let i = 0; i<response.length;i++){
    question[i].addEventListener('click', ()=>{
        response[i].classList.toggle('none')
        if(response[i].classList.contains('none')){
            plus[i].textContent = '+'
        }else{
            plus[i].textContent = '-'
        }

        for(let j = 0; j<question.length;j++ ){
            if(j !== i){
                response[j].classList.add('none')
                plus[j].textContent = '+'
            }
        }
    })
}
