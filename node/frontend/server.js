import {log} from 'console'
import {createServer} from 'http'
import fs from 'fs'
var data =  fs.readFileSync('./frontend/index.html')
const server= createServer((request,response)=>{
    response.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
    response.end(data)
})
server.listen(8080,()=>{
    console.log('server is running');
})
//