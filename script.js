const form = document.getElementById("customerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;

  alert("✅ 感谢您的提交，我们将尽快联系您！");
  form.reset();
});
