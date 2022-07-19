const Intern = require("../lib/Intern")

describe("Intern",()=>{
    describe("test Interns's properties",()=>{
        it ("test all properties",()=>{
        const intern = new Intern('Tammy',"1",'tgallagher496@gmail.com','UNL')
        
        expect(intern.name).toEqual('Tammy')
        expect(intern.id).toEqual("1")
        expect(intern.email).toEqual('tgallagher496@gmail.com')
        expect(intern.school).toEqual('UNL')
    })
})

    describe("test Intern's methods",()=>{

        it ("test all properties",()=>{
        const intern = new Intern('Phil',"2",'ploy@yahoo.com','Ohio')
        
        expect(intern.getName()).toEqual('Phil')
        expect(intern.getId()).toEqual("2")
        expect(intern.getEmail()).toEqual('ploy@yahoo.com')
        expect(intern.getSchool()).toEqual('Ohio')
        expect(intern.getRole()).toEqual('Intern')

        })   
    })
})