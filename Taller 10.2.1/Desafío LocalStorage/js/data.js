document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("data");
    const textoguardado = localStorage.getItem("texto");
      data.textContent = textoguardado 
  });
  