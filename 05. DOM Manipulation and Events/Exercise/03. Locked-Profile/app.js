function lockedProfile() {
    let showButtonElements = document.querySelectorAll('div.profile button');

    Array.from(showButtonElements).forEach((button) => {
        button.addEventListener('click', info);
    });

    function info(e) {
        let targetButtonElement = e.target;
        let targetProfileElement = targetButtonElement.parentElement;

        if (targetProfileElement.children[2].checked) {
            return;
        }

        if (targetButtonElement.textContent === 'Show more') {
            targetProfileElement.children[9].style.display = 'block';
            targetButtonElement.textContent = 'Hide it';
        } else {
            targetProfileElement.children[9].style.display = 'none';
            targetButtonElement.textContent = 'Show more';
        }
    }
}