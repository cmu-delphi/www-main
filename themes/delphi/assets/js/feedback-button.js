import UIkit from "uikit/dist/js/uikit.js";

const btn = document.querySelector(".feedback-button");
if (!btn) {
  return;
}

const delay = Number.parseInt(btn.dataset.delay, 10) * 1000;
const duration = Number.parseInt(btn.dataset.duration, 10) * 1000;

const showForm = () => {
  const url = `${btn.href}${encodeURIComponent(location.href)}&embedded=true`;
  UIkit.modal.dialog(
    `<button class="uk-modal-close-default" type="button" uk-close></button><div class="feedback-modal"><iframe src="${url}" uk-video></iframe></div>`
  );
};

const markSubmitted = () => {
  if (!localStorage) {
    return;
  }
  // expires in a month
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + 1);
  localStorage.setItem("feedback-submitted", expiresAt.toString());
};
const wasRecentlySubmitted = () => {
  if (!localStorage) {
    return false;
  }
  const r = localStorage.getItem("feedback-submitted");
  if (!r) {
    return false;
  }
  const expiresAt = new Date(r);
  // check if expired
  return expiresAt > new Date();
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  markSubmitted();
  showForm();
});

const showFeedbackNotification = () => {
  const elem = UIkit.notification({
    message: `<span uk-icon='icon: question'></span><span class="feedback-text">We'd love to hear from you</span><a class="uk-button uk-button-primary feedback-button" href="${btn.href}">Feedback survey</a>`,
    pos: "bottom-right",
    timeout: duration,
    clsContainer: "feedback-message uk-notification",
  });
  elem.$el.querySelector("div").addEventListener("click", (e) => {
    // stop auto close
    e.stopPropagation();
    e.preventDefault();
  });
  elem.$el.querySelector("a.feedback-button").addEventListener("click", (e) => {
    e.preventDefault();
    elem.close(true);
    markSubmitted();
    showForm();
  });
};
// initial delay
if (btn.dataset.popup === 'enable' && !wasRecentlySubmitted()) {
  setTimeout(showFeedbackNotification, delay);
}
