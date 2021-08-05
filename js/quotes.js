class quote {
    constructor(sentence, author) {
        this.sentence = sentence
        this.author = `- ${author} -`
    }
}

const quoteSentence = document.querySelector("#quote-sentence")
const quoteAuthor = document.querySelector("#quote-author")

const quotes = [
    new quote("I never dreaed about success, I worked for it.", "Estee Lauder"),
    new quote("Do not try to be original, just try to be good.", "Paul Rand"),
    new quote("Do not be afraid to give up the good to go for the great.", "Jogn D. Rockefeller"),
    new quote("It is better to fail in originality\nthan to succeed in imitation.", "Herman Melville"),
    new quote("Success if walking from failure to failure\nwith no loss of enthusiasm.", "Winston Churchill"),
    new quote("응애 맘마조", "ㅇㅇ")
]

const quoteNum = Math.floor(Math.random() * quotes.length)

quoteSentence.innerText = quotes[quoteNum].sentence
quoteAuthor.innerText = quotes[quoteNum].author