const router = require('express').Router();
const {
    newTicket,
    description,
    projectTickets,
    updateTicket,
    deleteTicket,
} = require('../controllers/ticketController');

// default ticket route
router.get('/', description);

// [C]RUD
// insert a ticket into the database
router.post('/newTicket', newTicket);

// C[R]UD
// get tickets by project
router.get('/projectTickets', projectTickets);

// CR[U]D
//Update a ticket given a ticketID
router.patch('/updateTicket', updateTicket);

// CRU[D]
//Delete a ticket given a ticketID
router.delete('/deleteTicket', deleteTicket);

module.exports = router;
