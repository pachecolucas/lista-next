"use client";

import { useState } from "react";

export default function Index() {
  console.log("Renderizando Index()");

  const [tarefas, setTarefas] = useState(["a", "b"]);
  const [nova, setNova] = useState("");

  function adicionar() {
    setTarefas([nova, ...tarefas]);
    setNova("");
    return false;
  }

  return (
    <div>
      <h1>Tarefas</h1>
      <ul className="border rounded-2xl m-4 p-4 flex flex-col gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            adicionar();
          }}
          className="flex"
        >
          <input
            value={nova}
            onChange={(e) => {
              setNova(e.target.value);
            }}
            placeholder="Nova tarefa aqui..."
            type="text"
            className="bg-slate-50 border w-full border-r-0 rounded-lg rounded-r-none pl-4"
          />
          <button type="submit" className="p-2 border rounded-lg rounded-l-none px-4 font-semibold">
            Salvar
          </button>
        </form>
        {tarefas.map((t, i) => (
          <li key={i} className="bg-slate-100 p-2 px-4 rounded-lg">
            {t}
          </li>
        ))}
        nova: {nova}
      </ul>
    </div>
  );
}
