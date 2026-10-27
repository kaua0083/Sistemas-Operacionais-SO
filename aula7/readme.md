# Sistemas Operacionais - Aula 7 & Deploy do Ronnin System

Este repositório contém os materiais de apoio e anotações referentes à **Aula 7** da disciplina de Sistemas Operacionais (SO), além de instruções completas de integração e implantação (*deploy*) do projeto [Ronnin System](https://github.com/kaua0083/ronnin-system).

---

## 📌 Sumário
- [Resumo do Conteúdo: Aula 7 (Sistemas Operacionais)](#-resumo-do-conteúdo-aula-7-sistemas-operacionais)
  - [Conceitos Principais](#conceitos-principais)
  - [PAGINAÇÃO E SEGMENTAÇÃO](#paginação-e-segmentação)
  - [Algoritmos de Substituição de Páginas](#algoritmos-de-substituição-de-páginas)
- [Projeto Relacionado: Ronnin System](#-projeto-relacionado-ronnin-system)
- [🚀 Passo a Passo: Deploy do Ronnin System no Render](#-passo-a-passo-deploy-do-ronnin-system-no-render)
  - [Pré-requisitos](#pré-requisitos)
  - [Etapa 1: Preparando o Repositório no GitHub](#etapa-1-preparando-o-repositório-no-github)
  - [Etapa 2: Criando a Conta e Novo Serviço no Render](#etapa-2-criando-a-conta-e-novo-serviço-no-render)
  - [Etapa 3: Configuração do Web Service](#etapa-3-configuração-do-web-service)
  - [Etapa 4: Configuração de Variáveis de Ambiente](#etapa-4-configuração-de-variáveis-de-ambiente)
  - [Etapa 5: Deploy e Monitoramento](#etapa-5-deploy-e-monitoramento)

---

## 📖 Resumo do Conteúdo: Aula 7 (Sistemas Operacionais)

O material desta aula aborda o **Gerenciamento de Memória** e **Memória Virtual**, fundamentais para entender como os Sistemas Operacionais gerenciam a execução concorrente de processos e o uso eficiente da RAM.

### Conceitos Principais

1. **Memória Virtual:**
   - Técnica que permite ao sistema operacional executar processos que não estão totalmente carregados na memória física (RAM).
   - Abstrai a memória em um espaço de endereçamento lógico contínuo.

2. **Endereçamento Lógico vs. Físico:**
   - **Endereço Lógico (Virtual):** Gerado pela CPU durante a execução.
   - **Endereço Físico:** Endereço real na placa de memória RAM.
   - **MMU (Memory Management Unit):** Módulo de hardware que mapeia endereços virtuais em endereços físicos em tempo de execução.

### Paginação e Segmentação

* **Paginação (*Paging*):**
  - O espaço de memória virtual é dividido em blocos de tamanho fixo chamados **Páginas**.
  - A memória física é dividida em blocos do mesmo tamanho chamados **Molduras de Página (*Frames*)**.
  - **Tabela de Páginas (*Page Table*):** Mantém o mapeamento entre páginas virtuais e quadros físicos.
  - **Page Fault (Falta de Página):** Interrupção gerada quando o processo tenta acessar uma página que ainda não está carregada na RAM (precisando ser buscada no disco/swap).

* **Segmentação (*Segmentation*):**
  - Divisão lógica da memória com base nas divisões do programa (código, dados, pilha, tabela de símbolos).
  - Blocos de tamanho variável.

### Algoritmos de Substituição de Páginas

Quando ocorre um *Page Fault* e não há molduras livres na RAM, o SO escolhe uma página para remover. Os algoritmos mais comuns são:
* **FIFO (First-In, First-Out):** Remove a página que está na memória há mais tempo.
* **LRU (Least Recently Used):** Remove a página que não é utilizada há mais tempo.
* **OPT (Algoritmo Ótimo):** Substitui a página que não será usada pelo maior período de tempo no futuro (teórico/ideal).

---

## 🔗 Projeto Relacionado: Ronnin System

Para visualizar a aplicação de conceitos práticos de sistemas e arquitetura, acesse o repositório principal:

👉 **[github.com/kaua0083/ronnin-system](https://github.com/kaua0083/ronnin-system)**

---

## 🚀 Passo a Passo: Deploy do Ronnin System no Render

O [Render](https://render.com/) é uma plataforma em nuvem para hospedagem de aplicações web, bancos de dados e serviços de forma automatizada.

### Pré-requisitos
- Conta ativa no GitHub.
- Conta criada no [Render.com](https://render.com/).
- Repositório [ronnin-system](https://github.com/kaua0083/ronnin-system) no GitHub.

---

### Etapa 1: Preparando o Repositório no GitHub
1. Certifique-se de que o projeto possui um arquivo `package.json` (para Node.js) ou `Dockerfile` na raiz do projeto.
2. Verifique se os scripts de inicialização estão definidos no `package.json`:
   ```json
   "scripts": {
     "build": "npm run build",
     "start": "node index.js"
   }
   ```
3. Certifique-se de usar a variável de ambiente `PORT` fornecida pelo servidor (ex: `process.env.PORT || 3000`).

---

### Etapa 2: Criando a Conta e Novo Serviço no Render
1. Acesse o [Dashboard do Render](https://dashboard.render.com/).
2. Faça login utilizando sua conta do **GitHub**.
3. No painel, clique no botão **"New +"** no canto superior direito.
4. Selecione **"Web Service"**.

---

### Etapa 3: Configuração do Web Service
1. Conecte sua conta do GitHub e selecione o repositório **`kaua0083/ronnin-system`**.
2. Preencha as informações básicas do serviço:
   * **Name:** `ronnin-system` (ou o nome de sua preferência)
   * **Region:** Escolha a região mais próxima (ex: *Oregon (US West)* ou *Ohio (US East)*)
   * **Branch:** `main` (ou a branch principal do seu repositório)
   * **Root Directory:** Deixe em branco (se o projeto estiver na raiz)
   * **Runtime:** Selecione o ambiente do seu projeto (ex: `Node`, `Docker`, `Python`)

3. Configuração dos Comandos de Build e Start:
   * **Build Command:**
     ```bash
     npm install && npm run build
     ```
   * **Start Command:**
     ```bash
     npm start
     ```
   *(Ajuste os comandos caso seu projeto utilize Yarn, Pnpm ou Docker)*

4. **Instance Type:** Selecione o plano **Free**.

---

### Etapa 4: Configuração de Variáveis de Ambiente
1. Role a página até a seção **"Environment Variables"** (Variáveis de Ambiente).
2. Clique em **"Add Environment Variable"**.
3. Adicione as chaves necessárias contidas no seu arquivo `.env` local (exemplo):
   * `NODE_ENV` = `production`
   * `DATABASE_URL` = `<sua-string-de-conexao>`
   * `JWT_SECRET` = `<sua-chave-secreta>`

---

### Etapa 5: Deploy e Monitoramento
1. Clique no botão **"Create Web Service"**.
2. O Render iniciará automaticamente o processo de build e deploy da sua aplicação.
3. Acompanhe os logs em tempo real na aba **"Logs"**.
4. Assim que o status mudar para **`Live`**, sua aplicação estará no ar!
5. O link público será gerado no topo da página, no formato:
   `https://ronnin-system.onrender.com`

---

## 🛠️ Suporte & Contato

Para dúvidas sobre o conteúdo da Aula 7 ou sugestões no projeto Ronnin System:
- **Autor:** Kauã ([@kaua0083](https://github.com/kaua0083))
- **Repositório do Sistema:** [Ronnin System](https://github.com/kaua0083/ronnin-system)