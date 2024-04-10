google.charts.load('current', {'packages':['bar']})
let questions_list=document.getElementById("questions_list")
let btn_no= document.getElementById("btn_no")
let btn_yes= document.getElementById("btn_yes")
let btn_shown_chart= document.getElementById("btn_shown_chart")
let questions = [
    {
        id:1,
        question:"question 1",
        right_answer:"YES",
        img: "https://picsum.photos/id/12/250" //false
    },
    {
        id:2,
        question:"question 2",
        right_answer:"NO",
        img: "" //false
    },
    {
        id:3,
        question:"question 3",
        right_answer:"YES",
        img: "https://picsum.photos/id/33/250" //false
    },
    {
        id:4,
        question:"question 4",
        right_answer:"NO",
        img: "" //false
    },
    {
        id:5,
        question:"question 5",
        right_answer:"YES",
        img: "https://picsum.photos/id/63/250" //false
    }
]
/* question_id answer_clicked 
['Copper', 8.94, '#b87333'], */
let results=[
    /*{
        question_id:1,
        yes:1,
        no:0
    }*/
]
btn_shown_chart.addEventListener("click", event=>{
    if(results.length==questions.length){
        let charwidthdata= drawChart(parse_results_google_charts())
        google.charts.setOnLoadCallback(charwidthdata);
    }
    else{
        let modal=document.getElementById("exampleModal")
        modal.querySelector("#exampleModalLabel").innerText ="Info"
        modal.querySelector("#mdl_info_body").innerText ="Not all questions have been answered!"
        const mdl_info = new bootstrap.Modal('#exampleModal',{})
        mdl_info.show()
    }
})
function drawChart(customData) {
    console.log(customData);
  var data = google.visualization.arrayToDataTable(customData);

  var options = {
    chart: {
      title: 'Results'
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
btn_no.addEventListener("click", event=>{
    console.log(activeID);
    save_answer(activeID, "NO");
})
btn_yes.addEventListener("click", event=>{
    console.log(activeID);
    save_answer(activeID, "YES");
})
function parse_results_google_charts(){
    let data =  [
        ['Question id', 'Answers Yes', 'Answers No']
    ];
    if (results.length > 0) {
        results.forEach(result=>{
            data.push([result.question_id,result.yes,result.no])
        })
    }
    return data
    
}
function save_answer(question_id, answer){
    if ( results.length==0) {
        results.push({
            question_id:question_id.toString(),
            yes: answer.toUpperCase() == "YES" ? 1 : 0,
            no: answer.toUpperCase() == "NO" ? 1 : 0
        })
    }
    else{
        //SAVE EXISTING RESULT
        let is_result_found=false
        results.forEach((result, index)=>{
            if(result.question_id == question_id){
                if(answer.toUpperCase() == "NO"){
                    result.no +=1
                }else if(answer.toUpperCase() == "YES"){
                    result.yes +=1
                }
                is_result_found=true
            }
        })
        //save additional result for question
        if (is_result_found == false) {
            results.push({
                question_id:question_id.toString(),
                yes: answer.toUpperCase() == "YES" ? 1 : 0,
                no: answer.toUpperCase() == "NO" ? 1 : 0
            })
        }
    }
}
/*lists questions */
function create_li_element(text,is_active=false){
    let new_li=document.createElement("li")
    new_li.classList.add("list-group-item")
    new_li.innerHTML=text
    if (is_active) {new_li.classList.add("active")}
    //console.log(new_li);
    return new_li
}


let activeID=1
function draw_question_list(){
    questions_list.innerHTML=""
    questions.forEach(question_i=>{
    let is_active=false
    if (question_i.id===activeID){
        is_active=true
    }
    let li = create_li_element(question_i.question, is_active)
    li.setAttribute("data-id", question_i.id)
    questions_list.innerHTML += li.outerHTML
})

}
/*get by id*/
function get_q_by_id(id){
    return questions.find(item => {
        return item.id==id
    })
}
/*question right panel*/
function draw_a_question(){
    let current_q=get_q_by_id(activeID)
    let question= document.getElementById("question")
    let q_img= document.querySelector("#question_image")
    question.innerText=current_q.question
    if(current_q.img.trim().length !=0){
        let img = document.createElement("img")
        img.src = current_q.img
        q_img.innerHTML=img.outerHTML
    }
    else{
        q_img.innerHTML=""
    }
}
draw_question_list()
draw_a_question()
function remove_active_list(){
    questions_list.querySelectorAll (".list-group-item")
    .forEach(item => {
        item.classList.remove("active")
    })
}

questions_list.querySelectorAll (".list-group-item")
    .forEach(item => {
        console.log(item);

            item.addEventListener("click", event => {
                remove_active_list()
                activeID = event.target.dataset.id
                event.target.classList.add("active")
                draw_a_question()
                console.log(event.target.dataset.id)
            })
    })