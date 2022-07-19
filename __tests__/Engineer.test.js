const Engineer = require("../lib/Engineer")

describe("Engineer",()=>{
    describe("test Engineer's properties",()=>{
        it ("test all properties",()=>{
        const engineer = new Engineer('Tammy',"1",'tgallagher496@gmail.com','https://github.com/tgallagher496')
        
        expect(engineer.name).toEqual('Tammy')
        expect(engineer.id).toEqual("1")
        expect(engineer.email).toEqual('tgallagher496@gmail.com')
        expect(engineer.github).toEqual('https://github.com/tgallagher496')
    })
})

    describe("test Engineer's methods",()=>{

        it ("test all properties",()=>{
        const engineer = new Engineer('Phil',"2",'ploy@yahoo.com','https://github.com/tgallagher496')
        
        expect(engineer.getName()).toEqual('Phil')
        expect(engineer.getId()).toEqual("2")
        expect(engineer.getGithub()).toEqual('https://github.com/tgallagher496')
        expect(engineer.getRole()).toEqual('Engineer')
        })   
    })
})