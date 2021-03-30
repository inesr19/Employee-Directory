import React, { useState, useEffect } from "react";
import API from "../utils/API"

function Directory() {
    const [employeeState, setEmployee] = useState({
        firstName: "Harry",
        lastName: "Potter",
        position: "Wizard"
    });

    useEffect(() => {
        API.getEmployees.then((res) => {
            setEmployee(res);
            console.log(employeeState);
        });
    }, []);

    return (
        <div className="card">
            <div>
                Name: {employeeState.firstName + employeeState.lastName}
            </div>
            <div>
                Position: {employeeState.position}
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
        </div>
        
    )
}

export default Directory;