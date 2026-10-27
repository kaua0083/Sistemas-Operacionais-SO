# Resumo da Aula: Estrutura e Arquitetura de Sistemas Operacionais

**Professor:** Prof. Me. Deivison S. Takatu  
**Instituição:** Fatec - Faculdade de Tecnologia  

---

## 1. Por que Precisamos de um Sistema Operacional?

O Sistema Operacional (SO) atua como uma **camada de abstração** indispensável entre o hardware e as aplicações. Sem o SO, cada aplicativo precisaria implementar e gerenciar diretamente:

* Acesso direto e controle da memória física.
* Instruções e acesso direto ao processador (CPU).
* Controle específico de cada dispositivo de entrada e saída.
* Gerenciamento de arquivos e armazenamento.
* Mecanismos de segurança e isolamento.
* Detalhes de baixo nível de cada componente do hardware.

---

## 2. Componentes Principais do Sistema Operacional

O SO é composto por módulos fundamentais que trabalham integrados:

1. **Kernel (Núcleo):** Gerencia os recursos mais críticos do sistema.
2. **Gerenciamento de Processos:** Controla a criação, execução e encerramento de programas.
3. **Gerenciamento de Memória:** Realiza a alocação, desalocação e proteção da memória.
4. **Sistema de Arquivos:** Organiza e estrutura a gravação/leitura de dados em mídias de armazenamento.
5. **Entrada e Saída (E/S):** Gerencia a comunicação com dispositivos externos.
6. **Drivers:** Proporcionam a interface de comunicação específica com o hardware.

### Camadas do Sistema

A organização do sistema pode ser visualizada em níveis de abstração:
$$\text{Aplicações (Usuário)} \longrightarrow \text{Sistema Operacional (Kernel)} \longrightarrow \text{Hardware (CPU, Memória, Dispositivos)}$$

---

## 3. Kernel e Modos de Execução

### Responsabilidades do Kernel
* Gerenciamento de processos e *threads*.
* Controle de memória física e virtual.
* Controle de dispositivos periféricos.
* Intermediação da comunicação hardware-software.
* Garantia da proteção e segurança do sistema.

### Modos de Execução do Processador

| Modo | Descrição | Nível de Acesso |
| :--- | :--- | :--- |
| **Modo Usuário (*User Mode*)** | Onde as aplicações comuns são executadas. | Acesso restrito ao hardware e às instruções privilegiadas. |
| **Modo Kernel (*Kernel Mode*)** | Onde executam as funções críticas do SO. | Acesso total aos recursos de hardware e instruções de CPU. |

* **System Call (Chamada de Sistema):** É a ponte de comunicação que permite a uma aplicação em *Modo Usuário* solicitar serviços ou recursos privilegiados executados pelo *Kernel*.
* **Segurança:** A separação por modos impede que softwares com falhas ou maliciosos comprometam a estabilidade e a segurança global do sistema.

---

## 4. Gerenciamento de Processos, Threads e Arquivos

### Conceitos Chave

* **Programa:** Arquivo estático armazenado em disco (ex: `chrome.exe`).
* **Processo:** Programa carregado na memória em estado de execução, possuindo seu próprio espaço de endereçamento.
* **Thread:** Menor unidade/fluxo de execução que roda dentro de um processo.

### Componentes de um Processo
* **Código Executável (*Text segment*)**
* **Dados do Programa (*Data segment*)**
* **Pilha (*Stack*):** Utilizada para chamadas de funções e variáveis locais.
* **Registradores da CPU**
* **Arquivos abertos e recursos alocados**

### Sistema de Arquivos
Organiza os dados em uma **estrutura hierárquica de diretórios** (árvore), partindo do *diretório raiz*, facilitando a localização, organização e permissões dos dados.

### Entrada/Saída e Drivers
Os drivers são módulos que abstraem a complexidade do hardware específico, permitindo ao SO interagir de maneira padronizada com periféricos como:
* Teclado, Mouse, Impressora, Discos rígidos/SSD e interfaces de Rede.

---

## 5. Reaproveitamento de Estrutura de SO

Desenvolver um SO do zero é complexo e oneroso. Por isso, a indústria adota o **reaproveitamento e adaptação** de bases e kernels consolidados (como Linux e BSD).

### Vantagens
* Redução de custos e tempo de desenvolvimento.
* Maior estabilidade e segurança.
* Reutilização de tecnologias e ecossistema existente.
* Suporte comunitário e atualizações contínuas de segurança.

### Exemplos Práticos
* **Raspberry Pi OS:** Utiliza como base o **Debian** (uma distribuição Linux).
* **Orbis OS (PlayStation 4):** Desenvolvido a partir do **FreeBSD**.

---

## 6. Atividades Práticas Propostas

### Atividade 01 - Documentação de Formatação e Instalação
* **Objetivo:** Analisar o roteiro de instalação disponível no repositório e descrever, em formato **Markdown**, o processo completo de formatação e instalação de um SO.
* **Requisito:** Explicar detalhadamente o que acontece em cada etapa sequencial, identificando os componentes do SO envolvidos e sua importância.

### Atividade 02 - Pesquisa de SOs Derivados
* **Objetivo:** Pesquisar **5 Sistemas Operacionais** desenvolvidos a partir de outro sistema/kernel de base.
* **Requisito:** Criar uma tabela comparativa destacando as diferenças entre cada SO derivado e sua base, salvando a pesquisa em formato Markdown no repositório.

---

## 7. Referências Bibliográficas

* TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. Pearson, 2016.
* SILBERSCHATZ, A.; GALVIN, P. B.; GAGNE, G. *Fundamentos de Sistemas Operacionais*. 9. ed. LTC, 2015.
* STALLINGS, William. *Sistemas Operacionais: Conceitos e Projetos*. 8. ed. Pearson, 2015.
* DENARDIN, G. W.; BARRIQUELLO, C. H. *Sistemas Operacionais de Tempo Real e sua Aplicação em Sistemas Embarcados*. UFRGS, 2014.
* DOWNEY, Allen B. *Think OS: A Brief Introduction to Operating Systems*. Green Tea Press, 2015.