//Search bar that sends user query to the results page
import React from 'react' 
import { useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

function Searchbar() {
    const navigate = useNavigate();
    const textInput = React.createRef();

    return (
        <div>
            <Form className="d-flex" onSubmit={() => navigate('/result', { state: textInput.current.value})}>
                <Form.Control type="search" placeholder="Search Projects" required className="me-2" aria-label="Search" ref={textInput}/>
                <Button type= "submit" style={{ backgroundColor: "#7749F8", border: "#7749F8" }}>Search</Button>
            </Form>
        </div>
        )}

export default Searchbar;