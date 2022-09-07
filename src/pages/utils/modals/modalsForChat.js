const modal_account = document.querySelectorAll("[data-modal_account]");
const modal_add = document.querySelectorAll("[data-modal_add]");
const modal_delete = document.querySelectorAll("[data-modal_delete]");
const modal_clip = document.querySelectorAll("[data-modal_clip]");

 

function modalAccount() {
  modal_account.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      const modal = window.getElementById(trigger.dataset.modal_account);
      modal.classList.toggle("open");
      trigger.classList.toggle("modal-exit");
      const exits = window.querySelectorAll(".modal-exit");
    });
  });
}

modal_add.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal_add);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

modal_delete.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal_delete);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

modal_clip.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal_clip);
    modal.classList.toggle("open");
    trigger.classList.toggle("modal-exit");
    const exits = document.querySelectorAll(".modal-exit");
  });
});
