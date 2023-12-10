"usestrict";

window.onload = function() {
    const widthDisplay = document.getElementById('width');
    const heightDisplay = document.getElementById('height');
    const unitSelector = document.getElementById('unit-selector');

    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    function displayWindowSize() {
        let width, height;
        switch (unitSelector.value) {
            case 'px':
                width = window.innerWidth;
                height = window.innerHeight;
                break;
            case 'em':
                width = window.innerWidth / baseFontSize;
                height = window.innerHeight / baseFontSize;
                break;
            case 'rem':
                width = window.innerWidth / baseFontSize;
                height = window.innerHeight / baseFontSize;
                break;
            case '%':
                width = (window.innerWidth / window.screen.availWidth) * 100;
                height = (window.innerHeight / window.screen.availHeight) * 100;
                break;
        }
        widthDisplay.textContent = `Width: ${width}${unitSelector.value}`;
        heightDisplay.textContent = `Height: ${height}${unitSelector.value}`;
    }

    // Display initial size
    displayWindowSize();

    // Update size display upon window resize or unit selection
    window.addEventListener('resize', displayWindowSize);
    unitSelector.addEventListener('change', displayWindowSize);
}