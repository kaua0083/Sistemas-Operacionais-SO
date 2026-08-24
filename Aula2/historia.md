# História e Evolução dos Sistemas Operacionais

**Síntese técnico-histórica fundamentada no capítulo introdutório de *Sistemas Operacionais Modernos* e nos conceitos essenciais da Ciência da Computação.**

> Um sistema operacional (SO) atua simultaneamente como uma **máquina estendida** (oferecendo abstrações simplificadas do hardware) e como um **gerenciador de recursos** (coordenando CPU, memória, dispositivos de E/S e armazenamento).

---

## 📑 Sumário

1. [Visão Geral e Gerações Tecnológicas](#1-visão-geral-e-gerações-tecnológicas)
2. [O Problema Fundamental e a Arquitetura do SO](#2-o-problema-fundamental-e-a-arquitetura-do-so)
3. [Evolução Cronológica e Arquitetural](#3-evolução-cronológica-e-arquitetural)
   - [3.1 Era Pré-SO e 1ª Geração (1945–1955): Válvulas e Operação Manual](#31-era-pré-so-e-1ª-geração-19451955-válvulas-e-operação-manual)
   - [3.2 2ª Geração (1955–1965): Transistores e Processamento em Lote](#32-2ª-geração-19551965-transistores-e-processamento-em-lote)
   - [3.3 3ª Geração (1965–1980): CI, Multiprogramação e Timesharing](#33-3ª-geração-19651980-ci-multiprogramação-e-timesharing)
   - [3.4 A Linhagem UNIX e Padrões (POSIX)](#34-a-linhagem-unix-e-padrões-posix)
   - [3.5 4ª Geração (1980–Presente): VLSI, PCs, GUIs e Sistemas Pessoais](#35-4ª-geração-1980presente-vlsi-pcs-guis-e-sistemas-pessoais)
   - [3.6 5ª Geração: Computação Móvel, Distribuída, Nuvem e Contêineres](#36-5ª-geração-computação-móvel-distribuída-nuvem-e-contêineres)
4. [Mecanismos Fundamentais do Kernel](#4-mecanismos-fundamentais-do-kernel)
5. [Tabelas Comparativas e Síntese](#5-tabelas-comparativas-e-síntese)
6. [Conclusões para a Engenharia de Software](#6-conclusões-para-a-engenharia-de-software)
7. [Referências](#7-referências)

---

## 1. Visão Geral e Gerações Tecnológicas

A evolução dos sistemas operacionais reflete uma busca constante para resolver gargalos de hardware, melhorar a produtividade do desenvolvedor e otimizar o tempo de resposta ao usuário.

| Geração | Período | Tecnologia Dominante | Modo de Operação | Problema Central | Solução Arquitetural |
|---|---|---|---|---|---|
| **1ª** | 1945–1955 | Válvulas, painéis de cabos | Execução manual e direta | Alto tempo de preparação por programa | Código absoluto, cartões perfurados |
| **2ª** | 1955–1965 | Transistores, Mainframes | Processamento em Lote (*Batch*) | CPU ociosa durante operações de E/S | Monitor Residente, fitas magnéticas, JCL |
| **3ª** | 1965–1980 | Circuitos Integrados (CI) | Multiprogramação e *Timesharing* | Baixa interatividade e desperdício de recursos | Spooling, interrupções, proteção de memória, UNIX |
| **4ª** | 1980–Pres. | VLSI, Microprocessadores | Computação Pessoal / Desktop | Complexidade de uso e falta de padronização | GUI, CP/M, MS-DOS, Windows, Linux, POSIX |
| **5ª** | Moderno | Múltiplos Núcleos, SoC | Móvel, Distribuída e Nuvem | Escala, latência, consumo energético e isolamento | Virtualização, Contêineres, RTOS, Sandbox |

---

## 2. O Problema Fundamental e a Arquitetura do SO

O hardware expõe registradores, interrupções, controladores e barramentos extremamente complexos. O SO abstrai esses elementos em componentes manipuláveis pelas aplicações.

### Camadas do Sistema Operacional

```
+-------------------------------------------------------+
|                 Aplicações de Usuário                 |
+-------------------------------------------------------+
|            Shell / GUI / Bibliotecas (libc)           |
+-------------------------------------------------------+  <-- Espaço de Usuário (Modo Restrito)
|               Interface de Chamadas de Sistema        |  <-- Syscalls (int 0x80, syscall)
+-------------------------------------------------------+
|    Núcleo (Kernel): Gerenciamento de Processos,       |  <-- Espaço do Núcleo (Modo Kernel)
|    Memória Virtual, Sistemas de Arquivos e Drivers    |
+-------------------------------------------------------+
|                       Hardware                        |
|        (CPU, RAM, Controladores de E/S, Disco)        |
+-------------------------------------------------------+
```

### Modos de Operação
* **Modo Usuário (*User Mode*):** Executa aplicações comuns com privilégios limitados. Acessos diretos ao hardware ou instruções críticas são bloqueados.
* **Modo Kernel (*Kernel Mode*):** Executa o núcleo do SO com acesso total aos recursos do sistema e instruções privilegiadas da CPU.

---

## 3. Evolução Cronológica e Arquitetural

### 3.1 Era Pré-SO e 1ª Geração (1945–1955): Válvulas e Operação Manual
* **Características:** Máquinas gigantescas (ENIAC, Mark I) baseadas em válvulas e conexões físicas por cabos/painéis.
* **Operação:** O usuário programava diretamente em código de máquina e operava fisicamente o computador.
* **Limitação:** Ausência de camadas de software residente; todo o tempo de configuração era contabilizado como ociosidade da maquina.

### 3.2 2ª Geração (1955–1965): Transistores e Processamento em Lote
* **Transistores:** Aumentaram a confiabilidade e permitiram a comercialização de mainframes (ex.: IBM 7094).
* **Processamento em Lote (*Batch*):**
  1. Trabalhos (*jobs*) eram gravados sequencialmente em fitas magnéticas por computadores auxiliares (ex.: IBM 1401).
  2. A fita era lida pelo mainframe principal.
  3. O **Monitor Residente** (ancestral do kernel) carregava automaticamente o próximo programa após o término do atual.
* **Linguagens de Controle (JCL):** Cartões perfurados especiais (ex.: `$JOB`, `$FORTRAN`, `$RUN`) forneciam metadados de execução.

```
[ Cartões Perfurados ] ---> ( Máquina Auxiliar IBM 1401 ) ---> [ Fita de Entrada ]
                                                                      |
                                                                      v
[ Relatório Impresso ] <--- ( Máquina Auxiliar IBM 1401 ) <--- [ Fita de Saída ] <--- ( Mainframe IBM 7094 )
```

### 3.3 3ª Geração (1965–1980): CI, Multiprogramação e Timesharing
* **Circuitos Integrados (CI):** Introduziram as famílias de computadores compatíveis (ex.: IBM System/360).
* **Multiprogramação:** Vários programas permanecem na RAM simultaneamente. Quando o processo ativo bloqueia para realizar E/S, a CPU é alternada para outro programa.
* **Spooling (*Simultaneous Peripheral Operations On-Line*):** Uso do disco rígido como buffer circular de E/S, eliminando a necessidade de fitas magnéticas intermediárias.
* **Compartilhamento de Tempo (*Timesharing*):** Fatiamento do tempo de CPU (*quantum*) entre múltiplos usuários conectados via terminais interativos (ex.: CTSS e MULTICS).

### 3.4 A Linhagem UNIX e Padrões (POSIX)
* **Origem:** Criado por Ken Thompson e Dennis Ritchie nos Bell Labs (1969) para minicomputadores PDP-7 e PDP-11.
* **Inovações:**
  * Escrito predominantemente em **Linguagem C**, garantindo alta portabilidade.
  * Filosofia Unix: ferramentas pequenas e especializadas integradas via *pipes* (`|`).
  * Abstração unificada: *"Tudo é um arquivo"*.
* **Fragmentação e Padronização:**
  * Divisão entre **System V** (AT&T) e **BSD** (UC Berkeley).
  * O padrão **POSIX** (IEEE) especificou chamadas de sistema e interfaces padrão para garantir a compatibilidade entre distribuições.

```
                  [ MULTICS ]
                       |
                       v
                   [ UNIX ]
                  /        \
                 /          \
         [ BSD ]            [ System V ]
        /   |   \                 |
       v    v    v                v
 [macOS] [FreeBSD] [OpenBSD]   [Solaris / HP-UX]
                  ^
                  | (Conceitual)
              [ Linux ] ---> [ Android ]
```

### 3.5 4ª Geração (1980–Presente): VLSI, PCs, GUIs e Sistemas Pessoais
* **Microprocessadores (VLSI):** Permitiram a criação de computadores pessoais (PCs).
* **Evolução dos SOs Pessoais:**
  * **CP/M:** Primeiro SO padrão para microcomputadores de 8 bits.
  * **MS-DOS:** Adotado pela IBM para o IBM PC; operava via linha de comando (CLI) em modo real (16-bit).
  * **Interfaces Gráficas (GUI):** Pioneirismo da Xerox PARC, popularizado pelo Apple Macintosh (1984) e expandido pelo Windows (do 3.11 ao Windows 11).
  * **Windows NT:** Reescrita completa em 32-bit (liderada por David Cutler), trazendo isolamento real de memória e arquitetura preemptiva corporativa.
  * **Linux:** Criado por Linus Torvalds (1991) baseado em conceitos do MINIX e licença GNU GPL, tornando-se o pilar dos servidores e da nuvem.

### 3.6 5ª Geração: Computação Móvel, Distribuída, Nuvem e Contêineres
* **Sistemas Operacionais Móveis:** Android (kernel Linux) e iOS (base XNU/BSD), otimizados para consumo energético, telas sensíveis ao toque e controle rígido de processos por *sandboxing*.
* **Virtualização e Hypervisors:** Permitem a execução de múltiplos SOs convidados sobre o mesmo hardware físico (Type-1 Bare-Metal e Type-2 Hosted).
* **Contêineres (Docker / LXC):** Isolamento em nível de sistema operacional usando *namespaces* e *cgroups* do kernel Linux, compartilhando o mesmo núcleo sem o overhead de uma máquina virtual.

---

## 4. Mecanismos Fundamentais do Kernel

1. **Gestão de Processos e Threads:**
   * **Processo:** Unidade de alocação de recursos (espaço de memória, arquivos abertos).
   * **Thread:** Unidade de execução e escalonamento dentro de um processo.
   * **Escalonamento:** Algoritmos como Round-Robin, Prioridade Dinâmica e CFS (*Completely Fair Scheduler*).
2. **Gerenciamento de Memória Virtual:**
   * **Paginação e Segmentação:** Mapeamento de endereços lógicos em físicos via **MMU** (*Memory Management Unit*) e cache de tradução **TLB**.
   * **Thrashing:** Colapso de desempenho quando o sistema gasta mais tempo trocando páginas de disco do que executando código.
3. **Sistemas de Arquivos e Armazenamento:**
   * Abstração de blocos físicos em estruturas hierárquicas de diretórios.
   * Recursos avançados: *Journaling* (prevenção de corrupção após quedas de energia), permissões POSIX, ext4, NTFS, ZFS.
4. **Sincronização e Concorrência:**
   * Mecanismos para evitar **Condições de Corrida**: Mutexes, Semáforos e Monitores.
   * Prevenção de **Deadlocks** (impasse circular) com base nas 4 condições de Coffman: Exclusão Mútua, Posse e Espera, Sem Preempção e Espera Circular.

---

## 5. Tabelas Comparativas e Síntese

### Comparativo Arquitetural de Kernels

| Tipo de Kernel | Descrição | Vantagens | Desvantagens | Exemplos |
|---|---|---|---|---|
| **Monolítico** | Todos os serviços (drivers, rede, FS) executam no espaço do núcleo. | Desempenho máximo, chamadas diretas em memória. | Falha em um driver pode derrubar todo o sistema. | Linux, BSD, MS-DOS |
| **Micronúcleo (*Microkernel*)** | O núcleo mantém apenas o mínimo (IPC, memória básica, escalonamento). | Alta estabilidade, segurança e modularidade. | Overhead de comunicação interprocessos (IPC). | MINIX 3, QNX, seL4 |
| **Híbrido** | Combina a estrutura do micronúcleo com partes monolíticas para ganho de desempenho. | Equilíbrio entre isolamento e velocidade. | Complexidade interna elevada. | Windows NT, macOS (XNU) |

---

## 6. Conclusões para a Engenharia de Software

* **Abstrações Eficientes:** O projeto de software deve utilizar as abstrações do SO (como arquivos e sockets) sem ignorar as características subjacentes do hardware (como latência de disco e custos de troca de contexto).
* **Concorrência e Segurança:** Problemas como *race conditions* e vazamentos de memória precisam ser tratados na camada de aplicação utilizando os primitivos fornecidos pelo kernel.
* **Isolamento como Pilar:** A separação entre Espaço de Usuário e Espaço do Núcleo garante a resiliência do sistema e a proteção contra falhas catastróficas.

---

## 7. Referências

1. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016.
2. SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. *Fundamentos de Sistemas Operacionais*. 9. ed. Rio de Janeiro: LTC, 2015.
3. STALLINGS, William. *Sistemas Operacionais: Conceitos e Projetos*. 8. ed. São Paulo: Pearson, 2015.
4. KERNIGHAN, Brian W.; RITCHIE, Dennis M. *A Linguagem de Programação C*. Rio de Janeiro: Campus, 1990.
