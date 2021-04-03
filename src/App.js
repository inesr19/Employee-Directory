import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable"





function App() {
   
    return (
    <>
        <Title />
        <SearchBar handleSubmit={handleSubmit}/>
        <EmployeeTable employees={employees}/>
    </>
    )
}

export default App;
