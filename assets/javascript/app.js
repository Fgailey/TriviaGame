const myQuestions = [
    {
      question: "What year was the very first model of the iPhone released?",
      answers: {
          a:"2007",
          b:"2009",
          c:"2003",
          d:"2005",
      },
             
      correctAnswer: "2007",
    },
    {
      question: "What’s the shortcut for the “copy” function on good computers?",
      answers: {
          a:"ctrl c",
          b:"ctrl v",
          c:"alt f4",
          d:"alt tab",
      },
             
      correctAnswer: "ctrl c",
    },
    {
      question: "What does “HTTP” stand for?",
      answers: {
          a:"HyperText Transfer Protocol",
          b:"Holy Taco Tuesday Paco",
          c:"High Trees Train Puppies",
          d:"Hey Talk To Pierre",
      },
                   
      correctAnswer: "HyperText Transfer Protocol",
    },
    {
      question: "What is the name of the man who launched eBay back in 1995?",
      answers: {
          a:"Larry Page",
          b:"Sergy Brin",
          c:"Steve Jobs",
          d:"Pierre Omidyar",
      },
                   
      correctAnswer: "Pierre Omidyar",
    },
    {
      question: "What is often seen as the smallest unit of memory?",
      answers: {
          a:"byte",
          b:"Kilobyte",
          c:"megabyte",
          d:"milabyte",
      },
                   
      correctAnswer: "kilobyte",
    },
    {
      question: "Which email service is owned by Microsoft?",
      answers: {
          a:"Gmail",
          b:"Rackspace",
          c:"Hotmail",
          d:"iMail",
      },
                   
      correctAnswer: "Hotmail",
    },
    {
      question: "Google Chrome, Safari, Firefox and Explorer are different types of what?",
      answers: {
          a:"Programs",
          b:"Web browsers",
          c:"Softwares",
          d:"Companies",
      },
                   
      correctAnswer: "Web browsers",
    },
    {
      question: "Is Java a type of OS?",
      answers: {
          a:"No",
          b:"Kinda",
          c:"Maybe",
          d:"Yes",
      },
                   
      correctAnswer: "No",
    },
    {
      question: "Who is often called the father of the computer?",
      answers: {
          a:"Quentin Tarantino",
          b:"Bill Gates",
          c:"Charles Babbage",
          d:"Nikola Tesla",
      },
                   
      correctAnswer: "Charles Babbage",
    },
    {
      question: "What was Twitter’s original name?",
      answers: {
          a:"Birds r Us",
          b:"twttr",
          c:"Tweeter",
          d:"mySpace",
      },
                   
      correctAnswer: "twttr",
    },
];

//let numQuestions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let numQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let timer = 30;

var intervalId;

window.onload = function() {
    $("#start").on("click", startGame);

    $(".answer").on("click", );
  };

function startGame(){
    //chooses random question
    var rn = Math.floor(Math.random() * numQuestions.length);

    intervalId = setInterval(countdown, 1000);
};

function countdown(){
    $("#countdown").html(timer);
    timer --;
};

function answerSelect(){

};







// const myQuestions = [
//     {
//       question: "What year was the very first model of the iPhone released?",
//       answers: [
//           "2007", "2009", "2003", "2005"
//       ],
//       correctAnswer: "2007",
//     },
//     {
//       question: "What’s the shortcut for the “copy” function on good computers?",
//       answers: [
//           "ctrl c", "ctrl v", "alt f4", "alt tab"
//       ],
//       correctAnswer: "ctrl c",
//     },
//     {
//       question: "What does “HTTP” stand for?",
//       answers: [
//           "HyperText Transfer Protocol", "Holy Taco Tuesday Paco", "High Trees Train Puppies", "Hey Talk To Pierre"
//       ],
//       correctAnswer: "HyperText Transfer Protocol",
//     },
//     {
//       question: "What is the name of the man who launched eBay back in 1995?",
//       answers: [
//           "Larry Page", "Sergy Brin", "Steve Jobs", "Pierre Omidyar"
//       ],
//       correctAnswer: "Pierre Omidyar",
//     },
//     {
//       question: "What is often seen as the smallest unit of memory?",
//       answers: [
//           "byte", "Kilobyte", "megabyte", "milabyte"
//       ],
//       correctAnswer: "kilobyte",
//     },
//     {
//       question: "Which email service is owned by Microsoft?",
//       answers: [
//           "Gmail", "Rackspace", "Hotmail", "iMail"
//       ],
//       correctAnswer: "Hotmail",
//     },
//     {
//       question: "Google Chrome, Safari, Firefox and Explorer are different types of what?",
//       answers: [
//           "Programs", "Web browsers", "Softwares", "Companies"
//       ],
//       correctAnswer: "Web browsers",
//     },
//     {
//       question: "Is Java a type of OS?",
//       answers: [
//           "No", "Kinda", "Maybe", "Yes"
//       ],
//       correctAnswer: "No",
//     },
//     {
//       question: "Who is often called the father of the computer?",
//       answers: [
//           "Quentin Tarantino", "Bill Gates", "Charles Babbage", "Nikola Tesla"
//       ],
//       correctAnswer: "Charles Babbage",
//     },
//     {
//       question: "What was Twitter’s original name?",
//       answers: [
//           "Birds r Us", "twttr", "Tweeter", "mySpace"
//       ],
//       correctAnswer: "twttr",
//     },
//   ];