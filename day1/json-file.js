const fs = require("fs");

const data = {
    name: "Aaryan",
    age: 23,
    course: "MCA"
};

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

const fileData = fs.readFileSync("data.json", "utf-8");
const obj = JSON.parse(fileData);

console.log(obj);