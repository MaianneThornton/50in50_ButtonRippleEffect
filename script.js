const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // gets the position of the click (in the entire viewport NOT in the button)
        const x = e.clientX
        const y = e.clientY

        // the position of the button (will always be the same - button does not move)
        // target is always the element that the event fires off of (the button in this case)
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // the position of the click inside the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // create span and add to the DOM
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        this.appendChild(circle)

        // remove from the DOM (otherwise spans stay for each click)
        setTimeout(() => circle.remove(), 500);
    })
})