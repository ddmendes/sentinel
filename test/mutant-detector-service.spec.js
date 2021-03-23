const _ = require('lodash')
const assert = require('assert');
const MutantDetector = require('../src/mutant-detector-service')

describe('Mutant Detector Test', () => {

    const INVALID_PERSON = new Error('Invalid person value');
    const personsBase = {
        xavier: {
            name: 'Dr. Xavier',
            brain_activity: 50000,
            diagnostic: 'mutant'
        },
        logan: {
            name: 'Logan',
            brain_activity: 30000,
            diagnostic: 'mutant'
        },
        stryker: {
            name: 'William Stryker',
            brain_activity: 10000,
            diagnostic: 'human'
        }
    };

    describe('isHuman', () => {
        it('Should return true for maximum human brain activity', () => {
            assert.ok(MutantDetector.isHuman(10000.0));
        });

        it('Should return true for brain activity below maximum human brain activity', () => {
            assert.ok(MutantDetector.isHuman(9999.9));
        });

        it('Should return false for brain activity above maximun human brain activity', () => {
            assert.ok(!MutantDetector.isHuman(10000.1));
        });
    });

    describe('evaluatePerson', () => {
        it('Should return Person{name, diagnostic: "mutant"} for a mutant', () => {
            let person = personsBase.xavier; // mutant
            let result = MutantDetector.evaluatePerson(person);
            assert.ok(_.has(result, 'name'));
            assert.strictEqual(result['name'], person.name);
            assert.ok(_.has(result, 'diagnostic'));
            assert.strictEqual(result['diagnostic'], person.diagnostic);
        });

        it('Should return Person{name, diagnostic: "human"} for a human', () => {
            let person = personsBase.stryker; // human
            let result = MutantDetector.evaluatePerson(person);
            assert.ok(_.has(result, 'name'));
            assert.strictEqual(result['name'], person.name);
            assert.ok(_.has(result, 'diagnostic'));
            assert.strictEqual(result['diagnostic'], person.diagnostic);
        });

        it('Should throw "Invalid person value" when missing name', () => {
            let person = _.omit(
                personsBase.logan,
                'name'
            );

            assert.throws(
                () => MutantDetector.evaluatePerson(person),
                INVALID_PERSON
            );
        });

        it('Should throw "Invalid person value" when missing brain_activity', () => {
            let person = _.omit(
                personsBase.logan,
                'brain_activity'
            );

            assert.throws(
                () => MutantDetector.evaluatePerson(person),
                INVALID_PERSON
            );
        });
    });

    describe('evaluateList', () => {
        it('Result length must be the same as persons lenght', () => {
            let persons = _.values(personsBase);
            let result = MutantDetector.evaluateList(persons);
            assert.strictEqual(result.length, persons.length);
        });
    });
});