import UIkit from "uikit/dist/js/uikit.js";

(() => {
  const markSubmitted = () => {
    if (!localStorage) {
      return;
    }
    // expires in a month
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);
    localStorage.setItem("feedback-submitted", expiresAt.toString());

    // send a google analytics event
    if (window.ga) {
      window.ga("send", "event", "feedback", "open", "show feedback form", "true");
    }
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

  const showForm = (formLink) => {
    const url = `${formLink}${encodeURIComponent(location.href)}&embedded=true`;
    UIkit.modal.dialog(
      `<button class="uk-modal-close-default" type="button" uk-close></button><div class="feedback-modal"><iframe src="${url}" uk-video></iframe></div>`
    );
  };
  const btn = document.querySelector(".feedback-button");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      markSubmitted();
      showForm(btn.href);
    });
  }

  const container = document.querySelector(".feedback-popup-container");

  if (container && !wasRecentlySubmitted()) {
    const delayMin = Number.parseInt(container.dataset.delayMin, 10) * 1000;
    const delayMax = Number.parseInt(container.dataset.delayMax, 10) * 1000;
    const delay = delayMin + Math.random() * (delayMax - delayMin);

    const feedbackLikelihoodDesktop = Number.parseFloat(container.dataset.likeDesktop);
    const feedbackLikelihoodMobile = Number.parseFloat(container.dataset.likeMobile);
    const isMobile = window.matchMedia("only screen and (max-width: 700px)").matches;

    const showByChance =
      (isMobile && Math.random() <= feedbackLikelihoodMobile) ||
      (!isMobile && Math.random() <= feedbackLikelihoodDesktop);

    const duration = Number.parseInt(container.dataset.duration, 10) * 1000;
    const formLink = container.dataset.href;

    const showFeedbackNotification = () => {
      const elem = UIkit.notification({
        message: container.innerHTML,
        pos: "bottom-right",
        timeout: duration,
        clsContainer: "feedback-message uk-notification",
      });
      elem.$el.querySelector("div").addEventListener("click", (e) => {
        // stop auto close
        e.stopPropagation();
        e.preventDefault();
      });
      elem.$el.querySelector(".feedback-button").addEventListener("click", (e) => {
        e.preventDefault();
        elem.close(true);
        markSubmitted();
        showForm(formLink);
      });
    };
    // initial delay
    if (showByChance) {
      setTimeout(showFeedbackNotification, delay);
    }
  }
})();
