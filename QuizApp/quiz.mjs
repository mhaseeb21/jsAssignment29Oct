import PromptSync from "prompt-sync";
const prompt=PromptSync();

//***********Quiz questions list********

var questionList=
[
    //question1=
    {
    q:"The headquarters of General Agreement on Tariffs & Trade (GATT) is located in …",
    A:" Geneva",
    B:"London",
    C:"Manila",
    D:"Jakarata",
    },
    // question2=
    {
        q:"The trophy ‘Aga Khan Cup’ is related to …",
        A:"Hockey",
        B:"Badminton",
        C:"Football",
        D:"Basketball",
    },
    //question3=
    {
        q:"The incident of ‘Boston Tea Party’ is related to …",
        A:"German war of independence",
        B:"A great tea party event in Boston, USA",
        C:"American war of independence",
        D:"Flourishing tea trade in USA during the 19th century",
    },
    // question4=
    {
        q:"As per the Census 2011, what is the life expectancy rate for male in India?",
        A:"78",
        B:"65",
        C:"82",
        D:"58",
    },
    //question5=
    {
        q:"……………………………………. is the first Indian woman who climbed the Mt. Everest.",
        A:"Bachendri Pal",
        B:"Arunima Sinha",
        C:"Arunima Sinha",
        D:"Arunima Sinha",
    },
    // question6=
    {
        q:"…………………. Was the first scientist of Indian origin who received Nobel Prize in Medical Science.",
        A:"C. V. Raman",
        B:"Hargovind Khurana",
        C:"Dr. Bhabha",
        D:"M. Swaminathan",
    },
    // question7=
    {
        q:"……………… was the first male Space Tourists.",
        A:"Rchard Gariatte",
        B:"Mark Shuttleworth",
        C:"Gregory Olsen",
        D:" Dennis Tito",
    },
    // question8=
    {
        q:"December 10 is celebrated as …",
        A:"World Environment Day",
        B:"World Ocean Day",
        C:"World Ozone Day",
        D:"International Human Rights Day",
    },
    // question9=
    {
        q:"Which among the following stadiums is known for indoor games?",
        A:"Ambedkar Stadium",
        B:"Jawaharlal Nehru Stadium",
        C:"Footballs",
        D:"Shivaji Stadium",
    },
    // question10=
    {
        q:"The term ‘rally’ is related to …",
        A:"Football",
        B:"Badminton",
        C:"Polo",
        D:"Boxing"
    }
];

//Answers key

var answers=["A","A","C","B","A","B","D","D","B","B"];
var correct="Your answer is correct";
var wrong="Wrong answer";
var correctAnswer=0;
var wrongAnswers=0;
var userResponse=[];
//user guides

var greetings="Welcome are you ready for the quiz. Enter 1 to start your quiz: ";
console.log(greetings);
var mode=prompt();
if(mode=="1")
    {
        console.log("Quiz Started");
        for (let index = 0; index < questionList.length; index++) 
        {
            console.log(questionList[index]);
            userResponse=prompt();
           // Checking if the answer is correct or not
            if (answers[index]===userResponse.toUpperCase()) 
            {
                console.log(correct);
                console.log("Press enter to continue");
                ++correctAnswer;
            }
            //if answer is wrong
            else
            {
                console.log(wrong);
                console.log("Press enter to continue");
                ++wrongAnswers;
            }
        }

    //user Result
    console.log(`Your result is 
    Correct Answer : ${correctAnswer}
    Wrong Answers  : ${wrongAnswers}`);

    }