import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import API from "../utils/API"

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((res) => {
            setEmployees(res.results)
        });
    }, []);

    return (
      <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {employees.filter(e => e.name.firstName.length > 5).map(({dob, name, email}) =>( <EmployeeRow dob={dob} name={name} email={email}/>))}
        </tbody>
      </Table>
    )
}

const EmployeeRow = ({ dob, name, email }) => {
    <tr>
        <td>{dob.date}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{email}</td>   
    </tr>
}

export default EmployeeTable;