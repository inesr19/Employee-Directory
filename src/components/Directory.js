import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import API from "../utils/API";
import Title from "../components/Title";
import Search from "../components/Search";


const Directory = () => {
    const [employeeState, setEmployees] = useState([]);

    useEffect(() => {
        API.getEmployees()
          .then(results => {
              setEmployees(results.data.results)
          });
    }, [])

    const handleInputChange = (e) => {
        setEmployees(e.target.value);
    }

    return (
        <div>
        <Title />
        <Search onChange={handleInputChange}/>
        <Table>
        <thread>
            <tr>
                <th>Profile</th>
                <th>Age</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            <tbody>
                {employeeState.map(
                    (
                        {
                            picture,
                            dob,
                            name,
                            email,
                            _id
                        }
                    ) => (
                        <EmployeeRow
                            key={_id}
                            picture={picture}
                            dob={dob}
                            name={name}
                            email={email}
                        />
                    )
                )}
            </tbody>
        </thread>
    </Table>
    </div>
      
    )
}

const EmployeeRow = ({ picture, dob, name, email }) => {
     
    return (
        <tr>
            <td><img src={picture.thumbnail} alt="employee"/></td>
            <td>{dob.age}</td>
            <td>{name.first}</td>
            <td>{name.last}</td>
            <td>{email}</td>
        </tr>
    )
}

export default Directory;