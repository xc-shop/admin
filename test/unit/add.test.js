import add from 'component/add.js'

describe("test add function", ()=>{
    test('test 1+1', ()=>{
        expect(add(1, 1)).toBe(2)
    })
})