window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const top = document.querySelector("#top");
  const social = document.querySelector("#whatsapp");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    top.classList.remove("hidden");
    top.classList.add("flex");
    social.classList.remove("hidden");
    social.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    social.classList.remove("flex");
    social.classList.add("hidden");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      Swal.fire({
        text: "Pesanan Sudah Dikirim",
        icon: "success",
        color: "#088395",
      });
    });
  });
});
