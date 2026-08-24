# Apostila de Estudo — Aula 01: Apresentação da Disciplina e Introdução aos Sistemas Operacionais

**Disciplina:** Sistemas Operacionais  
**Professor:** Prof. Me. Deivison S. Takatu  
**Contato:** deivison.takatu@fatec.sp.gov.br  

---

## Visão Geral

A Aula 01 aborda a apresentação da disciplina (critérios de avaliação e atividades) e introduz os conceitos fundamentais dos Sistemas Operacionais (SO), mapeando a estrutura interna, os modelos de execução e o gerenciamento de recursos.

### Estrutura de Avaliação

A nota final da disciplina segue o cálculo:
$$\text{Média Final} = (P_1 \times 0{,}25) + (P_2 \times 0{,}25) + ((PJ + AT) \times 0{,}25)$$

| Componente | Sigla | Descrição |
|---|---|---|
| Prova 1 | P1 | Avaliação teórica/prática individual |
| Prova 2 | P2 | Avaliação teórica/prática individual |
| Projeto | PJ | Projeto semestral desenvolvido em grupo |
| Atividades | AT | Exercícios e entregas contínuas |

---

## Fluxo da Primeira Atividade

1. **Formação de Grupo:** Organizar equipes fixas de 3 a 5 integrantes.
2. **Submissão Inicial:** Enviar arquivo com a lista dos nomes dos integrantes.
3. **Repositório GitHub:** Criar o repositório principal do semestre.
4. **Resumo Markdown:** Redigir o resumo da Aula 01 em arquivo `.md`.
5. **Linha do Tempo (Miro):** Construir colaborativamente o mapa do histórico dos SOs.
6. **Entrega Final:** Converter o conteúdo do Miro em Markdown e subir no GitHub.

---

## Conceitos Fundamentais

### O que é um Sistema Operacional
É o software responsável por gerenciar hardware e software, funcionando como interface entre o usuário e a máquina física (ex.: Windows, macOS, Linux, Android, iOS).

### Estrutura Interna e Modos de Operação
O **Kernel** é o núcleo do SO, responsável pelo acesso direto ao hardware e pela gestão de recursos vitais.

| Modo | Privilégio | Acesso | Função Primária |
|---|---|---|---|
| **Modo Usuário** | Limitado | Restrito ao espaço de memória próprio | Execução de aplicações comuns |
| **Modo Kernel** | Elevado | Total aos recursos de hardware | Execução de rotinas críticas do sistema |

### Escalonamento de Processos
Define a ordem e o tempo de execução de cada processo na CPU. Os objetivos centrais são garantir eficiência, justiça (*fairness*) e bom tempo de resposta.
* **Algoritmos citados:** FIFO (*First In, First Out*), Round Robin e Prioridade.

### Gerenciamento de Memória

| Tipo | Descrição | Características |
|---|---|---|
| **Memória Principal** | Memória física (RAM) | Alocação dinâmica e proteção de processos |
| **Memória Virtual** | Expansão lógica da RAM | Utiliza paginação e segmentação para aumentar a segurança |

### Outras Funções do SO
* **Gerenciamento de E/S:** Controle de entrada e saída de periféricos.
* **Sistemas de Arquivos:** Estruturação e acesso a dados.
* **Segurança:** Proteção contra ameaças e isolamento de rotinas.
* **Virtualização:** Abstração de recursos físicos para execução de múltiplos ambientes.

---

## Glossário

* **Kernel:** Núcleo do sistema operacional com controle total do hardware.
* **Escalonador:** Componente responsável por distribuir o tempo de processador entre as tarefas.
* **Paginação/Segmentação:** Técnicas de gerenciamento de memória virtual que dividem a memória em blocos para otimizar o uso da RAM.

---

## Exercícios Focados

**1. Calcule a média final de um aluno com as notas: P1 = 8,0; P2 = 7,0; PJ = 9,0; AT = 10,0.**

$$M = (8{,}0 \times 0{,}25) + (7{,}0 \times 0{,}25) + ((9{,}0 + 10{,}0) \times 0{,}25)$$
$$M = 2{,}0 + 1{,}75 + (19{,}0 \times 0{,}25)$$
$$M = 2{,}0 + 1{,}75 + 4{,}75 = 8{,}5$$

**2. Qual a principal diferença de privilégio entre o Modo Usuário e o Modo Kernel?**
* **Resposta:** O Modo Usuário possui privilégios limitados para proteger o sistema de falhas em programas comuns, enquanto o Modo Kernel possui acesso irrestrito ao hardware e às instruções críticas da CPU.
