document.addEventListener('DOMContentLoaded', () => {
    const openbtn = document.querySelector('.openbtn');
    const modalwin = document.getElementById('modalwin');
    const closebtn = document.getElementById('closebtn');
    
    openbtn.addEventListener('click', () => {
        modalwin.classList.add (show);});
    
    closebtn.addEventListener('click', () => {
        modalwin.classList.remove = 'none';});
});