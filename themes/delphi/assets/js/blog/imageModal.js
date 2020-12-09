function showModal(img) {
  // based on UIkit.modal.dialog but with full size

  const dialog = UIkit.modal(`<div class="uk-modal-full uk-modal" uk-modal>
                <div class="uk-modal-dialog blog-image-modal">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    ${img.outerHTML}
                </div>
            </div>`);
  dialog.show();
  UIkit.util.on(
    dialog.$el,
    "hidden",
    () => {
      return Promise.resolve().then(() => dialog.$destroy(true));
    },
    { self: true }
  );
}

export default function imageModal() {
  const refButton = document.createElement("button");
  refButton.classList.add("uk-icon-button", "uk-button-default", "blog-image-button");
  refButton.title = "Show image in fullscreen";
  refButton.innerHTML = `<svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="expand"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"></polygon><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"></polygon><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"></path><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"></path></svg>`;

  Array.from(document.querySelectorAll(".blog-blog p > img, .blog-blog .figure > img")).forEach((elem) => {
    const button = refButton.cloneNode(true);
    elem.insertAdjacentElement("beforebegin", button);
    elem.parentElement.classList.add("blog-image-wrapper");
    elem.className
      .split(" ")
      .filter(Boolean)
      .forEach((clazzName) => elem.parentElement.classList.add(clazzName));
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.blur();
      showModal(elem);
    });
  });
}
