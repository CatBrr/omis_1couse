import {log} from 'console'
import {createServer} from 'http'
const server= createServer((request,response)=>{
    let content= 'Hello'//fetch('index.html')
    response.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
    response.end(content)
})
server.listen(8080,()=>{
    console.log('server is running');
})