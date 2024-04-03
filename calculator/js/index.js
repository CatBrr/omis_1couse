/*let btn = document.getElementById('mybtn')

btn.addEventListener('click', function(event){
    //console.log('you clicked the button');
    console.log(event);
})*/
let buttons=document.getElementsByClassName('btn')
let result=document.getElementById('frm_result')
let math = ['/','*','+','-']

Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', event=>{
        //console.log(event.target.innerText)
        let btn_title=event.target.innerText
        if (btn_title=='=') {
            calculate_result()
        }
        else if(btn_title=='CE'){
            empty_frm_result()
        }
        else{
            if (!check_math_symbol(btn_title)){
                print_frm_result(btn_title)
            }
        }
    })
})

function print_frm_result(text){
    result.value += text 
}
function empty_frm_result(){
    result.value = ''
}
function calculate_result(){
    let text_result =result.value
    empty_frm_result()
    print_frm_result(eval(text_result))
}
function check_math_symbol(new_symbol) {
    let pre_last_symbol=result.value.trim().substr(-1,2)
    return pre_last_symbol == new_symbol && math.includes(pre_last_symbol)
}

result.addEventListener('keydown', event=>{
    console.log(isNaN(event.key))
    if(event.key == '=' || event.key=='Enter'){
        calculate_result()
    }
    else if (isNaN(event.key) && !math.includes(event.key) || check_math_symbol(event.key)) {
        event.preventDefault()
    }
})
/*result.addEventListener('keypress', event=>{
    console.log('keypress')
})
result.addEventListener('keyup', event=>{
    console.log('keyup')
})*/