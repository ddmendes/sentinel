const assert = require('assert');
const MutantDetector = require('../src/mutant-detector-service')

describe('Mutant Detector Test', () => {

    it('evaluateList should not throw when evaluating valid data', () => {
        let persons = [
            {
                'name': 'Dr. Xavier',
                'brain_activity': 50000
            },
            {
                'name': 'Logan',
                'brain_activity': 30000
            },
            {
                'name': 'William Stryker',
                'brain_activity': 10000
            }
        ];
        assert.doesNotThrow(() => MutantDetector.evaluateList(persons))
    });

    it('evaluateList should throw error for invalid person format', () => {
        let brokenPersons = [
            {
                'name': 'Dr. Xavier',
            },
            {
                'brain_activity': 30000
            },
            {
                'name': 'William Stryker',
                'brain_activity': 10000
            }
        ];
        assert.throws(() => MutantDetector.evaluateList(brokenPersons));
    });
});