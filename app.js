const button = document.getElementById('generate-color-btn')
const hex = document.querySelector("#hex")

// const colors = ['red', 'blue','yellow', 'green', 'purple', 'pink', 'orange']

button.addEventListener("click", () => {
    var randomNumber = Math.floor(
    Math.random() * 256
)

    var randomNumber2 = Math.floor(
    Math.random() * 256
)

    var randomNumber3 = Math.floor(
    Math.random() * 256
)
    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`
    const color = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`

        function componentToHex(c) {
         var hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
}

         function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

    const hexColor = rgbToHex(randomNumber, randomNumber2, randomNumber3)
    hex.innerHTML = hexColor;
    rgb.innerHTML = color;
    document.querySelector("#hex").style.color = "#fff";
    document.querySelector("#rgb").style.color = "#fff";
    document.querySelector("#generate-color-btn").style.color = "#fff";
    document.querySelector("#generate-color-btn").style.backgroundColor = color;
    document.querySelector("h1").style.color = color
})

