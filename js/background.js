const images = []

for(i = 1; i <= 11; i++)
    images.push(`img${i}.jpg`)

const imageNum = Math.floor(Math.random() * images.length)

document.body.background = `backgroundImages/${images[imageNum]}`