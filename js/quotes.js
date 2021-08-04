class quote {
    constructor(sentence, author) {
        this.sentence = sentence
        this.author = author
    }
}

const quoteSentence = document.querySelector("#quote-sentence")
const quoteAuthor = document.querySelector("#quote-author")

const quotes = []
for(i = 0; i < 10; i++)
    quotes.push(new quote(`명언${i}`, `사람${i}`))

const quoteNum = Math.floor(Math.random() * quotes.length)

quoteSentence.innerText = quotes[quoteNum].sentence
quoteAuthor.innerText = quotes[quoteNum].author