const _ = require('lodash')

const HUMAN_MAX_BRAIN_ACTIVITY = 10000.0
const INVALID_PERSON = 'Invalid person value';

function evaluateList(persons) {
    const result = [];
    for (person of persons) {
        result.push(evaluatePerson(person));
    }
    return result;
}

function evaluatePerson(person) {
    if (!_.has(person, 'name') || !_.has(person, 'brain_activity')) {
        throw INVALID_PERSON;
    }

    return {
        name: person['name'],
        diagnostic: isHuman(person['brain_activity']) ? 'human' : 'mutant'
    };
}

function isHuman(brainActivity) {
    return brainActivity <= HUMAN_MAX_BRAIN_ACTIVITY;
}

module.exports = {
    evaluateList,
    evaluatePerson,
    isHuman,
    HUMAN_MAX_BRAIN_ACTIVITY
}