const images = []

for(i = 1; i <= 11; i++)
    images.push(`img${i}.jpg`)

const imageNum = Math.floor(Math.random() * images.length)

const newImage = document.createElement("img")
newImage.src = `backgroundImages/${images[imageNum]}`

document.body.append(newImage)