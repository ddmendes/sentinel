const assert = require('assert');
const MutantDetector = require('./mutant-detector')

describe('Mutant Detector Test', () => {

    let auxArgs;

    beforeEach(() => {
        auxArgs = process.argv;
    });

    afterEach(() => {
        process.argv = auxArgs;
    });

    it('main should return string for valid arguments', () => {
        process.argv = ['node', 'mutant-detector.js', '15000.0'];
        assert.doesNotThrow(
            () => MutantDetector.main(),
            'MutantDetector.main() should not throw for valid argument')
    });

    it('main should throw error for invalid argument format', () => {
        process.argv = ['node', 'mutant-detector.js', 'Dr.Xavier'];
        assert.throws(
            () => MutantDetector.main(),
            'MutantDetector.main() should throw for invalid argument format');
    });

    it('main should throw for missing arguments', () => {
        process.argv = ['node', 'mutant-detector.js'];
        assert.throws(
            () => MutantDetector.main(),
            'MutantDetector.main should throw for missing arguments');
    });

});