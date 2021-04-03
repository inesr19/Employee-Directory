import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";


const EmployeeTable = (props) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10&nat=us")
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
            {props.employees.map(({dob, name, email}) =>( <EmployeeRow dob={dob} name={name} email={email}/>))}
        </tbody>
      </Table>
      
    )
}

const EmployeeRow = ({ dob, name, email }) => {
return( <tr>
          <td>{dob.date}</td>
          <td>{name.first}</td>
          <td>{name.last}</td>
          <td>{email}</td>   
        </tr>
)
}

export default EmployeeTable;