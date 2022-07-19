const Employee = require("../lib/Employee")

describe("Employee",()=>{
    describe("test Employee's properties",()=>{
        it ("test all properties",()=>{
        const employee = new Employee('Tammy',"1",'tgallagher496@gmail.com')
        
        expect(employee.name).toEqual('Tammy')
        expect(employee.id).toEqual("1")
        expect(employee.email).toEqual('tgallagher496@gmail.com')
    })
})

    describe("test Employee's methods",()=>{

        it ("test all properties",()=>{
        const employee = new Employee('Phil',"2",'ploy@yahoo.com')
        
        expect(employee.getName()).toEqual('Phil')
        expect(employee.getId()).toEqual("2")
        expect(employee.getEmail()).toEqual('ploy@yahoo.com')
        expect(employee.getRole()).toEqual('Employee')

        })   
    })
})