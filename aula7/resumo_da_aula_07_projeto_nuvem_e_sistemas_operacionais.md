# Resumo: Projeto - Nuvem e Sistemas Operacionais (Aula 07)

**Instituição:** Fatec  
**Professor:** Me. Deivison S. Takatu  
**Disciplina:** Nuvem e Sistemas Operacionais  

---

## 1. Visão Geral do Projeto

A proposta desta etapa é evoluir a aplicação criada na aula anterior (desenvolvida em **Node.js** e **Express**), transformando-a em um **Dashboard Completo de Monitoramento de Sistema Operacional**.

Enquanto a versão anterior apenas exibia informações básicas (hostname, plataforma, arquitetura, CPUs, memória e uptime), esta nova versão expande a aplicação para entregar um painel executivo e técnico mais detalhado e profissional sobre o ambiente computacional.

---

## 2. Passo a Passo Técnico de Desenvolvimento e Deploy

### 2.1. Desenvolvimento da API REST (Express.js)
1. **Inicialização do Projeto:** Criar pasta e abrir no VS Code.
2. **Instalação de Dependências:**
   - Express: `npm install express`
   - CORS: `npm install cors express`
3. **Criação da Aplicação (`server.js` / `index.js`):** Implementar a lógica de leitura das métricas do SO.
4. **Execução Local:** `node index.js`

> **Nota sobre CORS:** O *Cross-Origin Resource Sharing* (CORS) é um mecanismo de segurança necessário para controlar o acesso às requisições entre domínios diferentes no navegador.

### 2.2. Publicação e Hospedagem no Render
* **O que é o Render?** Uma plataforma de hospedagem em nuvem moderna (PaaS) que suporta Node.js, Python, entre outras linguagens, com suporte a *Continuous Deployment* (Deploy Contínuo) integrado ao GitHub, SSL gratuito e escalabilidade sob demanda.
* **Passos para o Deploy:**
  1. Subir o código para um repositório no **GitHub**.
  2. Criar uma conta no **Render** (`dashboard.render.com`).
  3. Criar um novo **Web Service** e conectar o repositório do GitHub.
  4. Configurar os comandos de execução:
     - **Build Command:** `node` (ou `npm install`)
     - **Start Command:** `node index.js` (ou `node server.js`)
  5. Realizar o deploy e acessar a aplicação via URL disponibilizada (`*.onrender.com`).

---

## 3. Estrutura e Métricas do Dashboard de Monitoramento

O dashboard exibe uma visão unificada dividida em indicadores visuais e dados detalhados do sistema:

### 3.1. Indicadores Chave de Desempenho (KPIs Visuais)
* **Uso de Memória RAM (%):** Porcentagem consumida da memória principal.
* **Uso Médio da CPU (%):** Carga percentual dos núcleos do processador.
* **Uptime Formatado:** Tempo decorrido desde a inicialização do sistema (ex: `5d 10h 55m`).
* **Arquivos do Projeto:** Quantidade total de arquivos no diretório.
* **IP Principal:** Endereço IP do servidor.
* **Status Geral:** Condição do sistema (ex: `NORMAL`).

### 3.2. Detalhamento dos Módulos do Sistema
* **Sistema & Kernel:** Hostname, Plataforma (`linux`), Arquitetura (`x64`), Endianness (`LE`), Versão do Kernel (ex: `6.8.0-1052-aws`) e versão do Node.js.
* **Usuário & Ambiente:** Nome do usuário (`render`), Home directory (`/opt/render`), Shell (`/bin/bash`), UID/GID, PID do processo, variáveis de ambiente (`PORT: 10000`, `NODE_ENV: production`).
* **Memória RAM:** Memória Total, Usada, Livre e distribuição média por núcleo de CPU.
* **CPU:** Processador (ex: *AMD EPYC 7R13*), quantidade de núcleos, uso individual por núcleo e *Load Average* (processos aguardando execução na CPU).
* **Rede:** Interfaces ativas, família dos endereços IP (IPv4 / IPv6).
* **Listagem de Arquivos:** Nome, tipo (Diretório ou Arquivo) e tamanho dos arquivos do projeto local (`package.json`, `server.js`, etc.).

---

## 4. Detecção de Ambiente (Local vs. Nuvem)

A aplicação identifica de forma automática se está rodando em ambiente local ou em nuvem (*Cloud/Render*):
* **Análise Comparativa:** Permite avaliar as diferenças práticas entre execução *on-premise/local* e em nuvem virtualizada.
* **Conceitos Relacionados:** Virtualização, máquinas virtuais em nuvem, infraestrutura sob demanda e variáveis de ambiente diferenciadas.

---

## 5. Atividades Solicitadas no Projeto

1. **Evolução do Código:** Desenvolver o dashboard completo em Node.js/Express e realizar o deploy no Render.
2. **Estudo Comparativo Multicloud:**
   * Escolher uma segunda plataforma de hospedagem alternativa ao Render (ex: Vercel, Railway, Fly.io, Heroku, etc.).
   * Realizar o deploy da mesma aplicação nessa segunda plataforma.
3. **Elaboração de Relatório Técnico:**
   * Comparar o desempenho e as diferenças de infraestrutura dos dois provedores analisados.
   * Documentar as divergências encontradas nas métricas do Sistema Operacional (ex: kernel, CPU, memória alocada, IPs).
   * Descrever os conceitos teóricos de SO e Cloud aplicados (processos, gerenciamento de memória, uso de CPU, virtualização e microsserviços).

---

## 6. Referências Bibliográficas

* TANENBAUM, Andrew S.; BOS, Herbert. **Sistemas Operacionais Modernos**. 4. ed. Pearson, 2016.
* SILBERSCHATZ, A.; GALVIN, P. B.; GAGNE, G. **Fundamentos de Sistemas Operacionais**. 9. ed. LTC, 2015.
* STALLINGS, William. **Sistemas Operacionais: Conceitos e Projetos**. 8. ed. Pearson, 2015.
* DOCKER INC. **Docker Documentation**. Disponível em: https://docs.docker.com