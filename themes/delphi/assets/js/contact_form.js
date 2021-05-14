(() => {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) {
    return;
  }
  function catLabel(cat) {
    const option = contactForm.querySelector(`option[value="${cat}"]`);
    return option ? option.textContent : cat;
  }
  contactForm.addEventListener("submit", (e) => {
    const f = e.currentTarget;
    e.preventDefault();
    const data = new FormData(f);
    const a = document.createElement("a");
    const subject = `New Submission: ${data.get("subject")}`;
    const body = `Name: ${data.get("_name")}\nCategory: ${catLabel(data.get("_category"))}\nMessage:\n\n${data.get(
      "body"
    )}\n\n`.replace(/\n/g, "%0A");
    a.href = `mailto:delphi+${data.get("_category") || "inquiries"}@cmu.edu?subject=${subject}&body=${body}`;
    document.body.append(a);
    a.click();
    a.remove();
  });
})();
