
function create_el(options={}){
    let el=document.createElement(options.tag_name)
    if(options.hasOwnProperty('class')&&Array.isArray(options.class)){
        options.class.forEach(class_name=>{
            el.classList.add(class_name)
        })
    }
    if(options.hasOwnProperty('attributes')&&Array.isArray(options.attributes)){
        options.attributes.forEach(attribute=>{
            let att =Object.entries(attribute)
            el.setAttribute(att[0][0],att[0][1])
        })
    }
    el.innerText=options.title
    return el
}
function refresh_books_list(){
    let book_list_container=document.querySelector('.list-group')
    book_list_container.innerHTML=''
    fetch('http://localhost:80/books')
    .then(res=>res.json())
    .then(books=>{
        books.forEach(book=>{
            let li=create_el({
                id:book.id,
                tag_name:'li',
                class:['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'],
                title:book.book_name,
            })
            let button_container=create_el({
                tag_name:'div'
            })
            let btn_delete=create_el({
                title:'delete',
                class:['btn', 'btn-danger','btn-delete','m-1'],
                tag_name:'div',
                attributes:[{'data-id':book.id}]
            })
            let btn_edit=create_el({
                title:'edit',
                class:['btn', 'btn-primary','btn-edit','m-1'],
                tag_name:'div',
                attributes:[{'data-id':book.id}]
            })
            button_container.innerHTML=btn_delete.outerHTML+btn_edit.outerHTML
            li.innerHTML+=button_container.outerHTML
            book_list_container.innerHTML+=li.outerHTML
        })
        let edit_button_id=-1
        let edit_buttoms=document.querySelectorAll('.btn-edit')
        edit_buttoms.forEach(btnEdit=>{
            btnEdit.addEventListener('click',event=>{
                edit_button_id=event.target.dataset.id
                const myModalEl = document.getElementById('exampleModal')
                const altModal= new bootstrap.Modal(myModalEl,{})
                altModal.show(myModalEl)
                myModalEl.addEventListener('shown.bs.modal', event => {
                    console.log('modal is shown');
                    let modal_body= myModalEl.querySelector('#modal-body')
                    let modal_title= myModalEl.querySelector('#exampleModalLabel')
                    modal_title.innerText='Edit book'
                    fetch('form.html').then(response=> response.text())
                    .then(form=>{
                        modal_body.innerHTML=form
                        fetch('http://localhost:80/book/'+edit_button_id)
                        .then(res=>res.json())
                        .then(data=>{
                            let forma= document.getElementById('frmBook')
                            forma.elements.Books_name.value=data.book_name
                            forma.elements.Books_author.value=data.book_author
                            forma.elements.Books_pages.value=data.book_pages
                            forma.elements.book_in_stock.checked=data.book_in_stock
                            /*Array.from(forma.elements).forEach(input => {
                                input.value=books[edit_button_id].book_name
                            })*/
                        })
                    })
                })
                console.log(event.target.dataset.id);
            })
        })
        let delete_buttoms=document.querySelectorAll('.btn-delete')
        delete_buttoms.forEach(btndelete=>{
            btndelete.addEventListener('click',event=>{
                console.log(event.target.dataset.id);
                fetch('http://localhost:80/books/delete/'+event.target.dataset.id, {
                    method: 'DELETE',
                    headers:{
                        'Content-Type': 'application/json'
                        }
                })
                .then(res=>res.json())
                .then(delete_result=>{
                    if(delete_result.result==' deleted OK'){
                        refresh_books_list()
                    }
                })
            })
        })
    })

}
refresh_books_list()
let btn_save= document.getElementById('btn_action')
btn_save.addEventListener('click', event => {
    let form = document.getElementById('frmBook')
    //let current_form= new FormData(form)
    let tmp_form_data=[]
    Array.from(form.elements).forEach(el=>{
        tmp_form_data[el.name]=el.value
    })
    fetch('http://localhost/book/edit', {
        method: 'POST',
        body: JSON.stringify(
            Object.assign({}, tmp_form_data)
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=> res.json())
    .then(data => {
        console.log(data);
        refresh_books_list()
    })
})

