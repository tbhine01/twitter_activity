fetch("/tweets")
.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data)

    const container = document.getElementById("container")

    data.forEach((twitterData) => {
        const card = document.createElement("div")
        const name = document.createElement("h3")
        const tweet = document.createElement("p")
        const likes = document.createElement("p")

        name.innerText = twitterData.author
        tweet.innerText = twitterData.tweet
        likes.innerText = `Likes: ${twitterData.likes}`

        card.classList.add("cards")

        card.appendChild(name)
        card.appendChild(tweet)
        card.appendChild(likes)

        container.appendChild(card)
    })
})

.catch((error) => {
    console.log(error)
})