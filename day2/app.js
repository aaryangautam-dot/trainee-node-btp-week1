const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let employees = [
    {id:1, name:"Aaryan", role: "Developer"},
    {id:2, name:"Shiva", role: "Tester"},
    {id:3, name:"Shivansh", role: "Manager"}
];

function validateEmployee(data) {
    if (
        !data || typeof data.name !== "string" || data.name.trim() === "" || typeof data.role !== "string" || data.role.trim() ===""
    ) {
        return false;
    }
    return true;
}

app.get("/employees", (req, res) => {
    res.status(200).json(employees);
});

app.get("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    if(!Number.isInteger(id)){
        return res.status(400).json({message: "Invalid ID"});
    }

    const employee = employees.find(emp => emp.id === id);

    if(!employee){
        return res.status(404).json({message: "Employee not found"});
    }

    res.status(200).json(employee);
});


app.post("/employees", (req, res) => {
    if(!validateEmployee(req.body)) {
        return res.status(400).json({message: "Name and role are required"});
    }

    const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
    const newEmployee = {
        id: newId,
        name: req.body.name.trim(),
        role: req.body.role.trim()
    };

    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.put("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    if(!Number.isInteger(id)){
        return res.status(400).json({message: "Invalid Id"});
    }

    const employeeIndex = employees.findIndex(emp => emp.id === id);

    if(employeeIndex === -1){
        return res.status(404).json({message: "Employee not found"});
    }

    if(!validateEmployee(req.body)) {
        return res.status(400).json({message: "Name and role are required"});
    }

    employees[employeeIndex] = {
        ...employees[employeeIndex],
        name: req.body.name.trim(),
        role: req.body.role.trim()
    };

    res.status(200).json(employees[employeeIndex]);
});

app.delete("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    if(!Number.isInteger(id)){
        return res.status(400).json({message: "Invalid id "});
    }
    
    const employeeIndex = employees.findIndex(emp => emp.id === id);

    if(employeeIndex === -1){
        return res.status(404).json({message: "Employee not found"});
    }

    const deletedEmployee = employees.splice(employeeIndex, 1)[0];
    res.status(200).json({message: "Employee deleted successfully", employee: deletedEmployee});
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
})
