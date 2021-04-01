import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
    return (
    <Form>
        <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Search for employee" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        
    )
}

export default SearchBar;