document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Mensagem enviada com sucesso!");
          this.reset(); // Reseta o formulário
        } else {
          alert("Ocorreu um erro ao enviar a mensagem.");
        }
      })
      .catch((error) => console.error("Erro ao enviar o formulário:", error));
  });

document.querySelector("[destaque]").setAttribute("title", "Destaque");

const dynamic = document.getElementById("dynamicSRC");

function dynamicalImage() {
  const date = new Date();
  const month = date.getMonth();

  switch (month) {
    case 0:
      dynamic.src = "img/month/janeiro.png";
    case 1:
      dynamic.src = "img/month/fevereiro.png";
    case 2:
      dynamic.src = "img/month/março.png";
    case 3:
      dynamic.src = "img/month/abril.png";
    case 4:
      dynamic.src = "img/month/maio.png";
    case 5:
      dynamic.src = "img/month/junho.png";
    case 6:
      dynamic.src = "img/month/julho.png";
    case 7:
      dynamic.src = "img/month/agosto.png";
    case 8:
      dynamic.src = "img/month/setembro.png";
    case 9:
      dynamic.src = "img/month/outubro.png";
    case 10:
      dynamic.src = "img/month/novembro.png";
    case 11:
      dynamic.src = "img/month/dezembro.png";
  }
}

dynamicalImage();
