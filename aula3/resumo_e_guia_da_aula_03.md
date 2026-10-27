# Resumo da Aula 03 - Conceitos, Funções e Tipos de Sistemas Operacionais

**Professor:** Me. Deivison S. Takatu  
**Instituição:** Fatec - Faculdade de Tecnologia  

---

## 1. Visão Geral dos Tipos de Sistemas Operacionais

O material aborda os principais tipos de Sistemas Operacionais (SO), suas características e aplicações principais:

*   **Sistemas de Grande Porte (Mainframes):**
    *   *Foco:* Alta capacidade de entrada/saída (E/S), processamento em lote e carga massiva de transações (TPS).
    *   *Uso:* Bancos, grandes varejistas e e-commerce.
    *   *Exemplos:* OS/360, OS/390, Linux e UNIX.
*   **Sistemas Operacionais de Servidor:**
    *   *Foco:* Atender múltiplos usuários e serviços via rede (web, banco de dados, arquivos), priorizando estabilidade e escalabilidade.
    *   *Exemplos:* Linux e Windows Server (com suporte ao Active Directory).
*   **Sistemas de Multiprocessadores:**
    *   *Foco:* Suporte a múltiplas CPUs/núcleos para processamento paralelo, exigindo controle avançado de escalonamento, sincronização (locks/semáforos) e coerência de cache.
*   **Sistemas de Computadores Pessoais:**
    *   *Foco:* Interface gráfica (GUI), uso individual, suporte a multimídia e ampla compatibilidade.
    *   *Exemplos:* Windows, macOS e Linux.
*   **Sistemas Operacionais Portáteis (Mobile):**
    *   *Foco:* Gerenciamento agressivo de energia, APIs para sensores (GPS, acelerômetro), isolamento por *sandboxing* e distribuição via lojas de apps.
    *   *Exemplos:* Android e iOS.
*   **Sistemas Embarcados:**
    *   *Foco:* Execução em dispositivos dedicados com recursos limitados (ROM/Flash).
    *   *Exemplos:* Embedded Linux, QNX, VxWorks (aplicados em micro-ondas, Smart TVs, setor automotivo).
*   **Sistemas de Nós Sensores:**
    *   *Foco:* Dispositivos ultrapequenos com bateria limitada, orientados a eventos e comunicação sem fio.
    *   *Exemplos:* TinyOS e Contiki (usados em agricultura de precisão e monitoramento ambiental).
*   **Sistemas de Tempo Real (Real-Time):**
    *   *Hard Real-Time:* Falhas de prazo causam prejuízos graves/desastres (ex.: controle de voo).
    *   *Soft Real-Time:* Atrasos causam apenas degradação da qualidade (ex.: streaming de mídia).
*   **Sistemas de Cartões Inteligentes (Smart Cards):**
    *   *Foco:* Recursos altamente restritos, foco em segurança/criptografia e multiprogramação isolada por applets.

---

## 2. Boas Práticas de Versionamento com Git

*   **Commits pequenos e frequentes:** Facilita a identificação de bugs e reversão de código.
*   **Mensagens claras:** Explicar claramente o que foi modificado e o motivo.
*   **Uso de branches:** Manter a branch principal (`main`/`master`) estável e criar ramificações para novas *features* ou correções.
*   **Testes automatizados:** Validar o código antes de realizar *merges*.

---

## 3. Como Subir um Código pelo VS Code (Passo a Passo)

### Pré-requisitos e Configuração Inicial
1. **Instalar o Git:** Baixe o instalador no site oficial ([git-scm.com](https://git-scm.com/)) e siga a instalação padrão.
2. **Verificar a instalação:** Abra o Prompt de Comando (CMD) ou Terminal e digite:
   ```bash
   git --version
   ```
3. **Configurar Usuário Global (se necessário):**
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu-email@exemplo.com"
   ```

---

### Passo a Passo no VS Code

1. **Criar e Abrir a Pasta do Projeto:**
   * Crie uma pasta no seu computador.
   * No VS Code, acesse: `Arquivo` > `Abrir Pasta...` e selecione a pasta criada.
2. **Criar os Arquivos:**
   * Crie o arquivo desejado (por exemplo, `atividadeaula3.md` ou um arquivo de código).
3. **Inicializar o Repositório Local:**
   * Abra a aba **Controle de Código-Fonte** (ícone de ramificação na barra lateral esquerda ou pressione `Ctrl + Shift + G`).
   * Clique no botão **Inicializar Repositório** (Initialize Repository).
4. **Realizar o Commit:**
   * Digite uma mensagem explicativa na caixa de texto superior (ex.: `"Commit inicial do projeto"`).
   * Clique em **Confirmar** (ou ícone de *Check* / `Commit`).
5. **Publicar no GitHub:**
   * Clique no botão **Publicar Branch** (Publish Branch).
   * Se for o primeiro acesso, o VS Code solicitará autorização/login na sua conta do GitHub.
   * Escolha a visibilidade do repositório: **Público** ou **Privado**.
   * O VS Code criará o repositório no seu GitHub e fará o envio (*push*) automático dos arquivos.

---

## 4. Resumo das Atividades Propostas no PDF

1. **Configuração e Integração:**
   * Configurar a integração da IDE (VS Code) com a conta pessoal do GitHub via Git.
   * Garanta que as credenciais e o reconhecimento do repositório remoto estejam funcionais para executar `commit`, `push` e `pull`.

2. **Criação, Sincronização e Restauração Local (Clone):**
   * Criar um repositório de teste local com ao menos um arquivo inicial.
   * Fazer alterações, realizar o `commit` e sincronizar com o GitHub.
   * **Teste de restauração:** Apagar a pasta do projeto no computador local e utilizar o comando `git clone <URL_DO_REPOSITORIO>` via linha de comando para cloná-lo novamente e verificar se tudo foi restaurado.

3. **Pesquisa e Análise de Repositórios Reais:**
   * Pesquisar no GitHub e selecionar 5 projetos de outros usuários.
   * Utilizar o comando `git clone` para baixar esses projetos no computador.
   * Analisar e explorar a estrutura e conteúdo dos repositórios clonados.