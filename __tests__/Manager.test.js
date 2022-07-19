const Manager = require("../lib/Manager")

describe("Manager",()=>{
    describe("test Manager's properties",()=>{
        it ("test all properties",()=>{
        const manager = new Manager('Tammy',"1",'tgallagher496@gmail.com','123')
        
        expect(manager.name).toEqual('Tammy')
        expect(manager.id).toEqual("1")
        expect(manager.email).toEqual('tgallagher496@gmail.com')
        expect(manager.officeNumber).toEqual('123')
    })
})

    describe("test Employee's methods",()=>{

        it ("test all properties",()=>{
        const manager = new Manager('Phil',"2",'ploy@yahoo.com','123')
        
        expect(manager.getName()).toEqual('Phil')
        expect(manager.getId()).toEqual("2")
        expect(manager.getEmail()).toEqual('ploy@yahoo.com')
        expect(manager.getRole()).toEqual('Manager')

        })   
    })
})