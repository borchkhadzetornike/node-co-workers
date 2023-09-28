//Modules
const http = require('http')
const fs = require('fs')
const url = require('url')

// Custom Modules
const template = require('./modules/template')

// Get HTML Templates
const overview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const cardTemp = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8')
const workerTemp = fs.readFileSync(`${__dirname}/templates/worker.html`, 'utf-8')

// Get Users Data
const usersData = fs.readFileSync(`${__dirname}/data/users.json`, 'utf-8')



const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true)
    console.log(pathname, query.id)
    // Overview
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'})

        const cardsHTML = JSON.parse(usersData).map(el => {
            return template.fill(cardTemp, el)
        }).join('')
        const result = overview.replace('{{CARD}}', cardsHTML)
        res.end(result)

    // Worker
    } else if (pathname === '/worker') {
        if(!JSON.parse(usersData)[query.id - 1]){
            res.writeHead(404, {
                'Content-type': 'text/html',
            })
            res.end('<h1>Page not found!</h1>')
            return
        }

        const workerHTML = template.fill(workerTemp, JSON.parse(usersData)[query.id - 1])
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end(workerHTML)
    } else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        })
        res.end('<h1>Page not found!</h1>')
    }
})

server.listen(3000, () => {
    console.log('Server Started!')
})