const Manager = require("../lib/Manager")

describe("Manager discription", () => {
    it("Gives the correct details about the manager", () => {
        const manager = new Manager("Terry", "Manager", "terry@g.com", 5064599999);

        expect(manager.name).toEqual("Terry");
        expect(manager.id).toEqual("Manager");
        expect(manager.email).toEqual("terry@g.com");
        expect(manager.officeNum).toEqual(5064599999);
    })
});