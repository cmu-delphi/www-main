export default function initializeTableOfContent() {
    const toc = document.getElementById('TOC');
    if (!toc) {
        return;
    }
    toc.remove(); // remove from old place

    const container = document.querySelector('.blog-toc-container');
    if (!container) {
        return;
    }

    const source = toc.querySelector('ul');
    const target = container.querySelector('ol');

    const convert = (target, li) => {
        target.appendChild(li);
        const sub = li.querySelector('ul');
        if (!sub) {
            // done
            return;
        }
        li.classList.add('uk-parent');
        sub.remove();
        const subTarget = document.createElement('ol');
        subTarget.classList.add('uk-nav-sub');
        li.appendChild(subTarget);
        Array.from(sub.children).forEach((subLi) => convert(subTarget, subLi));
    };

    Array.from(source.children).forEach((li) => {
        convert(target, li);
    });

    // done make visible
    container.classList.remove('uk-hidden');
}