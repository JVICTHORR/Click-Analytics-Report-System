"use client";

export default function Home() {

  async function handleClick() {

    try {

      const response = await fetch("/api/click", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          url: "https://google.com",
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {

        alert("Clique registrado com sucesso!");

      } else {

        alert("Erro ao salvar clique");
      }

    } catch (error) {

      console.error(error);

      alert("Erro inesperado");
    }
  }

  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      fontFamily: "Arial",
    }}>

      <h1>Sistema de Monitoramento de Cliques</h1>

      <button
        onClick={handleClick}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Registrar Clique
      </button>

    </main>
  );
}