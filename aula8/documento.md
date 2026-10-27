# Documentação Técnica Consolidada — Ronnin System

Este documento reúne contexto, requisitos, arquitetura, API, operação, validação e deploy do projeto **Ronnin System**. Políticas de contribuição, segurança, conduta e licença ficam em arquivos próprios (`CONTRIBUTING.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md` e `LICENSE.txt`) para evitar misturar responsabilidades.

---

## 1. Objetivo e Escopo

O **Ronnin System** é um sistema web moderno e escalável voltado para o gerenciamento, monitoramento e controle operacional. Executado sobre o ecossistema Node.js, ele abstrai a complexidade do ambiente de execução e disponibiliza interfaces interativas e endpoints estruturados para consulta de dados em tempo real.

### Incluído
- Painel web responsivo em `/`;
- API REST para consulta de status e recursos do sistema em `/api/v1/status` (ou `/api/stats`);
- Rota de verificação de integridade (*health check*) em `/healthz`;
- Monitoramento de recursos de execução (CPU, memória, status do processo e uptime);
- Exposição do contexto do ambiente (versão do Node.js, modo de execução, variáveis de ambiente relevantes);
- Interface interativa com atualização em tempo real e controles de pausa/reinicio de leitura;
- Suporte a execução local e arquivo de especificação para deploy automatizado no Render (`render.yaml`).

### Fora do Escopo
- Gerenciamento persistente de sessões complexas e banco de dados relacional distribuído nesta camada central;
- Garantia de representação de hardware físico quando executado em ambientes de contêineres e serverless com recursos limitados;
- Módulos de controle remoto direto do sistema operacional do servidor host.

---

## 2. Tecnologias e Execução

- **Runtime:** Node.js 18.15 ou superior;
- **Servidor Web:** Módulo HTTP nativo do Node.js (ou framework minimalista de alta performance);
- **Frontend:** HTML5, CSS3 e JavaScript (ES6+) sem dependência obrigatória de frameworks pesados;
- **Hospedagem/Cloud:** Render como plataforma de deploy primária pré-configurada via `render.yaml`.

### Execução Local

```bash
git clone https://github.com/kaua0083/ronnin-system.git
cd ronnin-system
npm install
npm start
```

Acesse o sistema em `http://localhost:3000`. Para ambiente de desenvolvimento com suporte a recarregamento automático:
```bash
npm run dev
```

### Variáveis de Ambiente

| Variável | Padrão | Finalidade |
| :--- | :--- | :--- |
| `PORT` | `3000` | Porta HTTP utilizada pelo serviço. |
| `NODE_ENV` | `development` | Define o ambiente de execução (`development`, `production` ou `test`). |
| `SHOW_HOST_DETAILS` | `false` | Exibe informações detalhadas do host quando habilitado. |

---

## 3. Estrutura e Arquitetura

### Estrutura de Arquivos

```text
ronnin-system/
├── README.md                         # Visão geral e guia rápido
├── DOCUMENTACAO.md                  # Documentação técnica consolidada
├── CONTRIBUTING.md                  # Diretrizes para contribuição e Pull Requests
├── SECURITY.md                      # Política de segurança e reporte de falhas
├── CODE_OF_CONDUCT.md               # Código de conduta da comunidade
├── LICENSE.txt                      # Licença MIT do projeto
├── render.yaml                      # Configuração de Infraestrutura como Código (Render)
├── package.json                     # Metadados e scripts do projeto
├── server.js                        # Servidor HTTP, roteamento e middlewares de segurança
├── lib/
│   ├── metrics.js                   # Coleta, normalização e cache de métricas
│   └── page.js                      # Renderização do template HTML principal
└── public/
    ├── css/
    │   └── style.css                # Estilização responsiva do painel
    └── js/
        └── app.js                   # Lógica client-side, requisições de API e UI
```

### Fluxo de Dados e Requisições

```text
       Sistema Operacional / Container
                     │
                     ▼
  lib/metrics.js ── Coleta, normalização e cache curto
                     │
                     ▼
  server.js ─────── Roteamento, validação HTTP, segurança (CSP)
                     │
                     ├── /api/stats (ou /api/v1/status) ── JSON
                     ├── /healthz ──────────────────────── Status OK
                     └── / ─────────────────────────────── HTML / Dashboard
                                                           │
                                                           ├── public/js/app.js
                                                           └── public/css/style.css
```

