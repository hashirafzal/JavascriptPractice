const quizData=[ 
  {
    question: "What does the 'head' element in HTML contain?",
    options: ["Metadata and links to external resources", "The main content of the webpage", "A header section with a logo and navigation links", "Scripts and styles directly affecting the page's appearance"],
    correct: 0,
  }, 
  {
    question: "Which CSS property is used to change the color of text?",
    options: ["color", "background-color", "text-color", "font-color"],
    correct: 0,
  }, 
  {
    question: "What does the 'addEventListener' method in JavaScript do?",
    options: ["Attaches an event handler to an HTML element", "Adds a new event to the event queue", "Removes an event listener from an element", "Updates the event object"],
    correct: 0,
  }, 
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<linebreak>"],
    correct: 2,
  }, 
  {
    question: "What does the 'typeof' operator in JavaScript return for 'null'?",
    options: ["object", "undefined", "null", "string"],
    correct: 0,
  }, 
];


const answerElement = document.querySelectorAll('.answer');

const quiz = document.getElementById('quiz')
const [questionElement,option_1,option_2,option_3,option_4]=
document.querySelectorAll("#question , .option_1 , .option_2 , .option_3 , .option_4" );

const submitBtn = document.getElementById("submit");

let currentQuiz =0;

let score =0;


const loadQuiz= () =>
{
  const {question , options } = quizData[currentQuiz];
  console.log(question, options);
  questionElement.innerText=question;

  options.forEach(
    (currOption,index)=> (window[`option_${index+1}`].innerText=currOption)
  )
}

loadQuiz();

const getSelectedOption=()=>{
  let ansIndex= Array.from(answerElement);
  // answerElement.forEach((c,index)=>{
    //   if(c.checked){
      //     ansIndex  =index;
      //   }
      // })
      return ansIndex.findIndex(c =>c.checked);
    }
    
    submitBtn.addEventListener("click",()=>{
      const selectedOptionIndex=getSelectedOption();
      console.log(selectedOptionIndex);

      if(selectedOptionIndex===-1)
      {
        alert("Please select an option first");
        return;
      }
      if( selectedOptionIndex===quizData[currentQuiz].correct)
      {
        score+=1;
        console.log(`score=${score}`);

      }
      currentQuiz++;
      if(currentQuiz<quizData.length){
        answerElement[selectedOptionIndex].checked  =false;
        loadQuiz();

      }
      else{
       
        quiz.innerHTML=`
        <div class='result'>
        <h2> Your score : ${score} / ${quizData.length} correct Answers</h2>
        <p> Congrats on completing the quiz</p>
        <button class='reload-button' onCLick="location.reload()"> Play Again </button>
        </div>
        `;

      }
    })