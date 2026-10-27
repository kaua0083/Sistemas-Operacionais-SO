# Arquitetura e Especificação Técnica — Ronnin System

Este documento especifica a arquitetura, modelo de execução, API, diretrizes operacionais e estratégia de implantação do **Ronnin System**. As diretrizes de governança comunitária, segurança, código de conduta e termos de licença encontram-se em arquivos dedicados na raiz do repositório.

---

## 1. Visão Geral e Fronteiras do Sistema

O **Ronnin System** é um ecossistema leve de monitoramento e telemetria de aplicações web construído em Node.js. Seu objetivo central é fornecer métricas em tempo real sobre o ambiente de execução sem introduzir sobrecarga (*overhead*) relevante no servidor host.

### 1.1 Dentro do Escopo (In-Scope)
* **Interface Gráfica Dinâmica:** Painel Dashboard acessível via `/` com visualização interativa dos recursos do sistema.
* **Telemetria via API:** Endpoints RESTful (`/api/stats` ou `/api/v1/status`) fornecendo payload JSON formatado com métricas de memória, CPU, tempo de atividade e ambiente.
* **Sonda de Verificação de Saúde:** Endpoint `/healthz` para *liveness* e *readiness probes* integradas a orquestradores de nuvem.
* **Segurança de Cabeçalhos HTTP:** Aplicação de *Content Security Policy* (CSP), *X-Content-Type-Options* e restrição de verbos HTTP não suportados.
* **Infraestrutura como Código (IaC):** Especificação declarativa em `render.yaml` para implantação automatizada.

### 1.2 Fora do Escopo (Out-of-Scope)
* Armazenamento persistente de séries temporais em bancos de dados relacionais/NoSQL nesta camada base.
* Autenticação e Autorização baseadas em papéis (RBAC) no serviço primário de telemetria.
* Execução de comandos arbitrários no sistema operacional host a partir do painel web.

---

## 2. Pilha Tecnológica e Variáveis de Ambiente

* **Runtime:** Node.js (v18.15.0 LTS ou superior).
* **Módulo Web:** Módulo nativo `http` do Node.js ou servidor minimalista sem dependências externas pesadas.
* **Frontend:** Vanilla HTML5, CSS3 moderno (Flexbox/Grid) e JavaScript ES6+ (Fetch API, DOM puro).
* **Provedor de Nuvem Primário:** Render (PaaS).

### 2.1 Configurações de Ambiente

| Variável | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `PORT` | `Number` | `3000` | Porta TCP na qual o servidor HTTP escuta requisições. |
| `NODE_ENV` | `String` | `development` | Controla o modo de execução (`development`, `production` ou `test`). |
| `SHOW_HOST_DETAILS` | `Boolean` | `false` | Exibe detalhes avançados da máquina host (ex: hostname, interfaces de rede). |

---

## 3. Estrutura de Arquivos e Fluxo de Dados

```text
ronnin-system/
├── README.md                 # Visão geral do repositório
├── DOCUMENTACAO.md          # Especificação técnica consolidada (este documento)
├── CONTRIBUTING.md          # Guia de contribuição
├── SECURITY.md              # Diretrizes de segurança e relatório de vulnerabilidades
├── CODE_OF_CONDUCT.md       # Código de conduta para colaboradores
├── LICENSE.txt              # Licença de código aberto (MIT)
├── render.yaml              # Infraestrutura como Código para o Render
├── package.json             # Dependências e scripts de execução
├── server.js                # Ponto de entrada, roteamento HTTP e cabeçalhos
├── lib/
│   ├── metrics.js           # Módulo de coleta de métricas e cache
│   └── page.js              # Gerador de template HTML
└── public/
    ├── css/style.css        # Estilos da interface
    └── js/app.js            # Lógica client-side e polling da API
```

### 3.1 Diagrama de Fluxo Interno

```text
  [ Cliente / Navegador ]
             │
     HTTP GET│ /api/stats
             ▼
      ┌─────────────┐
      │  server.js  │ ──► [ Valida Método/Rota & Aplica CSP ]
      └──────┬──────┘
             │
             ▼
     ┌──────────────┐
     │  metrics.js  │ ──► [ Coleta dados do SO / os module ]
     └──────┬──────┘
             │
      JSON   ▼
  [ Payload de Métricas ]
```

---

## 4. API e Especificação dos Endpoints

A API aceita estritamente os métodos HTTP `GET` e `HEAD`. Qualquer tentativa de requisição usando `POST`, `PUT`, `DELETE` ou `PATCH` resultará em código de resposta `405 Method Not Allowed`.

### 4.1 Rotas Disponíveis

* `GET /` — Retorna o documento HTML do painel.
* `GET /api/stats` — Retorna objeto JSON com telemetria do sistema.
* `GET /healthz` — Retorna `{"status":"ok"}` com HTTP 200 para validação de saúde do serviço.
* `GET /css/*` e `GET /js/*` — Servem os ativos estáticos com MIME types corretos.

### 4.2 Exemplo de Validação via Terminal

```bash
# Verificação do status de saúde
curl -i http://localhost:3000/healthz

# Consulta às métricas do sistema
curl -i http://localhost:3000/api/stats

# Verificação de cabeçalhos da página principal
curl -I http://localhost:3000/
```

---

## 5. Matriz de Requisitos e Critérios de Aceite

