let questions_list=document.getElementById('questions_list')
let questions = [
    {
        id:1,
        question:'question 1',
        right_answer:'YES',
        img: 'https://picsum.photos/id/12/250' //false
    },
    {
        id:2,
        question:'question 2',
        right_answer:'NO',
        img: '' //false
    },
    {
        id:3,
        question:'question 3',
        right_answer:'YES',
        img: 'https://picsum.photos/id/33/250' //false
    },
    {
        id:4,
        question:'question 4',
        right_answer:'NO',
        img: '' //false
    },
    {
        id:5,
        question:'question 5',
        right_answer:'YES',
        img: 'https://picsum.photos/id/63/250' //false
    }
]
console.log(get_q_by_id(3));
/* question_id answer_clicked */
let results=[]
function create_li_element(text,is_active=false){
    let new_li=document.createElement('li')
    new_li.classList.add('list-group-item')
    new_li.innerHTML=text
    if (is_active) {new_li.classList.add('active')}
    //console.log(new_li);
    return new_li
}


let activeID=1
questions.forEach(question_i=>{
let is_active=false
if (question_i.id===activeID){
    is_active=true
}
questions_list.innerHTML+=create_li_element(question_i.question,is_active).outerHTML
})

function get_q_by_id(id){
    return questions_list.find(item =>{
        return item.id==id
    })
}
/*question right panel*/
let current_q=get_q_by_id(1)
let question= document.getElementById('question')
let q_img= document.querySelector('#question_image > img')