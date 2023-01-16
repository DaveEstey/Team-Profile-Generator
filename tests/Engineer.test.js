const Engineer = require("../lib/Engineer");

describe("engineer discription", () => {
    it("Gives the correct details about the engineer", () => {
        const engineer = new Engineer("Terry", "Manager", "terry@g.com", "terryG" );

        expect(engineer.name).toEqual("Terry");
        expect(engineer.id).toEqual("Manager");
        expect(engineer.email).toEqual("terry@g.com");
        expect(engineer.github).toEqual("terryG");
    })
});