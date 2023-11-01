const parrafos = [
  "The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.",
  "The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default.",
  "The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible response. The user-agent or the user should choose one of them.",
  "The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error",
  "The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
  "Here must be HTTP 600, but it doesn't exist or was 'not found'. So that's 404, simply 'not found' xd",
]

var flexContainer = document.getElementById("flex")

for (i = 1; i < 7; i++) {
  var card = document.createElement("div")
  card.className = "card"
  card.id = `c${i}`

  var imgBox = document.createElement("div")
  imgBox.className = "img-box"

  var textBox = document.createElement("div")
  textBox.className = "text-box"

  var titleBox = document.createElement("h3")
  titleBox.className = "title-box"

  var contentBox = document.createElement("p")
  contentBox.className = "content-box"

  var button = document.createElement("a")
  button.className = "button-box"

  var img = document.createElement("img")
  img.src = `https://http.cat/images/${i}00.jpg`
  img.alt = `Gato ${i}00`

  titleBox.textContent = `Cat ${i}00`

  contentBox.textContent = parrafos[i - 1]

  button.textContent = "More info."
  button.href = `https://http.cat/status/${i}00`
  button.target = "_blank"

  textBox.appendChild(titleBox)
  textBox.appendChild(contentBox)
  textBox.appendChild(button)
  imgBox.appendChild(img)
  card.appendChild(imgBox)
  card.appendChild(textBox)
  flexContainer.appendChild(card)
}
