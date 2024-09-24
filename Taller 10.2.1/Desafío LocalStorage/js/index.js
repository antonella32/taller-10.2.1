document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const boton = document.getElementById("buttonText");
  
    boton.addEventListener("click", () => {
      const text = inputText.value;
      localStorage.setItem("texto", text); 
    });
  });
  