---

## 4. API

A API aceita exclusivamente os métodos `GET` e `HEAD`. Métodos não suportados retornam `405 Method Not Allowed`, e rotas não registradas retornam `404 Not Found`.

| Rota | Método | Resposta | Descrição |
| :--- | :--- | :--- | :--- |
| `/` | `GET` | HTML | Interface gráfica principal do Ronnin System. |
| `/api/stats` | `GET` | JSON | Métricas atuais do sistema e dados de contexto. |
| `/healthz` | `GET` | JSON | Check de disponibilidade (`{"status": "ok"}`). |
| `/css/*`, `/js/*` | `GET` | Estáticos | Arquivos do ecossistema do frontend. |

### Exemplo de Teste de Endpoints

```bash
curl -i http://localhost:3000/healthz
curl -i http://localhost:3000/api/stats
curl -I http://localhost:3000/
```

---

## 5. Requisitos Verificáveis

| ID | Requisito | Critério de Aceite |
| :--- | :--- | :--- |
| **RF-01** | Exibir Painel | `GET /` deve retornar status `200 OK` com o conteúdo HTML do dashboard. |
| **RF-02** | Expor Métricas | `GET /api/stats` deve retornar estrutura JSON válida com indicadores do sistema. |
| **RF-03** | Atualização do Frontend | O cliente web deve consultar `/api/stats` periodicamente via polling. |
| **RF-04** | Atualização Manual | A interface deve possuir um botão para acionar requisição imediata de métricas. |
| **RF-05** | Pausa de Leitura | O painel deve permitir interromper o ciclo de atualização temporariamente. |
| **RF-06** | Health Check | `GET /healthz` deve retornar `{"status":"ok"}` com status HTTP 200. |
| **RNF-01** | Compatibilidade | Funcionar perfeitamente em Node.js v18.15+. |
| **RNF-02** | Ausência de Bundlers | Execução direta via Node.js sem etapa de build obrigatória para inicialização. |
| **RNF-03** | Segurança | Aplicação de cabeçalhos de segurança (CSP, X-Content-Type-Options). |
| **RNF-04** | Operação em Cloud | Ler dinamicamente a porta através da variável `PORT`. |

---

## 6. Validação e Deploy

### Validação Mínima Local

1. Inicialização do serviço:
   ```bash
   npm start
   ```
2. Validação automatizada via terminal:
   ```bash
   curl -fsS http://localhost:3000/healthz
   curl -fsS http://localhost:3000/api/stats
   curl -fsSI http://localhost:3000/
   ```
3. Verificação manual no navegador: testes de interatividade (botão de pausa, atualização manual e responsividade do layout).

### Deploy no Render

O projeto contém o arquivo `render.yaml` preparado para implantação automática.

1. Conecte o repositório `kaua0083/ronnin-system` ao dashboard do **Render**.
2. O Render identificará automaticamente o arquivo `render.yaml`.
3. Os comandos padrão executados serão:
   - **Build:** `npm install`
   - **Start:** `npm start`
4. O *Health Check Path* deve ser configurado para `/healthz`.

---

## 7. Comparação de Plataformas (Modelo de Avaliação)

A tabela abaixo deve ser preenchida após a homologação prática do projeto em ambiente cloud principal e secundário:

| Evidência | Render (Configurado) | Segunda Plataforma (Ex: Railway/Vercel) |
| :--- | :--- | :--- |
| **URL Pública** | *A preencher com link real* | *A preencher com link real* |
| **Data e Tempo de Build** | *A preencher* | *A preencher* |
| **Resposta `/healthz`** | *A preencher* | *A preencher* |
| **Resultado `/api/stats`** | *A preencher* | *A preencher* |
| **Logs e Observações** | *A preencher* | *A preencher* |

---

## 8. Documentos Relacionados

- **`CONTRIBUTING.md`**: Guia para criação de branches, formato de commits e submissão de Pull Requests.
- **`SECURITY.md`**: Diretrizes de segurança, controle de riscos e instruções para reporte confidencial de vulnerabilidades.
- **`CODE_OF_CONDUCT.md`**: Padrões de conduta e convivência saudável para contribuidores do projeto.
- **`LICENSE.txt`**: Termos da Licença MIT sob a qual o projeto é distribuído.