Ask Questions
-------------
Using the method [question](https://nodejs.org/api/readline.html#readline_rl_question_query_callback) of Node for multiple questions is a pain. You have to go through the most irritating callback hell although you have few simple questions to ask. 
A utility small function for asking multiple questions based on nodejs readline module.

const askQuestions = require('ask-questions');

let questionnaire = {
    name: 'Enter Your Name:',
    email: 'Enter Your Email ',
    direction: 'Enter Output Directory Name: (dist) '
};

askQuestions(questionnaire).then((answers)=> {
    console.log(answers);
});
