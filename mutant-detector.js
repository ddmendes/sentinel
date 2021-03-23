#!node

const service = require('./src/mutant-detector-service');

function main () {
    const input = JSON.parse(process.argv[2])
    return service.evaluateList(input)
}

if (typeof require !== 'undefined' && require.main === module) {
    try {
        result = main()
        console.log(result)
    } catch(e) {
        console.error(e)
    }
}
