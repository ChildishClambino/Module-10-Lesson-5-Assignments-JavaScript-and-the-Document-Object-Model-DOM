// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

// Task 3: Implement additional styling changes based on user interaction
window.addEventListener('load', () => {
    const hoverBox = document.getElementById('hoverBox');
    const styleButton = document.getElementById('styleButton');
    const text = document.getElementById('text');
    const anotherBox = document.getElementById('anotherBox');

    // Mouse hover effect
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'yellow';
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = '';
    });

    // Button click to change style
    styleButton.addEventListener('click', () => {
        text.style.fontSize = '20px';
        text.style.color = 'red';
    });

    // Another box click to change style
    anotherBox.addEventListener('click', () => {
        anotherBox.style.border = '2px solid black';
        anotherBox.style.padding = '10px';
    });
});