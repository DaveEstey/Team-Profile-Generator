const Intern = require("../lib/intern")

describe("Intern discription", () => {
    it("Gives the correct details about the intern", () => {
        const intern = new Intern("Terry", "Manager", "terry@g.com", "UNB");

        expect(intern.name).toEqual("Terry");
        expect(intern.id).toEqual("Manager");
        expect(intern.email).toEqual("terry@g.com");
        expect(intern.school).toEqual("UNB");
    })
});