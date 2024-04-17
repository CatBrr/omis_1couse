let books=[
    {
        id:1,
        book_name:'book1',
        book_author:'de1',
        book_pages:10,
        book_in_stock:true
    },
    {
        id:2,
        book_name:'book2',
        book_author:'de1',
        book_pages:10,
        book_in_stock:true
    },
    {
        id:4,
        book_name:'book3',
        book_author:'ie1',
        book_pages:30,
        book_in_stock:false
    },
    {
        id:5,
        book_name:'book4',
        book_author:'dy1',
        book_pages:15,
        book_in_stock:false
    },
    {
        id:6,
        book_name:'book5',
        book_author:'de1',
        book_pages:50,
        book_in_stock:true
    }
]
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
let book_list_container=document.querySelector('.list-group')
let edit_button_id=-1
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
            fetch('./form.html').then(response=>{
                return response.text()
            }).then(form=>{
                /*const parser = new DOMParser()
                const  doc= parser.parseFromString(form,'text/html')
                doc.querySelector('#Books_name').value=books[edit_button_id].book_name*/
                modal_body.innerHTML=doc.body.outerHTML
            })
        })
        console.log(event.target.dataset.id);
    })
})
let delete_buttoms=document.querySelectorAll('.btn-delete')
delete_buttoms.forEach(btndelete=>{
    btndelete.addEventListener('click',event=>{
        console.log(event.target.dataset.id);
    })
})