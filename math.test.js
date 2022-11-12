const {mean, median, mode} = require('./mymath')


describe("test mean", function(){
    test("test 1 number", function () {
        const array = [1,1,1,1,1,1]
        expect(mean(array)).toEqual(1)
    })

    test("test even numbers", function () {
        const array = [2,2,4,4]
        expect(mean(array)).toEqual(3)
    })

    test("test fractions", function () {
        const array = [2,2,3,3]
        expect(mean(array)).toEqual(2.5)
    })
})

describe("test mode", function(){
    test("test 1 number", function () {
        const array = [1,1,1,1,1,1]
        expect(mode(array)).toEqual(1)
    })

    test("test even numbers", function () {
        const array = [4,4,4,2,2]
        expect(mode(array)).toEqual(4)
    })

    test("test fractions", function () {
        const array = [1,8,9,2,2,3,4,0]
        expect(mode(array)).toEqual(2)
    })
})


describe("test median", function(){
    test("test 1 number", function () {
        const array = [1,1,1,1,1,1]
        expect(median(array)).toEqual(1)
    })

    test("test even numbers", function () {
        const array = [4,2,4,2]
        expect(median(array)).toEqual(3)
    })

    test("test odd numbers", function () {
        const array = [6,1,5,2,4,3,7,9,8]
        expect(median(array)).toEqual(5)
    })
})


