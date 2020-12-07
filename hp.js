const nerds = require('nerds');
const http = require('http')


const app = (req, res) => {
    const {
        first,
        last,
        house,
        wand
    } = nerds.resolve('Harry Potter').asArray()[0];
    res.statusCode = 200;
    res.end(`
        <h1>${first} ${last}</h1>
        <h3>${house}</h3>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
    
   
}
module.exports = app;
module.exports = server;
