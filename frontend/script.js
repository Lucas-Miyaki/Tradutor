async function traduzir() {
  const texto = document.getElementById("inputText").value;
  const targetLang = document.getElementById("langSelect").value;

  try {
    const response = await fetch("http://localhost:3000/traduzir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: texto, target_lang: targetLang })
    });

    const data = await response.json();
    document.getElementById("outputText").value = data.translations?.[0]?.text || "Erro na tradução.";
  } catch (e) {
    console.error(e);
    document.getElementById("outputText").value = "Erro na conexão com o servidor.";
  }
}
