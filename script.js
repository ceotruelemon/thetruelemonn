function openForm(role) {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    document.getElementById("roleSelect").value = role;
    toggleRoleFields();
  }, 500);
}

function toggleRoleFields() {
  const role = document.getElementById("roleSelect").value;
  document.getElementById("freelancerFields").style.display =
    role === "Freelancer" ? "block" : "none";
  document.getElementById("clientFields").style.display =
    role === "Client" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("roleSelect")
    .addEventListener("change", toggleRoleFields);
});
