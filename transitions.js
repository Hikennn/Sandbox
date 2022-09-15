window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let index = 0; index < anchors.length; index++) {
        const anchor = anchors[index];

        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }

}