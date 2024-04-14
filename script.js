const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener('click',() =>{
    console.log('You clicked me!',button.id);
});
});