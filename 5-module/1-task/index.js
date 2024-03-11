function hideSelf() {
    let hiddenObj = document.querySelector(".hide-self-button");
    hiddenObj.addEventListener('click', function() {
        hiddenObj.setAttribute('hidden', true);
    });    
}
