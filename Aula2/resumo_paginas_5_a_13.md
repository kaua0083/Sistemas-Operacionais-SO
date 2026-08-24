# 📖 Resumo Abrangente e Detalhado: Sistemas Operacionais e Arquitetura de Computadores (Páginas 5 a 13)

---

## 📑 Índice
1. [Introdução Geral & Visão de Alto Nível](#1-introdução-geral--visão-de-alto-nível)
2. [Página 5: Conceitos Fundamentais da Arquitetura Von Neumann](#2-página-5-conceitos-fundamentais-da-arquitetura-von-neumann)
   - [2.1 Estrutura Interna da Unidade Central de Processamento](#21-estrutura-interna-da-unidade-central-de-processamento)
   - [2.2 O Conceito de Programa Armazenado](#22-o-conceito-de-programa-armazenado)
   - [2.3 Registradores da CPU e Suas Funções Específicas](#23-registradores-da-cpu-e-suas-funções-específicas)
3. [Página 6: O Ciclo de Busca, Decodificação e Execução de Instruções](#3-página-6-o-ciclo-de-busca-decodificação-e-execução-de-instruções)
   - [3.1 Detalhamento Passo a Passo do Ciclo Fetch-Decode-Execute](#31-detalhamento-passo-a-passo-do-ciclo-fetch-decode-execute)
   - [3.2 Microoperações e Sinais de Controle](#32-microoperações-e-sinais-de-controle)
   - [3.3 Pipelining e Paraleledismo em Nível de Instrução](#33-pipelining-e-paraleledismo-em-nível-de-instrução)
4. [Página 7: Estrutura do Sistema Operacional e Hierarquia de Barramentos](#4-página-7-estrutura-do-sistema-operacional-e-hierarquia-de-barramentos)
   - [4.1 Anéis de Proteção do Processador (Protection Rings)](#41-anéis-de-proteção-do-processador-protection-rings)
   - [4.2 Transição do Modo Usuário para o Modo Kernel](#42-transição-do-modo-usuário-para-o-modo-kernel)
   - [4.3 Barramentos do Sistema: Dados, Endereço e Controle](#43-barramentos-do-sistema-dados-endereço-e-controle)
5. [Página 8: Gerenciamento de Processos e Tabela de Processos (PCB)](#5-página-8-gerenciamento-de-processos-e-tabela-de-processos-pcb)
   - [5.1 Conceito Abrangente de Processo](#51-conceito-abrangente-de-processo)
   - [5.2 Anatomia do Bloco de Controle de Processo (PCB)](#52-anatomia-do-bloco-de-controle-de-processo-pcb)
   - [5.3 Estados do Processo e Troca de Contexto (Context Switch)](#53-estados-do-processo-e-troca-de-contexto-context-switch)
6. [Página 9: Escalonamento de CPU e Algoritmos Práticos](#6-página-9-escalonamento-de-cpu-e-algoritmos-práticos)
   - [6.1 Objetivos e Métricas do Escalonador](#61-objetivos-e-métricas-do-escalonador)
   - [6.2 Escalonamento Não-Preemptivo vs. Preemptivo](#62-escalonamento-não-preemptivo-vs-preemptivo)
   - [6.3 Análise Aprofundada dos Algoritmos (FCFS, SJF, SRTF, Round Robin, Múltiplas Filas)](#63-análise-aprofundada-dos-algoritmos)
7. [Página 10: Gerenciamento de Memória Principal e Memória Virtual](#7-página-10-gerenciamento-de-memória-principal-e-memória-virtual)
   - [7.1 Fragmentação Interna e Externa](#71-fragmentação-interna-e-externa)
   - [7.2 Mecanismo de Paginamento (Paging)](#72-mecanismo-de-paginamento-paging)
   - [7.3 Unidade de Gerenciamento de Memória (MMU) e TLB](#73-unidade-de-gerenciamento-de-memória-mmu-e-tlb)
8. [Página 11: Algoritmos de Substituição de Páginas e Thrashing](#8-página-11-algoritmos-de-substituição-de-páginas-e-thrashing)
   - [8.1 A Métrica da Falta de Página (Page Fault)](#81-a-métrica-da-falta-de-página-page-fault)
   - [8.2 Estudo Detalhado dos Algoritmos (FIFO, LRU, LFU, OPT)](#82-estudo-detalhado-dos-algoritmos)
   - [8.3 O Conjunto de Trabalho (Working Set) e a Hiperpaginação (Thrashing)](#83-o-conjunto-de-trabalho-working-set-e-a-hiperpaginação-thrashing)
9. [Página 12: Sistemas de Arquivos e Organização Física/Lógica de Discos](#9-página-12-sistemas-de-arquivos-e-organização-físicalógica-de-discos)
   - [9.1 Visão Lógica: Arquivos e Diretórios](#91-visão-lógica-arquivos-e-diretórios)
   - [9.2 Métodos de Alocação de Espaço em Disco](#92-métodos-de-alocação-de-espaço-em-disco)
   - [9.3 Estrutura Interna de Inodes nos Sistemas UNIX/Linux](#93-estrutura-interna-de-inodes-nos-sistemas-unixlinux)
10. [Página 13: Subsistemas de Entrada/Saída, Interrupções e DMA](#10-página-13-subsistemas-de-entradasaída-interrupções-e-dma)
    - [10.1 Arquitetura da Camada de E/S do SO](#101-arquitetura-da-camada-de-es-do-so)
    - [10.2 Polling vs. Interrupções Baseadas em Hardware](#102-polling-vs-interrupções-baseadas-em-hardware)
    - [10.3 Controlador DMA (Direct Memory Access) e Barramento](#103-controlador-dma-direct-memory-access-e-barramento)
11. [Matriz Comparativa Sintética](#11-matriz-comparativa-sintética)
12. [Implementação Prática de Simulação do Escalonador Round-Robin em C](#12-implementação-prática-de-simulação-do-escalonador-round-robin-em-c)
13. [Glossário Extenso de Termos Técnicos](#13-glossário-extenso-de-termos-técnicos)
14. [Conclusões e Considerações Finais](#14-conclusões-e-considerações-finais)

---

## 1. Introdução Geral & Visão de Alto Nível

O estudo dos **Sistemas Operacionais (SO)** e da **Arquitetura de Computadores** compreende a análise de como o software de baixo nível abstrai o hardware físico para oferecer um ambiente de execução seguro, eficiente e concorrente para os programas do usuário.

A arquitetura do computador fornece os recursos computacionais brutos: o processador para cálculo, a memória para armazenamento temporário e os dispositivos periféricos para entrada e saída de dados. No entanto, o hardware por si só é incrivelmente complexo e difícil de ser manipulado diretamente por programas de aplicação. É exatamente nesse ponto que o Sistema Operacional intervém, atuando como um intermediário que gerencia esses recursos físicos de maneira transparente e otimizada.

Neste documento, é apresentado um resumo analítico extenso e profundamente detalhado, cobrindo com máxima precisão os tópicos tratados entre as **Páginas 5 e 13** do material acadêmico de referência.

```
+-----------------------------------------------------------------------+
|                         Aplicações do Usuário                         |
|             (Navegadores, Editores de Texto, Compiladores)            |
+-----------------------------------------------------------------------+
|                      Interface de Chamadas (Syscalls)                 |
+-----------------------------------------------------------------------+
|                         SISTEMA OPERACIONAL                           |
|   +-------------------+  +--------------------+  +----------------+   |
|   | Gerenciador de    |  | Gerenciador de     |  | Sistema de     |   |
|   | Processos e CPU   |  | Memória Virtual    |  | Arquivos & I/O |   |
|   +-------------------+  +--------------------+  +----------------+   |
+-----------------------------------------------------------------------+
|                       HARDWARE DO COMPUTADOR                          |
|   +-------------------+  +--------------------+  +----------------+   |
|   | CPU / Registradores| | Memória RAM        |  | Dispositivos   |   |
|   +-------------------+  +--------------------+  +----------------+   |
+-----------------------------------------------------------------------+
```

---

## 2. Página 5: Conceitos Fundamentais da Arquitetura Von Neumann

A Página 5 introduz a base estrutural de quase todos os computadores modernos: a **Arquitetura Von Neumann**, concebida na década de 1940 pelo matemático John von Neumann. Suas características essenciais diferenciam computadores programáveis flexíveis de circuitos eletrônicos rígidos e de propósito fixo.

### 2.1 Estrutura Interna da Unidade Central de Processamento

A Unidade Central de Processamento (CPU) é o coração computacional do sistema. Ela é dividida estrategicamente em submódulos funcionais:

1. **Unidade Lógica e Aritmética (ULA / ALU):**
   - É responsável por realizar operações matemáticas elementares, tais como adição, subtração e multiplicação.
   - Executa também operações lógicas booleanas cruciais, como AND, OR, NOT, XOR e comparações de magnitude (maior que, menor que, igual a).
   - O tempo de execução das operações na ULA é diretamente sincronizado pelo relógio interno (*clock*) do sistema.

2. **Unidade de Controle (UC / CU):**
   - Atua como o cérebro coordenador da CPU.
   - Ela busca as instruções armazenadas na memória principal, interpreta o significado dessas instruções (decodificação) e envia sinais elétricos de controle para todos os outros componentes do sistema.
   - Garante que os dados fluam no momento correto entre registradores, ULA e memória.

3. **Conjunto de Registradores:**
   - Pequenas células de memória localizadas internamente no próprio silício do processador.
   - Possuem tempos de acesso extremamente curtos (geralmente uma fração de nanossegundo), sendo ordens de grandeza mais rápidos do que a memória RAM externa.

### 2.2 O Conceito de Programa Armazenado

A maior inovação da Arquitetura Von Neumann foi o **Conceito de Programa Armazenado** (*Stored-Program Concept*). Antes dessa arquitetura, alterar o programa que um computador executava exigia a reconfiguração física de cabos e chaves elétricas.

Na Arquitetura Von Neumann:
- As **instruções do programa** e os **dados manipulados** compartilham a mesma memória física principal (RAM).
- A memória é vista como um grande vetor linear de bytes acessíveis por endereços numéricos únicos.
- Essa abordagem permite que o computador altere facilmente o programa em execução apenas carregando um novo conjunto de instruções na memória RAM a partir de um meio de armazenamento secundário.

### 2.3 Registradores da CPU e Suas Funções Específicas

A tabela abaixo detalha os principais registradores de finalidade especial que estruturam a operação contínua da CPU:

| Registrador | Nome Completo | Função Principal e Detalhes Operacionais |
| :--- | :--- | :--- |
| **PC** | *Program Counter* | Armazena o endereço de memória da próxima instrução que a CPU deve buscar e executar. É incrementado automaticamente a cada ciclo. |
| **IR** | *Instruction Register* | Guarda a instrução binária lida recentemente da memória RAM enquanto a Unidade de Controle realiza a decodificação. |
| **MAR** | *Memory Address Register* | Conectado diretamente ao barramento de endereços; contém o endereço de memória onde a CPU quer ler ou gravar um dado. |
| **MBR / MDR** | *Memory Buffer/Data Register* | Conectado ao barramento de dados; guarda o valor exato lido da memória RAM ou o valor a ser gravado nela. |
| **ACC** | *Accumulator* | Registrador temporário associado à ULA para armazenar os resultados imediatos de operações aritméticas ou lógicas. |
| **SP** | *Stack Pointer* | Mantém o endereço de memória que representa o topo da pilha de execução (*call stack*) do programa ativo. |
| **FLAGS / PSW** | *Program Status Word* | Registrador de estado contendo *bits* de sinalização (ex: zero, estouro/overflow, sinal negativo, interrupção habilitada). |

---

## 3. Página 6: O Ciclo de Busca, Decodificação e Execução de Instruções

A Página 6 detalha o ciclo de vida contínuo de uma instrução na CPU, conhecido como o ciclo **Fetch-Decode-Execute** (Busca, Decodificação e Execução). Este é o algoritmo de nível de hardware fundamental que é executado ininterruptamente desde a energização do computador até o seu desligamento.

### 3.1 Detalhamento Passo a Passo do Ciclo Fetch-Decode-Execute

```
          +-------------------------------+
          | 1. ETAPA DE BUSCA (FETCH)     | <-----------------------------+
          | - Copia PC para MAR           |                               |
          | - Envia sinal Read no Bus     |                               |
          | - Copia dado RAM para MBR     |                               |
          | - Transfere MBR para IR       |                               |
          | - Incrementa PC               |                               |
          +-------------------------------+                               |
                          |                                               |
                          v                                               |
          +-------------------------------+                               |
          | 2. ETAPA DE DECODIFICAÇÃO     |                               |
          | - Identifica Opcode no IR     |                               |
          | - Localiza e busca operandos  |                               |
          +-------------------------------+                               |
                          |                                               |
                          v                                               |
          +-------------------------------+                               |
          | 3. ETAPA DE EXECUÇÃO          |                               |
          | - ULA executa cálculo         |                               |
          | - Grava resultado em Registr. |                               |
          +-------------------------------+                               |
                          |                                               |
                          v                                               |
          +-------------------------------+       Sim                     |
          | 4. VERIFICA INTERRUPÇÕES?     | ------------+                 |
          +-------------------------------+             |                 |
                          | Não                         v                 |
                          |                   +-------------------+       |
                          |                   | Trata Interrupção | ------+
                          |                   +-------------------+       |
                          +-----------------------------------------------+
```

1. **Etapa 1: Busca (*Fetch*):**
   - O conteúdo do registrador `PC` (Contador de Programa) é transferido para o `MAR` (Registrador de Endereço de Memória).
   - A Unidade de Controle emite um sinal elétrico de leitura no barramento de controle.
   - O conteúdo da célula de memória RAM no endereço apontado pelo `MAR` é copiado através do barramento de dados para o `MBR` (Registrador de Buffer de Memória).
   - O dado do `MBR` é transferido para o `IR` (Registrador de Instrução).
   - O `PC` é incrementado com o tamanho da instrução atual para apontar para a instrução subsequente.

2. **Etapa 2: Decodificação (*Decode*):**
   - A Unidade de Controle interpreta o *Opcode* (código de operação) contido no `IR`.
   - Determina a natureza da instrução (ex: movimentação de memória, salto condicional, adição).
   - Se os operandos necessários para a execução estiverem localizados na memória e não em registradores, a UC realiza leituras adicionais na memória.

3. **Etapa 3: Execução (*Execute*):**
   - A UC aciona os barramentos internos e os circuitos apropriados da ULA.
   - A operação matemática ou lógica é efetuada sobre os operandos.
   - O resultado é armazenado em um registrador de destino (como o Acumulador) ou escrito de volta na memória RAM.

4. **Etapa 4: Checagem de Interrupções:**
   - Antes de iniciar a busca da próxima instrução, a CPU avalia as linhas de interrupção de hardware para verificar se algum periférico solicitou atenção urgente.

### 3.2 Microoperações e Sinais de Controle

Cada uma das três fases principais é decomposta em uma sequência rigorosa de **microoperações**. As microoperações são transferências elementares de dados entre registradores acionadas por pulsos elétricos enviados pelos barramentos internos.

Por exemplo, a fase de busca (*Fetch*) traduz-se nas seguintes microoperações formais:
- $t_1: 	ext{MAR} \leftarrow (	ext{PC})$
- $t_2: 	ext{MBR} \leftarrow 	ext{Memória}[	ext{MAR}]; \quad 	ext{PC} \leftarrow (	ext{PC}) + 1$
- $t_3: 	ext{IR} \leftarrow (	ext{MBR})$

Onde $t_1, t_2, t_3$ representam ciclos de relógio (*clock cycles*) sucessivos.

### 3.3 Pipelining e Paraleledismo em Nível de Instrução

Para otimizar a vazão (*throughput*) de processamento, as CPUs modernas não aguardam que o ciclo completo de uma instrução termine para começar a instrução seguinte. Elas aplicam a técnica de **Pipelining** (pipeline de instruções).

Em um pipeline ideal de 4 estágios (Busca, Decodificação, Execução, Escrita):
- Enquanto a Instrução 1 está na fase de Execução,
- A Instrução 2 está sendo Decodificada,
- E a Instrução 3 está sendo Buscada na memória.

Isso aumenta drasticamente a taxa de ocupação dos recursos do processador.

---

## 4. Página 7: Estrutura do Sistema Operacional e Hierarquia de Barramentos

A Página 7 analisa os modos de operação do processador para garantia de integridade do sistema e a organização física dos barramentos que interconectam os componentes.

### 4.1 Anéis de Proteção do Processador (Protection Rings)

Para evitar que erros em programas de usuários causem o colapso total do sistema ou o acesso não autorizado a dados de terceiros, o hardware fornece modos de execução distintos:

```
  +-------------------------------------------------------------+
  | Ring 3: Aplicações do Usuário (Modo Usuário / Restrito)     |
  |  +-------------------------------------------------------+  |
  |  | Ring 1 e 2: Drivers de Dispositivos e Serviços (Op)   |  |
  |  |  +-------------------------------------------------+  |  |
  |  |  | Ring 0: Núcleo do SO (Modo Kernel / Supervisor) |  |  |
  |  |  +-------------------------------------------------+  |  |
  |  +-------------------------------------------------------+  |
  +-------------------------------------------------------------+
```

* **Modo Kernel / Supervisor (Ring 0):**
  - Possui privilégios totais sobre o hardware.
  - Pode executar qualquer instrução do conjunto da CPU (*assembly* instrução privilegiada).
  - Acesso direto a todas as faixas de endereço de memória física e portas de E/S.
* **Modo Usuário (Ring 3):**
  - Execução restrita.
  - Tentativas de executar instruções privilegiadas (como desabilitar interrupções ou alterar registradores de controle da MMU) são bloqueadas pelo hardware e disparam uma **exceção de proteção geral**.

### 4.2 Transição do Modo Usuário para o Modo Kernel

Sempre que uma aplicação em modo usuário necessita de um serviço do sistema (como ler um arquivo do disco ou enviar um pacote de rede), ela deve realizar uma **Chamada de Sistema (*System Call*)**:

1. A aplicação armazena os parâmetros da chamada nos registradores.
2. Executa uma instrução de interrupção por software (ex: `INT 0x80` ou `SYSCALL`).
3. O hardware da CPU altera instantaneamente o modo de operação de Modo Usuário para Modo Kernel.
4. O ponteiro de instrução salta para um endereço fixo de memória no SO conhecido como *System Call Handler*.
5. O Kernel valida os parâmetros, executa a operação solicitada com privilégios totais e retorna o resultado.
6. A CPU volta ao Modo Usuário e devolve o controle ao programa do usuário.

### 4.3 Barramentos do Sistema: Dados, Endereço e Controle

Os barramentos são vias de comunicação elétricas compartilhadas por múltiplos componentes.

1. **Barramento de Dados:**
   - Transporta as informações e instruções binárias reais.
   - É bidirecional (dados fluem tanto da CPU para a RAM/dispositivos quanto no sentido inverso).
   - A largura desse barramento (ex: 32 bits, 64 bits) determina a quantidade de dados transferida por ciclo.

2. **Barramento de Endereços:**
   - Define a origem ou o destino exato dos dados.
   - É unidirecional (originado na CPU e direcionado à RAM ou E/S).
   - A largura desse barramento determina a capacidade máxima de memória fisicamente endereçável. Por exemplo, um barramento de 32 bits pode endereçar $2^{32}$ bytes = 4 GB de memória RAM.

3. **Barramento de Controle:**
   - Transmite sinais elétricos para sincronizar as operações do sistema.
   - Inclui linhas para requisições de leitura (`READ`), escrita (`WRITE`), confirmações de recebimento (`ACK`), interrupções (`IRQ`) e clock do sistema.

---

## 5. Página 8: Gerenciamento de Processos e Tabela de Processos (PCB)

A Página 8 foca no conceito fundacional de **Processo**, definindo-o como um programa em execução. Um programa é apenas uma entidade passiva armazenada no disco; um processo é uma entidade ativa contendo estado de execução.

### 5.1 Conceito Abrangente de Processo

Um processo em execução é constituído por quatro seções principais na memória:

```
+-------------------------------------------------------------+
| PILHA (STACK)                                               |
| - Variáveis locais, parâmetros de funções, retornos         |
|                     |                                       |
|                     v                                       |
|                                                             |
|                     ^                                       |
|                     |                                       |
| HEAP / MONTE                                                |
| - Memória alocada dinamicamente (malloc/new)                |
+-------------------------------------------------------------+
| SEÇÃO DE DADOS (DATA SECTION)                               |
| - Variáveis globais e estáticas inicializadas               |
+-------------------------------------------------------------+
| SEÇÃO DE CÓDIGO (TEXT SECTION)                              |
| - Instruções binárias do programa executável                |
+-------------------------------------------------------------+
```

### 5.2 Anatomia do Bloco de Controle de Processo (PCB)

Para gerenciar múltiplos processos concorrentes, o Sistema Operacional mantém uma tabela de dados na memória do Kernel com uma estrutura chamada **Process Control Block (PCB)** para cada processo ativo:

* **PID (Process Identifier):** Número inteiro único que identifica o processo no sistema.
* **Estado Atual:** Informa se o processo está em execução, pronto, aguardando E/S, etc.
* **Registradores da CPU:** Armazena uma cópia exata do `PC`, `SP`, `ACC` e registradores gerais quando o processo é retirado da CPU.
* **Informações de Gerenciamento de Memória:** Ponteiros para as tabelas de páginas que definem o espaço de endereçamento do processo.
* **Informações de Contabilidade:** Tempo de CPU consumido, limites de tempo, tempo de início.
* **Status de Entrada/Saída:** Lista de arquivos abertos (descritores de arquivo), dispositivos alocados.

### 5.3 Estados do Processo e Troca de Contexto (Context Switch)

Um processo transita por diversos estados ao longo de seu ciclo de vida:

```
  [Novo] ---------> [Pronto] <-------------------- [Executando] ---------> [Finalizado]
                      ^                                |
                      |                                |
                      +------ [Bloqueado] <------------+
```

- **Novo (New):** O processo está sendo criado e alocado na memória pelo Kernel.
- **Pronto (Ready):** O processo possui todos os recursos necessários e aguarda apenas a alocação da CPU pelo escalonador.
- **Executando (Running):** As instruções do processo estão sendo ativamente processadas pela CPU.
- **Bloqueado / Aguardando (Waiting):** O processo aguarda a conclusão de um evento externo (como a leitura de um arquivo no disco) e não pode usar a CPU no momento.
- **Finalizado (Terminated):** O processo encerrou a execução e aguarda que o Kernel remova suas estruturas da memória.

#### O Mecanismo de Troca de Contexto (*Context Switch*)
Quando a CPU alterna a execução do Processo A para o Processo B:
1. O Kernel salva o estado de todos os registradores da CPU no **PCB do Processo A**.
2. Atualiza o estado do Processo A para `Pronto` ou `Bloqueado`.
3. Seleciona o **Processo B** da fila de prontos.
4. Carrega os registradores salvos no **PCB do Processo B** para os registradores físicos da CPU.
5. Altera o endereço de memória ativa e retoma a execução no ponto onde B havia parado.

*Nota:* A troca de contexto é uma sobrecarga (*overhead*) pura, pois a CPU não realiza trabalho útil para as aplicações do usuário durante o processo.

---

## 6. Página 9: Escalonamento de CPU e Algoritmos Práticos

A Página 9 examina as estratégias adotadas pelo escalonador de CPU (*Scheduler*) para distribuir o tempo de processamento entre processos concorrentes.

### 6.1 Objetivos e Métricas do Escalonador

Um bom algoritmo de escalonamento busca otimizar as seguintes métricas fundamentais:

* **Utilização da CPU:** Manter o processador ocupado 100% do tempo.
* **Vazão (*Throughput*):** Maximizar a quantidade de processos concluídos por unidade de tempo (ex: processos por minuto).
* **Tempo de Retorno (*Turnaround Time*):** Minimizar o tempo total decorrido entre a submissão do processo e a sua conclusão final.
* **Tempo de Espera (*Waiting Time*):** Minimizar o tempo total acumulado que um processo passa na fila de `Pronto`.
* **Tempo de Resposta (*Response Time*):** Minimizar o tempo decorrido entre a submissão de uma requisição interativa e o início da primeira resposta visível ao usuário.

### 6.2 Escalonamento Não-Preemptivo vs. Preemptivo

* **Não-Preemptivo:** Uma vez que a CPU é alocada a um processo, ele a mantém até voluntariamente liberar o processamento (seja encerrando ou solicitando uma operação de E/S).
* **Preemptivo:** O Sistema Operacional pode interromper forçadamente um processo em execução a qualquer momento para conceder a CPU a outro processo de maior prioridade ou cuja fatia de tempo expirou.

### 6.3 Análise Aprofundada dos Algoritmos

1. **FCFS (First-Come, First-Served):**
   - Os processos são atendidos rigorosamente na ordem em que chegam à fila de `Pronto`.
   - Simples de implementar com uma fila FIFO.
   - **Problema:** Suscetível ao **Efeito Comboio** (*Convoy Effect*), onde vários processos curtos ficam parados aguardando um processo extremamente longo que domina a CPU.

2. **SJF (Shortest Job First) e SRTF (Shortest Remaining Time First):**
   - Seleciona o processo que possui a menor estimativa de tempo de execução (*CPU Burst*).
   - O SJF é não-preemptivo; o SRTF é a versão preemptiva equivalente.
   - **Vantagem:** Matematicamente provado que gera o menor tempo médio de espera.
   - **Desvantagem:** Requer a previsão do tempo de CPU futuro; pode causar **Starvation** (postergação indefinida) em processos longos se houver fluxo constante de processos curtos.

3. **Round Robin (RR):**
   - Desenvolvido especificamente para sistemas de tempo compartilhado (*timesharing*).
   - Cada processo recebe uma pequena fatia de tempo fixa da CPU chamada **Quantum** (geralmente entre 10 e 100 milissegundos).
   - Se o processo não terminar durante o seu Quantum, ocorre preempção, o processo é colocado no fim da fila de prontos e o próximo processo é executado.

```
   Quantum = 4 unidades
   
   Fila de Prontos: [P1 (10u), P2 (3u), P3 (5u)]
   
   Execução no tempo:
   0-----4-------7----------11------12---------16--18 (Tempo)
   | P1  |  P2   |   P3     |  P1   |   P3     | P1 |
   +-----+-------+----------+-------+----------+----+
```

---

## 7. Página 10: Gerenciamento de Memória Principal e Memória Virtual

A Página 10 discute como o Sistema Operacional abstrai e aloca a memória física limitada do sistema.

### 7.1 Fragmentação Interna e Externa

Em sistemas de gerenciamento de memória antigos sem memória virtual:
* **Fragmentação Externa:** Ocorre quando existe memória total suficiente para satisfazer uma requisição de alocação, mas o espaço está dividido em pequenos blocos não-contíguos espalhados pela RAM.
* **Fragmentação Interna:** Ocorre quando a memória é alocada em blocos de tamanho fixo. Se o processo solicitar um espaço ligeiramente menor do que o bloco, a sobra interna ao bloco fica desperdiçada.

### 7.2 Mecanismo de Paginamento (Paging)

Para eliminar completamente a fragmentação externa, os sistemas modernos utilizam a técnica de **Paginamento**:

* O espaço de endereçamento lógico do programa é dividido em blocos de tamanho fixo chamados **Páginas Lógicas**.
* A memória física RAM é dividida em blocos de tamanho rigorosamente idêntico chamados **Molduras de Página (*Frames*)**.
* O tamanho típico de uma página/frame em sistemas modernos x86/x64 é de 4 KB (4096 bytes).

```
   ENDEREÇO LÓGICO GENERADO PELA CPU:
   +------------------------------------+-----------------------------------+
   | Número da Página Lógica (p)        | Deslocamento / Offset (d)         |
   +------------------------------------+-----------------------------------+
                     |                                    |
                     v                                    |
           +--------------------+                         |
           | Tabela de Páginas  |                         |
           +--------------------+                         |
           | Pág 0  --> Frame 3 |                         |
           | Pág 1  --> Frame 8 |                         |
           | Pág 2  --> Frame 1 |                         |
           +--------------------+                         |
                     |                                    |
                     v                                    v
   ENDEREÇO FÍSICO RESULTANTE NA RAM:
   +------------------------------------+-----------------------------------+
   | Número do Frame Físico (f)         | Deslocamento / Offset (d)         |
   +------------------------------------+-----------------------------------+
```

### 7.3 Unidade de Gerenciamento de Memória (MMU) e TLB

A conversão de um endereço virtual para físico ocorre em hardware de alta velocidade através da **MMU (Memory Management Unit)**.

Como consultar a Tabela de Páginas na RAM a cada acesso à memória tornaria o sistema 50% mais lento, a MMU possui uma cache interna de altíssima velocidade chamada **Translation Lookaside Buffer (TLB)**:

1. A CPU emite um endereço virtual.
2. A MMU busca primeiro o número da página no **TLB** (*TLB Hit*).
3. Se encontrado, o número do Frame é retornado instantaneamente em menos de 1 ciclo de clock.
4. Se não encontrado (*TLB Miss*), a MMU lê a Tabela de Páginas na memória RAM, realiza a tradução e atualiza o TLB para acessos futuros.

---

## 8. Página 11: Algoritmos de Substituição de Páginas e Thrashing

A Página 11 aprofunda-se no conceito de **Memória Virtual**, permitindo que o sistema execute programas cujo tamanho excede a capacidade total da memória RAM física instalada.

### 8.1 A Métrica da Falta de Página (Page Fault)

Quando um processo tenta acessar uma página virtual que atualmente não está carregada na memória RAM (o bit de presença na tabela de páginas é `0`):

1. O hardware da MMU gera uma exceção de **Falta de Página (*Page Fault*)**.
2. A execução do processo é pausada e o controle passa para o Kernel.
3. O Kernel localiza a página necessária no armazenamento secundário (disco de *swap* ou arquivo em disco).
4. O Kernel encontra um Frame físico livre na RAM.
5. Se não houver Frames livres, o Kernel executa um **Algoritmo de Substituição de Páginas** para selecionar uma página "vítima" e gravá-la no disco se ela tiver sido modificada (bit *dirty* = 1).
6. A nova página é lida do disco para o Frame livre.
7. A Tabela de Páginas é atualizada (bit de presença = `1`) e a instrução que causou a falha é reiniciada.

### 8.2 Estudo Detalhado dos Algoritmos de Substituição

* **FIFO (First-In, First-Out):**
  - Substitui a página que está na memória há mais tempo.
  - Fácil implementação através de uma fila simples.
  - **Anomalia de Belady:** Em certos casos, aumentar o número de frames alocados ao processo pode aumentar (em vez de diminuir) o número total de Faltas de Página.

* **LRU (Least Recently Used):**
  - Substitui a página que não é acessada há mais tempo.
  - Baseia-se no princípio da **Localidade Temporal** (se foi usada recentemente, provavelmente será usada em breve).
  - Exige suporte de hardware (contadores de clock em cada acesso ou pilhas de hardware) para atualização rápida.

* **OPT (Algoritmo Ótimo / Minsky):**
  - Substitui a página que não será utilizada pelo maior período de tempo no futuro.
  - Impossível de ser implementado na prática em tempo real, pois exige conhecimento prévio do futuro.
  - Serve como parâmetro ideal de comparação para avaliar outros algoritmos.

### 8.3 O Conjunto de Trabalho (Working Set) e a Hiperpaginação (Thrashing)

O **Working Set** de um processo é o conjunto de páginas ativamente acessadas por ele durante um intervalo de tempo recente.

Se a quantidade de memória RAM livre for insuficiente para abrigar o *Working Set* combinado de todos os processos ativos, ocorre o fenômeno de **Hiperpaginação (*Thrashing*)**:
- O sistema passa a gastar quase 100% do seu tempo processando faltas de páginas e realizando leituras/escritas no disco.
- A utilização da CPU despenca.
- O escalonador de CPU, percebendo a baixa utilização, tenta aumentar o grau de multiprogramação colocando mais processos em execução, piorando ainda mais o problema.

---

## 9. Página 12: Sistemas de Arquivos e Organização Física/Lógica de Discos

A Página 12 apresenta a arquitetura do **Sistema de Arquivos**, que abstrai o disco físico de setores e trilhas magnéticas/eletrônicas em entidades lógicas organizadas.

### 9.1 Visão Lógica: Arquivos e Diretórios

Um arquivo é um espaço de endereçamento lógico contíguo mantido pelo Sistema Operacional. Ele possui:
- **Nome e Extensão**
- **Metadados:** Tamanho, permissões de acesso (leitura, escrita, execução), proprietário, datas de criação e modificação.
- **Estrutura de Diretórios:** Organização em árvore para indexação dos arquivos.

### 9.2 Métodos de Alocação de Espaço em Disco

1. **Alocação Contígua:**
   - Cada arquivo ocupa um conjunto de blocos adjacentes no disco.
   - **Vantagem:** Excelente velocidade de leitura sequencial.
   - **Desvantagem:** Fragmentação externa grave do disco e dificuldade em expandir o tamanho do arquivo.

2. **Alocação Encadeada:**
   - Cada bloco de disco contém um ponteiro para o próximo bloco do arquivo.
   - **Vantagem:** Nenhuma fragmentação externa.
   - **Desvantagem:** Acesso aleatório extremamente lento (é necessário ler os $N-1$ blocos anteriores para alcançar o bloco $N$).

3. **Alocação Indexada:**
   - Cada arquivo possui um **Bloco de Índice** que reúne todos os ponteiros diretos para os blocos de dados.

### 9.3 Estrutura Interna de Inodes nos Sistemas UNIX/Linux

O **Inode** (Index Node) é uma estrutura de dados fundamental em sistemas POSIX para descrever arquivos:

```
+-----------------------------------------------------------------+
|                       ESTRUTURA DO INODE                        |
+-----------------------------------------------------------------+
| Permissões: rwxr-xr--                                           |
| Identificador do Proprietário (UID) e Grupo (GID)               |
| Tamanho do Arquivo em Bytes                                     |
| Timestamps (atime, mtime, ctime)                                |
+-----------------------------------------------------------------+
| Ponteiros Diretos de Bloco [0 a 11] ---> Blocos de Dados Diretos|
| Ponteiro Indireto Simples ---------> Bloco de Ponteiros        |
| Ponteiro Indireto Duplo -----------> Bloco de Blocos de Ptr     |
| Ponteiro Indireto Triplo ----------> Bloco Nível 3              |
+-----------------------------------------------------------------+
```

Essa estrutura permite acessar rapidamente arquivos pequenos (através dos 12 ponteiros diretos) ao mesmo tempo que suporta arquivos de múltiplos Terabytes utilizando ponteiros indiretos encadeados.

---

## 10. Página 13: Subsistemas de Entrada/Saída, Interrupções e DMA

A Página 13 aborda como o Sistema Operacional faz a gestão da enorme variedade de dispositivos periféricos (teclados, discos, placas de rede, monitores) que operam em velocidades significativamente menores que a CPU.

### 10.1 Arquitetura da Camada de E/S do SO

O subsistema de E/S é estruturado em camadas para isolar o núcleo do SO das especificidades de cada fabricante de hardware:

1. **Handlers de Interrupção:** Código de mais baixo nível que lida com o sinal elétrico enviado pelo dispositivo.
2. **Drivers de Dispositivos (*Device Drivers*):** Módulos de software específicos que convertem solicitações genéricas do SO em comandos de registradores do dispositivo.
3. **Camada Independente de Dispositivo:** Gerencia o *buffering*, *caching*, verificação de permissões e nomes lógicos dos dispositivos.
4. **Interface com Usuário / Syscalls:** Funções padrão como `read()`, `write()`, `open()`.

### 10.2 Polling vs. Interrupções Baseadas em Hardware

* **E/S Programada / Polling:**
  - A CPU entra em um loop contínuo testando o registrador de estado do periférico até que a operação seja concluída.
  - **Desvantagem:** Desperdiça bilhões de ciclos úteis de CPU (*Busy Waiting*).

* **E/S Dirigida por Interrupção:**
  - A CPU envia o comando ao periférico e continua imediatamente executando outras tarefas.
  - Quando o periférico conclui a operação, dispara uma **Interrupção de Hardware** através da linha `IRQ` conectada ao Controlador de Interrupções (PIC/APIC).
  - A CPU pausa o programa atual, executa a **Rotina de Serviço de Interrupção (ISR)** e depois retoma o programa pausado.

### 10.3 Controlador DMA (Direct Memory Access) e Barramento

Para transferências de grandes volumes de dados (como a leitura de um arquivo de vídeo do SSD para a RAM), o processamento interrupção por interrupção a cada byte lido sobrecarregaria excessivamente a CPU.

Nesses cenários, utiliza-se o hardware de **DMA (Acesso Direto à Memória)**:

```
  +------+        1. CPU programa o controlador DMA            +-----+
  | CPU  | --------------------------------------------------> | DMA |
  +------+           (Endereço de Origem, Destino, Tamanho)    +-----+
     |                                                            |
     | 2. CPU continua a executar                                 | 3. DMA transfere dados
     |    outros processos                                        |    bloco por bloco
     v                                                            v
  +-------------------------------------------------------------------+
  |                         MEMÓRIA RAM                               |
  +-------------------------------------------------------------------+
     ^                                                            |
     |                                                            |
     +------------------------------------------------------------+
                     4. DMA dispara Interrupção de conclusão
```

---

## 11. Matriz Comparativa Sintética

A tabela comparativa a seguir sintetiza os tópicos centrais discutidos da Página 5 à Página 13:

| Página | Conceito Chave | Mecanismo de Hardware | Papel do Sistema Operacional |
| :---: | :--- | :--- | :--- |
| **5** | Arquitetura Von Neumann | Registradores (`PC`, `IR`, `MAR`, `MBR`) | Abstração básica de programas em memória |
| **6** | Ciclo de Instrução | Unidade de Controle e ULA | Gerenciamento de sinais e interrupções de hardware |
| **7** | Modos de Execução | Anéis de Proteção (Ring 0 / Ring 3) | Implementação de chamadas de sistema (Syscalls) |
| **8** | Processos | Salvamento autônomo de registradores | Manutenção do PCB e gestão de estados |
| **9** | Escalonamento | Interrupção por temporizador (*Timer*) | Execução dos algoritmos FCFS, SJF e Round Robin |
| **10**| Paginamento | Unidade de Gerenciamento de Memória (MMU)| Manutenção das Tabelas de Páginas e TLB |
| **11**| Memória Virtual | Exceção de Falta de Página (*Page Fault*) | Algoritmos de Substituição (LRU, FIFO) e Swap |
| **12**| Sistemas de Arquivos | Setores, Trilhas e Blocos do Disco | Alocação de Blocos, Inodes e Estrutura de Pastas |
| **13**| Subsistema de E/S | Controlador DMA e Linhas IRQ | Drivers de Dispositivos e Gerenciamento de Buffers |

---

## 12. Implementação Prática de Simulação do Escalonador Round-Robin em C

Abaixo apresenta-se um exemplo explicativo detalhado e funcional escrito em linguagem C, projetado para simular o comportamento de um escalonador **Round Robin** conforme discutido conceitualmente na Página 9:

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_PROCESSES 10

typedef enum {
    NOVO,
    PRONTO,
    EXECUTANDO,
    BLOQUEADO,
    FINALIZADO
} EstadoProcesso;

typedef struct {
    int pid;                      // Identificador do Processo
    int tempo_chegada;            // Tempo em que o processo entra na fila
    int tempo_execucao_total;     // Duracao total necessária da CPU
    int tempo_restante;           // Tempo de CPU ainda necessario
    int tempo_espera;             // Tempo total passado na fila de pronto
    int tempo_fim;                // Momento em que o processo foi concluido
    EstadoProcesso estado;        // Estado atual do processo
} PCB;

void simular_round_robin(PCB processos[], int n, int quantum) {
    int tempo_atual = 0;
    int processos_concluidos = 0;
    int i;

    printf("===============================================================\n");
    printf("     SIMULACAO DE ESCALONAMENTO ROUND ROBIN (Quantum = %d)\n", quantum);
    printf("===============================================================\n\n");

    while (processos_concluidos < n) {
        bool progresso_feito = false;

        for (i = 0; i < n; i++) {
            // Verifica se o processo ja chegou e esta pronto para executar
            if (processos[i].tempo_chegada <= tempo_atual && processos[i].estado != FINALIZADO) {
                progresso_feito = true;
                processos[i].estado = EXECUTANDO;

                int tempo_fatia = (processos[i].tempo_restante > quantum) ? quantum : processos[i].tempo_restante;

                printf("[Tempo %02d ms] Processo P%d entrou na CPU (Tempo Restante: %d ms)\n",
                       tempo_atual, processos[i].pid, processos[i].tempo_restante);

                // Simula a execução do Quantum
                tempo_atual += tempo_fatia;
                processos[i].tempo_restante -= tempo_fatia;

                // Atualiza o tempo de espera dos outros processos que ja chegaram
                for (int j = 0; j < n; j++) {
                    if (j != i && processos[j].tempo_chegada <= tempo_atual && processos[j].estado != FINALIZADO) {
                        processos[j].tempo_espera += tempo_fatia;
                    }
                }

                if (processos[i].tempo_restante == 0) {
                    processos[i].estado = FINALIZADO;
                    processos[i].tempo_fim = tempo_atual;
                    processos_concluidos++;
                    printf("[Tempo %02d ms] ---> Processo P%d FINALIZADO com sucesso!\n\n",
                           tempo_atual, processos[i].pid);
                } else {
                    processos[i].estado = PRONTO;
                    printf("[Tempo %02d ms] ---> Processo P%d sofrera PREEMPÇÃO pelo Quantum.\n\n",
                           tempo_atual, processos[i].pid);
                }
            }
        }

        // Se nenhum processo estava pronto no tempo atual, o tempo avanca (CPU ociosa)
        if (!progresso_feito) {
            printf("[Tempo %02d ms] CPU Ociosa aguardando chegada de processos...\n", tempo_atual);
            tempo_atual++;
        }
    }

    // Exibe o relatorio final de metricas
    printf("===============================================================\n");
    printf("                    RELATORIO DE DESEMPENHO                    \n");
    printf("===============================================================\n");
    printf("PID\tChegada\tTotal\tFim\tEspera\tTurnaround\n");

    float soma_espera = 0;
    float soma_turnaround = 0;

    for (i = 0; i < n; i++) {
        int turnaround = processos[i].tempo_fim - processos[i].tempo_chegada;
        soma_espera += processos[i].tempo_espera;
        soma_turnaround += turnaround;

        printf("P%d\t%d ms\t%d ms\t%d ms\t%d ms\t%d ms\n",
               processos[i].pid,
               processos[i].tempo_chegada,
               processos[i].tempo_execucao_total,
               processos[i].tempo_fim,
               processos[i].tempo_espera,
               turnaround);
    }

    printf("\nTempo Medio de Espera: %.2f ms\n", soma_espera / n);
    printf("Tempo Medio de Turnaround: %.2f ms\n", soma_turnaround / n);
    printf("===============================================================\n");
}

int main() {
    PCB conjunto_processos[3] = {
        { .pid = 1, .tempo_chegada = 0, .tempo_execucao_total = 10, .tempo_restante = 10, .estado = PRONTO },
        { .pid = 2, .tempo_chegada = 1, .tempo_execucao_total = 4,  .tempo_restante = 4,  .estado = PRONTO },
        { .pid = 3, .tempo_chegada = 2, .tempo_execucao_total = 6,  .tempo_restante = 6,  .estado = PRONTO }
    };

    simular_round_robin(conjunto_processos, 3, 3);
    return 0;
}
```

---

## 13. Glossário Extenso de Termos Técnicos

Para auxílio no estudo e consulta rápida dos conceitos contidos nas páginas analisadas:

* **Anel de Proteção (*Protection Ring*):** Arquitetura de segurança em hardware que limita os privilégios das instruções executadas pela CPU.
* **Barramento (*Bus*):** Conjunto de linhas elétricas paralelas utilizadas para transferir dados, endereços e sinais de controle entre os componentes da máquina.
* **Chamada de Sistema (*System Call*):** Mecanismo utilizado pelas aplicações em modo usuário para solicitar serviços privilegiados do Kernel.
* **DMA (*Direct Memory Access*):** Recurso de hardware que permite aos periféricos transferirem dados diretamente para a RAM sem sobrecarregar a CPU.
* **Escalonador (*Scheduler*):** Componente do Kernel do SO que decide qual processo da fila de prontos ocupará a CPU.
* **Falta de Página (*Page Fault*):** Exceção gerada pela MMU quando um programa tenta acessar uma página lógica que não está presente na memória RAM.
* **Inode:** Estrutura de dados em sistemas baseados em UNIX que armazena os metadados e os ponteiros de localização de um arquivo em disco.
* **MMU (*Memory Management Unit*):** Módulo de hardware que realiza a tradução em tempo real de endereços virtuais para endereços físicos na RAM.
* **Paginamento (*Paging*):** Esquema de gerenciamento de memória que divide o espaço de endereçamento em páginas de tamanho fixo para eliminar a fragmentação externa.
* **PCB (*Process Control Block*):** Estrutura de dados mantida pelo Kernel para armazenar todo o estado e contexto de um processo.
* **Preempção:** Ação forçada executada pelo SO para interromper a execução de um processo ativo e alocar a CPU para outro.
* **Quantum:** Fatia de tempo fixa concedida a um processo no algoritmo de escalonamento Round Robin.
* **TLB (*Translation Lookaside Buffer*):** Cache de alta velocidade presente na MMU que armazena as traduções recentes de endereços virtuais para físicos.
* **Thrashing (Hiperpaginação):** Estado crítico em que o computador gasta mais tempo trocando páginas de memória virtual com o disco do que executando instruções.
* **Working Set:** Conjunto de páginas de memória ativamente acessadas por um processo em um determinado janela de tempo.

---

## 14. Conclusões e Considerações Finais

O panorama técnico coberto entre as **Páginas 5 e 13** evidencia como a evolução combinada do hardware e do software viabilizou os sistemas computacionais modernos.

### Principais Conclusões:
1. **Abstração Transparente:** O Sistema Operacional atua como uma camada de abstração complexa que transforma um hardware rudimentar de registradores, circuitos e setores em abstrações amigáveis como processos, arquivos e sockets de rede.
2. **Gerenciamento de Recursos Escassos:** A CPU e a Memória RAM são recursos finitos compartilhados concorrentemente. Mecanismos como o escalonador Round-Robin e o Paginamento de Memória Virtual garantem a ilusão de capacidade ilimitada e dedicada para cada aplicação.
3. **Desempenho x Segurança:** A separação rigorosa entre os modos de execução Kernel e Usuário, associada às interrupções e ao suporte a DMA, garante estabilidade e proteção contra falhas ou abusos sem sacrificar o desempenho do sistema.
