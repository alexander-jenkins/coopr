//Displays a list of tickets on a project
//ProjectPage -> TicketList -> TicketCard
import React from 'react';
import { Stack } from 'react-bootstrap';
import TicketCard from './TicketCard';

function TicketList(props) {
    //ProjectPage -> TicketList -> TicketCard
    const tickets = props.ticketList.tickets;
    return (
        <div>
            <Stack gap={3}>
                {tickets &&
                    tickets.map((ticket) => (
                        <TicketCard ticket={ticket} key={ticket.idNum} />
                    ))}
            </Stack>
        </div>
    );
}

export default TicketList;
