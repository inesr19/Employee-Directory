import React from "react";
import { Form, Button } from "react-bootstrap";

const Search = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = props.employeeState.filter(employee => {
            // console.log(employee.name.first)
            return employee.name.first.includes(e.target.value)
        })
        console.log(firstName)
    }

    return (
    <Form>  
        <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onKeyUp={props.handleSubmit} type="text" placeholder="Search for employee" />
        </Form.Group>
        <Button onClick={() => handleSubmit} variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        
    )
}

export default Search;