const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let data = require('./jobs');

// let initialJobs = data.jobs;
let events = [];

app.use(bodyParser.json());

//middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next(); //continue the request steps
});

const api = express.Router(); //expressJs

//localhost:4201/api/jobs
api.get('/events', (req, res) => {
    res.json(getAllJobs());
});

api.get('/events/:id', (req, res) => {
    let eventId = req.params.id;
    let event = events.find(event => event.id === eventId);
    if (event) res.json({ success: true, event: event });
    else res.status(404).json({ success: false, message: "Not found" });
});

api.post('/events/new', (req, res) => {
    let event = req.body;
    res.json(events());
});

api.post('/jobs', (req, res) => {
    const job = req.body; 
    addedJobs = [job, ...addedJobs];
    res.json(job);
});

app.use('/api', api);

const port = 4201;

app.listen(port, () => {
    console.log(`Listining on port ${port}`);
})