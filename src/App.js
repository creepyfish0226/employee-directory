import React, { useState } from "react";

import "./App.css";
import employees from "./employees.json";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Search from "./components/Search";
// import Nav from "./components/Nav";
// import Layout from "./components/Layout";

function App() {
  const [
    employeeDirectory,
    setEmployeeDirectory
  ]=useState(employees)
  const[order, setOrder]=useState("")
  const handleSort =() =>{
   const newList= employeeDirectory.sort(function(a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if(order !== "des"){
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }else{
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
    });
    console.log(newList)
    setOrder(curr=> curr==="des"? "asc":"des")
    setEmployeeDirectory(newList)
  } 
  const handleSearch=term=>{

    const newList = employees.filter(employee => {
      const name = `${employee.name.first} ${employee.name.last}`
      return name.toLowerCase().includes(term.toLowerCase())

    })
   setEmployeeDirectory(newList)

  }

  return (
    <>
      <input type="text" onChange={e=>handleSearch(e.target.value)}/> Name Search
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={()=>handleSort()}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
        {employeeDirectory.map(employee => (

          <tr key={employee.login.uuid}>
            <th scope="row" key={employee.login.uuid}>1</th>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.cell}</td>
            <td>{employee.location.city}</td>
          </tr>
        ))}

        </tbody>
      </table>
    </>
  );
}

export default App;
