#!node

const HUMAN_MAX_BRAIN_POWER = 10000.0
const INVALID_ARGUMENTS_ERROR = "Invalid arguments. Supply only brain activity average power.";

function main () {
    let args = process.argv.slice(2);
    if (args.length !== 1) {
        throw INVALID_ARGUMENTS_ERROR;
    }

    let brainAveragePower = parseFloat(args[0]);
    if (isNaN(brainAveragePower)) {
        throw INVALID_ARGUMENTS_ERROR;
    }
    
    return JSON.stringify({
        is_human: checkBrainActivity(brainAveragePower)
    });
}

/**
 * Check brain activity to decide if subject is humam or mutant.
 * @param {double} power Average brain activity power
 * @returns True if human. False if mutant.
 */
function checkBrainActivity(power) {
    return power <= HUMAN_MAX_BRAIN_POWER
}

if (typeof require !== 'undefined' && require.main === module) {
    try {
        result = main()
        console.log(result)
    } catch(e) {
        console.error(e)
    }
}

module.exports = {
    main,
    checkBrainActivity,
    HUMAN_MAX_BRAIN_POWER,
    INVALID_ARGUMENTS_ERROR
}
