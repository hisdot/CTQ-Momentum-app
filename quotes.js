const quotes = [{
        quote: "When one door of happiness closes, another one opens; but often we look so long at the closed door that we do not see the one which has opened for us.",
        author: "Helen Keller"
    },
    {
        quote: "Personality can open doors, but only character can keep them open.",
        author: "Elmer G. Letterman"
    },
    {
        quote: "Whoever ceases to be a student has never been a student.",
        author: "George Iles"
    },
    {
        quote: "Truth is truth To the end of reckoning.",
        author: "William Shakespeare"
    },
    {
        quote: "To repeat what others have said, requires education; to challenge it, requires brains.",
        author: "Mary Pettibone Poole"
    },
    {
        quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
        author: "Marcus Aurelius Antoninus"
    },
    {
        quote: "The body is shaped, disciplined, honored, and in time, trusted.",
        author: "Martha Graham"
    },
    {
        quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        author: "Dale Carnegie"
    },
    {
        quote: "The man who is swimming against the stream knows the strength of it.",
        author: "Woodrow Wilson"
    },
    {
        quote: "Life is tough, but it's tougher when you're stupid.",
        author: "John Wayne"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;