import { log } from "console";
import { IBook } from "./IBook"
import { exit } from "process";

//const express=require('express')
const  express = require('express');
const server= express()
const cors=require('cors')
server.use(cors())
server.use(express.json({type:'*/*'}))

let books:IBook[]=[
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

server.get('/',(req,res)=>{
    res.send('Howdie world')
    
})
server.get('/books',(req,res)=>{
    res.send(books)
    
})
server.delete('/books/delete/:id',(req,res)=>{
    console.log('id='+req.params.id);
    books.forEach((book, index)=>{

    })
    res.status(200).json({
        result: ' deleted OK'
    })
    
})
server.post('/book/edit',(req,res)=>{
    console.log(req.body);
   /* books.forEach((book, index)=>{
        if(book.id==req.params.id){
            books.splice(index,1)
        }
    })*/
    res.status(200).json({
        result: ' edited OK'
    })
})
server.get('/book/:id',(req,res)=>{
    console.log('id='+req.params.id);

    books.forEach((book, index)=>{
        if(book.id==req.params.id){
           res.send(book)
        }
    })
    
})
server.listen(80,()=>{
    console.log('Listening port : 80');
    
})
