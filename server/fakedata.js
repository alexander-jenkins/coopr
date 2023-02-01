const {faker} = require('@faker-js/faker');
const axios = require('axios');

// randomly generate a new project
function random_project() {
    let project = {
        title: faker.random.words(3),
        description: faker.lorem.sentence(9),
        owner: 'alex@alexjenkins.dev',
    };
    axios.post('https://coopr.dev/api/project/newProject', project)
        .then(res => console.log(res.data));
}

// randomly generate a new ticket
function random_ticket() {
    let ticket = {
        title: faker.random.words(3),
        description: faker.lorem.sentence(9),
        owner: 'alex@alexjenkins.dev',
        project: 'definition Borders sapiente',
        assignee: null,
        status: null,
        category: null,
        priority: null,
        due: null,
        pinned: false,
    };
    axios.post('https://coopr.dev/api/ticket/newTicket', ticket)
        .then(res => console.log(JSON.stringify(res.data.status)));
}

// randomly generate a new comment
function random_comment() {
    let comment = {
        comment: faker.lorem.sentence(9),
        owner: 'alex@alexjenkins.dev',
        ticket: '63d9e3e8bd746288b796caac'
    };
    axios.post('https://coopr.dev/api/comment/newComment', comment)
        .then(res => console.log(JSON.stringify(res.data.status)));
}

random_comment();