const myQuestions = [
    {
      question: "What year was the very first model of the iPhone released?",
      answers: {
          a:"2007",
          b:"2009",
          c:"2003",
          d:"2005",
      },
             
      correctAnswer: "a",
      picture: "./assets/images/iphone.jpg",
    },
    {
      question: "What’s the shortcut for the “copy” function on good computers?",
      answers: {
          a:"ctrl v",
          b:"alt f4",
          c:"ctrl c",
          d:"alt tab",
      },
             
      correctAnswer: "c",
      picture: "./assets/images/ctrlC.jpg",
    },
    {
      question: "What does “HTTP” stand for?",
      answers: {
          a:"HyperText Transfer Protocol",
          b:"Holy Taco Tuesday Paco",
          c:"High Trees Train Puppies",
          d:"Hey Talk To Pierre",
      },
                   
      correctAnswer: "a",
      picture: "./assets/images/http.jpg",
    },
    {
      question: "What is the name of the man who launched eBay back in 1995?",
      answers: {
          a:"Larry Page",
          b:"Sergy Brin",
          c:"Steve Jobs",
          d:"Pierre Omidyar",
      },
                   
      correctAnswer: "d",
      picture: "./assets/images/ebay.jpg",
    },
    {
      question: "What is often seen as the smallest unit of memory?",
      answers: {
          a:"byte",
          b:"Kilobyte",
          c:"megabyte",
          d:"milabyte",
      },
                   
      correctAnswer: "b",
      picture: "./assets/images/kilobyte.jpg",
    },
    {
      question: "Which email service is owned by Microsoft?",
      answers: {
          a:"Gmail",
          b:"Rackspace",
          c:"Hotmail",
          d:"iMail",
      },
                   
      correctAnswer: "c",
      picture: "./assets/images/hotmail.jpg",
    },
    {
      question: "Google Chrome, Safari, Firefox and Explorer are different types of what?",
      answers: {
          a:"Programs",
          b:"Web browsers",
          c:"Softwares",
          d:"Companies",
      },
                   
      correctAnswer: "b",
      picture: "./assets/images/webBrowsers.jpg",
    },
    {
      question: "Is Java a type of OS?",
      answers: {
          a:"No",
          b:"Kinda",
          c:"Maybe",
          d:"Yes",
      },
                   
      correctAnswer: "a",
      picture: "./assets/images/java.jpg",
    },
    {
      question: "Who is often called the father of the computer?",
      answers: {
          a:"Quentin Tarantino",
          b:"Bill Gates",
          c:"Charles Babbage",
          d:"Nikola Tesla",
      },
                   
      correctAnswer: "c",
      picture: "./assets/images/babbage.jpg",
    },
    {
      question: "What was Twitter’s original name?",
      answers: {
          a:"Birds r Us",
          b:"twttr",
          c:"Tweeter",
          d:"mySpace",
      },
                   
      correctAnswer: "b",
      picture: "./assets/images/twitter.png",
    },
];

//let numQuestions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let numQuestions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let right = 0;
let wrong = 0;

let timer = 30;
let intervalId;
let timeoutID;

let tempQuest;
let tempID;
let tempPic;
let tempAnswer;
let tempWord;

//stops the game after 10 questions
let asked = 0;


//clicks available after screen is loaded
    $(document).ready(function(){
        $("#start").on("click", startGame);

        $(".answer").on("click", answerSelect);
    });


//initiates game
function startGame(){
    if (numQuestions.length > 0 ){
        $("#answers").fadeIn();
        //chooses random question
        var rn = Math.floor(Math.random() * numQuestions.length);
        tempQuest = myQuestions[numQuestions[rn]];

        
        intervalId = setInterval(countdown, 1000);
        
        $("#question").html(tempQuest.question);
        $("#a").html(tempQuest.answers.a);
        $("#b").html(tempQuest.answers.b);
        $("#c").html(tempQuest.answers.c);
        $("#d").html(tempQuest.answers.d);
        
        $("#start").fadeOut();
        
        numQuestions.splice(rn, 1);

        timeoutID = setTimeout(tempResult, 30 * 1000);
    }
};
//keeps game going
function contGame(){
    if (numQuestions.length > 0 ){
        $("#result").fadeOut();
        var n = Math.floor(Math.random() * numQuestions.length);
        tempQuest = myQuestions[numQuestions[n]];

        
        intervalId = setInterval(countdown, 1000);
        
        $("#question").html(tempQuest.question);
        $("#a").html(tempQuest.answers.a);
        $("#b").html(tempQuest.answers.b);
        $("#c").html(tempQuest.answers.c);
        $("#d").html(tempQuest.answers.d);
        
        
        $("#answers").fadeIn();
        numQuestions.splice(n, 1);

        timeoutID = setTimeout(tempResult, 30 * 1000);
    }
}

//countdown time
function countdown(){
    $("#countdown").html(timer);
    timer --;
};

function endGame(){
    //$("#rightWrong").html(`Total Correct: ${right}`)

    let divRight = $("<div>")
    divRight.html(`Total Correct: ${right}`);
    $("#rightWrong").parent().append(divRight)

    let divWrong = $("<div>")
    divWrong.html(`Total Wrong: ${wrong}`);
    $("#rightWrong").parent().append(divWrong)

    let divPercent = $("<div>")
    divPercent.html(`Final: ${(right/myQuestions.length)*100}%`);
    $("#rightWrong").parent().append(divPercent)

    $("#rightWrong").hide();
    $("#questPic").hide();
    clearInterval(intervalId);
}
function answerSelect(){
    
    $("#answers").fadeOut();

    tempID = $(this).attr('id');
    tempPic = tempQuest.picture;

    tempResult();  
};


//shows results page after time runs out or answer is clicked
function tempResult(){

    $("#answers").fadeOut();

    //if time runs out its wrong, else if the answer is right
    if(timer <= 0){
        wrong++;
        $("#rightWrong").html("Out of time!! the correct answer is " + tempQuest.correctAnswer);
        $("#questPic").attr('src', tempPic)
    }
    else if(tempID === tempQuest.correctAnswer){
        right++;
        $("#rightWrong").html("You are Correct!!");
        $("#questPic").attr('src', tempPic)
        
        //debugger;
    }
    else {
        wrong ++;
        $("#rightWrong").html("Wrong!! the correct answer is " + tempQuest.correctAnswer);
        $("#questPic").attr('src', tempPic)
        
    }

    $("#result").fadeIn();
    
    asked++
    if (asked === 10){
        setTimeout(endGame, 4 * 1000)
    }
    else {
        setTimeout(contGame, 3 * 1000);
        console.log(right, wrong )
        clearTimeout(timeoutID);
        clearInterval(intervalId);
        timer = 30;
    }
}







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