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
            <Form.Control onChange={props.people} type="text" placeholder="Search for an employee by first name" />
        </Form.Group>
        <Button onClick={() => handleSubmit} variant="primary" type="submit">
            Filter
        </Button>
    </Form>
        
    )
}

export default Search;