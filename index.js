const server = require('./api/server')


server.get('/', (req,res)=>{
    res.send(`<title>I Work</title><h1>Recipe Book</h1>`)
})
const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})