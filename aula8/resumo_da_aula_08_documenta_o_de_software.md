# Resumo: Documentação de Software (Aula 08)

**Instituição:** Fatec  
**Professor:** Prof. Me. Deivison S. Takatu  
**Disciplina:** Nuvem e Sistemas Operacionais  

---

## 1. O que é Documentação de Software?

A **documentação de software** é o conjunto de informações que ajuda diferentes pessoas a compreender, utilizar, desenvolver, testar e manter um sistema.

### Perguntas Fundamentais
Uma boa documentação deve responder:
* **O que é** o projeto?
* **Para que** ele serve?
* **Como instalar** e configurar?
* **Como executar** e testar?
* **Como contribuir** e realizar mudanças?

> **Princípio Central:** A documentação reduz a dependência de explicações informais e torna o conhecimento reutilizável. O objetivo principal é permitir que qualquer pessoa consiga entender e executar o projeto sem precisar consultar a equipe criadora.

---

## 2. Impactos da Ausência de Documentação

A falta de documentação adequada traz diversos problemas operacionais:
* Dependência excessiva de desenvolvedores específicos.
* Dificuldade e lentidão para novos integrantes (*onboarding*).
* Configurações esquecidas ou executadas de forma inconsistente.
* Aumento do tempo de manutenção e resolução de problemas.
* Perda de conhecimento crítico quando um membro deixa a equipe.
* Perguntas repetitivas sobre instalação, execução e deploy.

---

## 3. As Quatro Necessidades Principais

1. **Comunicação:** Compartilhar conhecimento entre todas as partes interessadas.
2. **Manutenção:** Facilitar correções de bugs, refatorações e evolução contínua.
3. **Colaboração:** Permitir o trabalho conjunto de forma organizada.
4. **Continuidade:** Garantir a sustentabilidade do projeto sem dependência individual.

---

## 4. Quem Utiliza a Documentação?

* **Desenvolvedor (Dev):** Inicia o trabalho com autonomia e menor dependência técnica.
* **Testador (QA / Tester):** Identifica como executar o projeto e validar os cenários de teste.
* **DevOps / SysAdmin:** Configura a infraestrutura, pipelines CI/CD, ambientes e deploys.
* **Gestor / Tech Lead:** Acompanha processos, arquitetura, decisões técnicas e prazos.
* **Usuário / Cliente:** Aprende a operar e utilizar o produto final.

---

## 5. Intersecção de Áreas na Documentação

A documentação combina práticas e conhecimentos de diversas disciplinas:
* **Engenharia de Software (ES):** Requisitos, arquitetura, padrões de código e testes.
* **Gestão de Projetos (GP):** Escopo, cronograma, riscos, decisões e entregáveis.
* **DevOps:** Infraestrutura como código, pipelines CI/CD, deploy e monitoramento.
* **Segurança da Informação:** Gestão de vulnerabilidades, políticas de acesso e tratamento de incidentes.
* **Qualidade de Software (QA):** Estratégia de testes, critérios de aceitação, cenários e evidências.
* **Produto / UX:** Necessidades do usuário, jornadas, regras de negócio e usabilidade.

---

## 6. Tipos de Documentação

* **Documentação Técnica:** Descreve a arquitetura do sistema, APIs, banco de dados, componentes e parâmetros de configuração.
* **Documentação de Projeto:** Registra os objetivos, justificativas, requisitos, decisões de design e estrutura organizacional.
* **Documentação de Processo:** Mapeia o fluxo de trabalho Git (branches, commits, Pull Requests), esteiras de CI/CD, suíte de testes e procedimentos de deploy.

---

## 7. Boas Práticas do Arquivo README.md

O `README.md` é a porta de entrada de qualquer repositório no GitHub.

### Estrutura Recomendada do README
1. **Propósito e Visão Geral:** Descrição concisa do problema que o projeto resolve e seu objetivo.
2. **Stack e Pré-requisitos:**
   * Linguagens e versões recomendadas (ex: Node.js v24.x, Python 3.11).
   * Frameworks, bancos de dados e gerenciadores de pacotes (`npm`, `yarn`, `pip`).
   * Ferramentas acessórias (Docker, Git, AWS CLI).
3. **Instalação e Execução Passos Reproduzíveis:**
   1. Clonar o repositório (`git clone`).
   2. Acessar a pasta do projeto.
   3. Instalar dependências (`npm install`).
   4. Configurar variáveis de ambiente (`.env`).
   5. Executar a aplicação (`npm start` ou `node index.js`).
   6. Acessar a aplicação no navegador/cliente HTTP.
   7. Executar a suíte de testes (`npm test`).
4. **Configuração de Variáveis de Ambiente:**
   * Explicar a finalidade de cada variável (ex: `PORT`, `DATABASE_URL`, `API_KEY`).
   * Disponibilizar um arquivo de exemplo (ex: `.env.example`).
5. **Estrutura de Pastas do Projeto:**
   * Apresentar de forma clara o papel das diretórias principais (ex: `src/`, `tests/`, `docs/`, `.github/workflows/`).
6. **Procedimentos de Testes:**
   * Comandos para testes unitários, de integração e de performance.

---

## 8. Documentação do Processo DevOps

A esteira de ciclo de vida do software deve conter registos claros para cada etapa:
* **Desenvolvimento:** Implementação do código e resolução de demandas.
* **Git:** Padronização do controle de versão e fluxo de branches.
* **Pull Request (PR):** Fluxo de revisão de código, aprovação e mesclagem.
* **Build:** Compilação, empacotamento ou preparação do artefato executável.
* **Testes:** Automação de validações de integridade da aplicação.
* **Pipeline CI/CD:** Automação da integração e entrega contínua.
* **Deploy:** Publicação em ambiente de produção ou homologação.

---

## 9. O que NUNCA deve constar na Documentação

Por razões críticas de segurança da informação, **jamais** inclua na documentação pública ou privada:
* ❌ Senhas ou credenciais de usuários, administradores e bancos de dados.
* ❌ Chaves de API, segredos e tokens de autenticação (JWT, OAuth, etc.).
* ❌ Dados pessoais ou informações sigilosas de clientes/empresa (LGPD/GDPR).
* ❌ Arquivos `.env` reais ou arquivos contendo segredos de produção.
* ❌ Detalhes confidenciais de infraestrutura interna que exponham vulnerabilidades.

---

## 10. Orientação da Atividade Prática

1. **Escolha de Projeto:** Selecionar uma aplicação e elaborar a documentação descrevendo seu objetivo, problema, escopo e requisitos funcionais/não funcionais.
2. **Definição Técnica:** Mapear tecnologias, arquitetura e organização dos componentes principais.
3. **Elaboração do README.md:**
   * Criar ou atualizar o arquivo `README.md` no repositório GitHub.
   * Incluir pré-requisitos, instruções de instalação, configuração, execução, testes, variáveis de ambiente, documentação de APIs, banco de dados e rotinas de deploy.

---

## 11. Referências Bibliográficas

* TANENBAUM, Andrew S.; BOS, Herbert. **Sistemas Operacionais Modernos**. 4. ed. Pearson, 2016.
* SILBERSCHATZ, A.; GALVIN, P. B.; GAGNE, G. **Fundamentos de Sistemas Operacionais**. 9. ed. LTC, 2015.
* STALLINGS, William. **Sistemas Operacionais: Conceitos e Projetos**. 8. ed. Pearson, 2015.
* DOCKER INC. **Docker Documentation**. Disponível em: <https://docs.docker.com>