Ask Questions
-------------
Using the method [question](https://nodejs.org/api/readline.html#readline_rl_question_query_callback) of Node for multiple questions is a pain. You have to go through the irritating callback hell although you have few simple questions to ask and want to avoid using a heavy library.

It is a small utility function for asking multiple command line questions on top of nodejs readline module that returns a promise and resolve with answwers when all questions have been asked.

const askQuestions = require('ask-questions');

let questionnaire = {
    name: 'Enter Your Name:',
    email: 'Enter Your Email ',
    direction: 'Enter Output Directory Name: (dist) '
};

askQuestions(questionnaire).then((answers)=> {
    console.log(answers);
});
