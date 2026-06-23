# 🚀 OpenF1 Driver Explorer

Projeto web desenvolvido com **Next.js + TypeScript** que consome a API pública da OpenF1 para exibir dados de pilotos de Fórmula 1 em uma interface moderna, interativa e orientada a dashboards.

---

## 📌 Sobre o Projeto

O **OpenF1 Driver Explorer** é uma aplicação que transforma dados brutos de uma API esportiva em uma experiência visual e intuitiva de exploração de informações.

O projeto evoluiu de uma interface simples baseada em dropdown para um **dashboard interativo com cards de pilotos e layout master-detail**, simulando padrões usados em sistemas reais de análise de dados.

---

## ✨ Funcionalidades

- 🔌 Integração com a **OpenF1 API**
- 🧑‍🏎️ Listagem de pilotos em formato de cards interativos
- 📊 Visualização de detalhes do piloto selecionado em tempo real
- 🖱️ Seleção dinâmica sem reload da página
- 🧭 Layout do tipo **master-detail (lista + painel de detalhes)**
- 🖼️ Exibição de headshot dos pilotos (quando disponível)
- 📱 Layout responsivo básico

---

## 🧠 Arquitetura e Decisões Técnicas

- Uso de **Next.js App Router**
- Separação entre:
  - camada de API (`/api/drivers`)
  - camada de UI (componentes React)
- Componentização com `DriverCard`
- Tipagem com **TypeScript**
- Consumo de API externa via `fetch`
- Estado local com `useState` e `useEffect`

---

## 🏗️ Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- OpenF1 API
- CSS (migração futura para Tailwind CSS)

---

## 📊 Padrão de Interface

O projeto utiliza o padrão:

> **Master-Detail Interface**

- Lista de pilotos (master)
- Painel de detalhes do piloto selecionado (detail)

Esse padrão é amplamente utilizado em dashboards profissionais, CRMs e sistemas de análise de dados.

---

## 🚧 Evolução do Projeto (Roadmap)

Este projeto está em evolução contínua e já possui melhorias planejadas:

- 🎨 Migração completa para Tailwind CSS
- 🔎 Barra de busca de pilotos
- 📊 Gráficos de performance (laps, ritmo, etc.)
- 🏁 Integração com sessões e corridas específicas
- 🗄️ Persistência com MongoDB (cache de dados da OpenF1)
- 📈 Comparação entre pilotos
- 🌙 Dark mode
- ☁️ Deploy em cloud (Vercel / AWS)

---

## 📌 Status

🟢 Em desenvolvimento ativo — primeira versão funcional concluída

---

## 🔗 Tecnologias em foco

Este projeto demonstra experiência prática com:

- Desenvolvimento Full Stack com Next.js
- Integração com APIs externas
- Construção de dashboards interativos
- TypeScript aplicado em frontend moderno
