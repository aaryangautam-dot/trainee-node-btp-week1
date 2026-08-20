const employeeService = require("../services/employeeService");

// Basic validation
function validateEmployee(req, res) {
    const { name, role } = req.body;

    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof role !== "string" ||
        role.trim() === ""
    ) {
        res.status(400).json({
            message: "Name and role are required"
        });

        return false;
    }

    return true;
}


// GET /employees
exports.getEmployees = (req, res) => {
    const employees = employeeService.getAllEmployees();

    res.status(200).json(employees);
};


// GET /employees/:id
exports.getEmployee = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "Invalid employee ID"
        });
    }

    const employee = employeeService.getEmployeeById(id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.status(200).json(employee);
};


// POST /employees
exports.createEmployee = (req, res) => {
    if (!validateEmployee(req, res)) {
        return;
    }

    const { name, role } = req.body;

    const employee = employeeService.createEmployee(name, role);

    res.status(201).json(employee);
};


// PUT /employees/:id
exports.updateEmployee = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "Invalid employee ID"
        });
    }

    if (!validateEmployee(req, res)) {
        return;
    }

    const { name, role } = req.body;

    const employee = employeeService.updateEmployee(id, name, role);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.status(200).json(employee);
};


// DELETE /employees/:id
exports.deleteEmployee = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "Invalid employee ID"
        });
    }

    const employee = employeeService.deleteEmployee(id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.status(200).json({
        message: "Employee deleted successfully",
        employee
    });
};