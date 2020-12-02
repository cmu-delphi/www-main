export function initializeCodeFolding(showAll) {
    Array.from(document.querySelectorAll('pre.r, pre.python, pre.bash, pre.sql, pre.cpp, pre.stan, pre.julia, pre.foldable')).forEach((elem) => {
        const wrapper = document.createElement('details');
        wrapper.classList.add('code-wrapper');
        wrapper.open = showAll || false;
        elem.parentElement.replaceChild(wrapper, elem);
        const summary = document.createElement('summary');
        summary.innerText = 'Code';
        wrapper.appendChild(summary);
        wrapper.appendChild(elem);
    });
}