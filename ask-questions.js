'use strict';
const readline = require('readline');

function finalizer(generator, resolve, answer) {
    let next = generator.next(answer);
    if (next.done) {
        resolve(next.value);
    } else {
        next.value.then((answer) => {
            finalizer(generator, resolve, answer);
        });
    }
}

function* questionGenerator(questionnaire) {
    let answer,
        answers = {},
        questions = Object.keys(questionnaire),
        next;
    while(next = questions.shift()) {
        answer = yield deferQuestion(questionnaire[next]);
        answers[next] = answer;
    }
    return answers;
}

function deferQuestion(question) {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (input) => {
            resolve(input);
            rl.close();
        });
    });
}

module.exports = (questionnaire) => {
    return new Promise((resolve ) => {
        let generator = questionGenerator(questionnaire);
        finalizer(generator, resolve, '');
    });
};