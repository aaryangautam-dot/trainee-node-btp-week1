let employees = [
    {id:1, name: "Aaryan", role:"Developer"},
    {id:2, name: "Shiva", role:"Tester"},
    {id:3, name: "Shivansh", role:"Manager"}
];

function getAllEmployees() {
    return employees;
}

function getEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function createEmployee(name, role) {
    const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;

    const employee = {
        id: newId,
        name: name.trim(),
        role: role.trim()
    };
    employees.push(employee);
    return employee;
}

function updateEmployee(id, name,role){
    const index = employees.findIndex(employee =>employee.id === id);
    if(index === -1) {
        return null;
    }

    employees[index] = {
        id,
        name:name.trim(),
        role:role.trim()
    }
    return employees[index]
}

function deleteEmployee(id){
    const index = employees.findIndex(employee => employee.id === id);
    if(index === -1){
        return null;
    }
    return employees.splice(index, 1)[0];
}

module.exports ={
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};