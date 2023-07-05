const questionContent = document.querySelectorAll('.question');
// const answerBox = document.querySelector('answer-container');
// const icon = document.querySelector('icon');

questionContent.forEach(function (questionAsked) {
   const button = questionAsked.querySelector('.btn');

   button.addEventListener('click', ()=> {
    // console.log('questionAsked');

    questionContent.forEach(function(eachQuestionAsked) {
      if (eachQuestionAsked !== questionAsked) {
         eachQuestionAsked.classList.remove('show-answer');
      }
    });
    
    questionAsked.classList.toggle('show-answer');

   });
});

