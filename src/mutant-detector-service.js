const _ = require('lodash')

const HUMAN_MAX_BRAIN_ACTIVITY = 10000.0
const INVALID_PERSON = 'Invalid person value';

/**
 * Evaluate brain activity for a list of persons.
 * @param {List<Person{name, brain_activity}>} persons Persons to evaluate brain activity
 * @returns {List<Person{name, diagnostic}>} Diagnostic for persons
 */
function evaluateList(persons) {
    const result = [];
    for (person of persons) {
        result.push(evaluatePerson(person));
    }
    return result;
}

/**
 * Evaluate brain activity for a person.
 * @param {Person{name, brain_activity}} person Person to evaluate brain activity
 * @returns Person{name, diagnostic} Diagnostic for person
 */
function evaluatePerson(person) {
    if (!_.has(person, 'name') || !_.has(person, 'brain_activity')) {
        throw new Error(INVALID_PERSON);
    }

    return {
        name: person['name'],
        diagnostic: isHuman(person['brain_activity']) ? 'human' : 'mutant'
    };
}

/**
 * Evaluate if brain activity level is compatible with a human brain activity.
 * @param {float} brainActivity Brain activity value
 * @returns true if it's human brain activity. false if it's mutant brain activity
 */
function isHuman(brainActivity) {
    return brainActivity <= HUMAN_MAX_BRAIN_ACTIVITY;
}

module.exports = {
    evaluateList,
    evaluatePerson,
    isHuman,
    HUMAN_MAX_BRAIN_ACTIVITY
}