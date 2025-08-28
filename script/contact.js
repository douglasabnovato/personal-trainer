// contact.js

export function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data
  })
    .then(resp => {
      if (resp.ok) {
        form.reset();
        showModal();
      } else {
        alert("Não foi possível enviar. Tente pelo WhatsApp.");
      }
    })
    .catch(() => alert("Erro de conexão. Tente novamente."));
}

function showModal() {
  const modal = document.getElementById("successModal");
  modal.classList.add("show");
  setTimeout(() => closeModal(), 5000);
}

export function closeModal() {
  const modal = document.getElementById("successModal");
  modal.classList.remove("show");
}
