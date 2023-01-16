const Employee = require("../lib/Employee")

describe("Employee discription", () => {
    it("Gives the correct details about the employee", () => {
        const employee = new Employee("Terry", "Manager", "terry@g.com");

        expect(employee.name).toEqual("Terry");
        expect(employee.id).toEqual("Manager");
        expect(employee.email).toEqual("terry@g.com");
    })
});