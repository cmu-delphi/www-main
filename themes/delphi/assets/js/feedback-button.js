(() => {
  const btn = document.querySelector(".feedback-button");
  if (!btn) {
    return;
  }

  const delay = Number.parseInt(btn.dataset.delay, 10) * 1000;
  const duration = Number.parseInt(btn.dataset.duration, 10) * 1000;
  const requestText = btn.dataset.request;

  const showForm = () => {
    const url = `${btn.href}${encodeURIComponent(location.href)}&embedded=true`;
    UIkit.modal.dialog(
      `<button class="uk-modal-close-default" type="button" uk-close></button><div class="feedback-modal"><iframe src="${url}" uk-video></iframe></div>`
    );
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showForm();
  });

  const showFeedbackNotification = () => {
    const elem = UIkit.notification({
      message: `<a class="uk-link-muted feedback-button" href="${btn.href}">${requestText}</a>`,
      status: "primary",
      pos: "bottom-right",
      timeout: duration,
    });
    let clicked = false;
    elem.$el.querySelector("a.feedback-button").addEventListener("click", (e) => {
      e.preventDefault();
      elem.close(true);
      clicked = true;
      showForm();
    });
    elem.on("close", () => {
      if (!clicked) {
        setTimeout(showFeedbackNotification, interval);
      }
    });
  };
  // initial delay
  setTimeout(showFeedbackNotification, delay);
})();