| ID | Requisito | Tipo | Critério de Validação |
| :--- | :--- | :--- | :--- |
| **RF-01** | Painel de Telemetria | Funcional | Rota `/` deve responder com página web funcional e sem erros de console. |
| **RF-02** | Exposição de Dados JSON | Funcional | `/api/stats` deve retornar JSON estruturado contendo CPU, RAM e Uptime. |
| **RF-03** | Verificação de Saúde | Funcional | `/healthz` responde com código 200 OK e payload `{"status":"ok"}`. |
| **RNF-01** | Baixa Latência | Não-Funcional | O tempo de resposta da API de métricas não deve exceder 50ms em condições normais. |
| **RNF-02** | Zero Dependências Pesadas | Não-Funcional | O servidor deve rodar nativamente via `node server.js` sem necessidade de transpiladores. |
| **RNF-03** | Conformidade de Porta | Não-Funcional | A aplicação deve se conectar obrigatoriamente à variável de ambiente `process.env.PORT`. |

---

## 6. Análise Comparativa Exaustiva: Render vs. Outras Plataformas Cloud

Esta seção analisa o desempenho, facilidade de uso, limitações e diferenciais do **Render** em relação a plataformas alternativas (Railway, Fly.io e Vercel) para a hospedagem do **Ronnin System**.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                       MATRIZ DE COMPARAÇÃO PAAS                         │
├──────────────────┬──────────────┬──────────────┬──────────┬─────────────┤
│ Recurso / Feature│ Render       │ Railway      │ Fly.io   │ Vercel      │
├──────────────────┼──────────────┼──────────────┼──────────┼─────────────┤
│ Arquivo IaC      │ render.yaml  | railway.json | fly.toml | vercel.json │
│ Suporte Node.js  │ Excelente    │ Excelente    │ Via Docker│ Excelente   │
│ Plano Gratuito   │ Sim (Com Rest)│ Créditos     │ Limitado │ Sim (Hobby) │
│ Cold Start (Free)│ ~50s         │ Não          │ Não      │ N/A (Server)│
│ Suporte WebSocket│ Nativo       │ Nativo       │ Nativo   │ Limitado    │
└──────────────────┴──────────────┴──────────────┴──────────┴─────────────┘
```

### 6.1 Onde o Render se Destaca (Vantagens)

1. **IaC Nativa Simples (`render.yaml`):** O Render permite declarar serviços Web, bancos de dados e tarefas agendadas em um único arquivo de configuração mantido no repositório, automatizando o provisionamento no momento em que o código é enviado ao GitHub.
2. **Orquestração de Health Checks Integrada:** A plataforma lê a rota `/healthz` e só redireciona o tráfego após confirmar o código HTTP 200, evitando *downtime* durante deploys (*zero-downtime deployments* no plano pago).
3. **Gestão Automática de TLS/SSL:** Certificados HTTPS são gerenciados e renovados automaticamente sem necessidade de intervenção do desenvolvedor.
4. **Previsibilidade de Custos:** Diferente de modelos puramente baseados em consumo serverless (onde picos indevidos podem gerar custos inesperados), o Render adota preços fixos por instância ativada.

### 6.2 O que o Render NÃO Entrega ou Apresenta Limitações (Desvantagens)

1. **Impacto Severo do *Cold Start* no Plano Gratuito:** Instâncias no plano *Free* entram em modo de suspensão (*spindown*) após 15 minutos sem receber requisições HTTP. O primeiro acesso subsequente pode levar entre 30 e 60 segundos para responder, afetando negativamente a experiência de acesso ao painel do **Ronnin System**.
2. **Ausência de Execução Multi-Região Nativa no Plano Base:** Diferente do **Fly.io**, que executa a aplicação em contêineres *MicroVMs* próximos do usuário em vários continentes, o Render aloca o serviço em uma única região geográfica selecionada.
3. **Restrições no Ecossistema Serverless:** Comparado à **Vercel**, o Render não é otimizado para arquiteturas baseadas em *Edge Functions* ou renderização híbrida rápida para frameworks JS de ponta (como Next.js), limitando-se ao modelo tradicional de servidor de longa duração (*long-running process*).
4. **Velocidade dos Pipelines de Build:** O processo de construção de imagens e instalação de pacotes (`npm install`) no Render é visivelmente mais lento do que no **Railway**, que possui um sistema de cache de builds superior.

### 6.3 Resumo Comparativo por Provedor

* **Render vs. Railway:** O Railway oferece uma experiência do desenvolvedor (DX) mais ágil e sem *cold starts* no modelo de créditos, porém o Render possui melhor suporte estruturado a arquivo declarativo de IaC para ecossistemas abertos.
* **Render vs. Fly.io:** O Fly.io é superior para aplicações de baixíssima latência global devido ao isolamento por *Firecracker MicroVMs*, contudo exige maior complexidade na escrita de `Dockerfiles` e gerenciamento da rede interna.
* **Render vs. Vercel:** A Vercel é a líder para aplicações Jamstack e frontend serverless, mas não é adequada para o **Ronnin System** caso o sistema necessite de conexões mantidas por longo período para transmissão contínua de métricas.

---

## 7. Instruções de Implantação no Render

1. Realize o push do código atualizado para o seu repositório no GitHub.
2. Acesse o **Render Dashboard** e selecione a opção **New +** -> **Blueprint**.
3. Conecte o repositório `kaua0083/ronnin-system`.
4. O Render detectará automaticamente o arquivo `render.yaml` e exibirá os recursos configurados.
5. Clique em **Apply** para iniciar a compilação e publicação do serviço.
6. Acompanhe os logs até que o status altere para **Live**.