# Resumo: Nuvem e Sistemas Operacionais

**Instituição:** Fatec  
**Professor:** Me. Deivison S. Takatu  
**Disciplina:** Nuvem e Sistemas Operacionais  

---

## 1. Fundamentos da Computação em Nuvem (Cloud Computing)

A evolução para a nuvem representa uma mudança de paradigma: a transição de ativos físicos próprios para a contratação de serviços sob demanda.
* **CAPEX $\rightarrow$ OPEX:** Substituição do investimento inicial em infraestrutura/hardware (**CAPEX**) por despesas operacionais contínuas pagas conforme o uso (**OPEX**).

### Características Principais (Modelo NIST)
1. **Autoatendimento sob Demanda (*Self-service*):** Provisionamento de recursos computacionais instantaneamente, sem necessidade de intervenção humana manual do provedor.
2. **Amplo Acesso à Rede:** Serviços acessíveis via internet através de múltiplos dispositivos (PCs, smartphones, tablets).
3. **Pool de Recursos (*Resource Pooling*):** Recursos compartilhados e alocados dinamicamente entre múltiplos usuários (*multi-tenant*).
4. **Elasticidade Rápida:** Capacidade de expandir ou contrair recursos rapidamente para responder à variação de demanda.
5. **Serviço Mensurável (*Pay-per-use*):** Monitoramento e controle do uso de recursos para cobrança automatizada baseada no consumo real.

---

## 2. Virtualização e Infraestrutura

A virtualização é a tecnologia base que viabiliza a computação em nuvem. O Sistema Operacional (SO) atua como a camada fundamental de abstração do hardware.

* **Hypervisor (VMM - Virtual Machine Monitor):** Camada de software responsável pela virtualização. Ela permite a criação e execução de múltiplas Máquinas Virtuais (VMs) isoladas sobre um único servidor físico.
* **Hierarquia do Ambiente Virtualizado:**
  $$\text{Hardware Físico (CPU, Memória, Rede)} \longrightarrow \text{Hypervisor (ex: KVM, VMware ESXi)} \longrightarrow \text{Máquinas Virtuais (SO + Apps)}$$

### Alta Disponibilidade em Nuvem
* **Zonas de Disponibilidade (AZs):** Datacenters fisicamente isolados em uma mesma região, equipados com infraestrutura independente de energia e rede.
* **Balanceamento de Carga (*Load Balancing*):** Distribuição do tráfego entre instâncias para evitar sobrecarga e eliminar pontos únicos de falha.
* **Replicação de Dados & Failover Automático:** Dados sincronizados entre zonas para garantia de continuidade de negócios, redirecionando o tráfego automaticamente em caso de falhas.

---

## 3. Modelos de Serviço e Implantação

### Modelos de Serviço
* **IaaS (Infraestrutura como Serviço):** Provedor fornece infraestrutura virtualizada (redes, armazenamento, servidores). O cliente gerencia o SO, middleware, runtime e aplicações.
  * *Exemplos:* AWS EC2, Azure VMs, Google Compute Engine.
* **PaaS (Plataforma como Serviço):** Provedor gerencia infraestrutura, SO e runtime. O desenvolvedor foca apenas no código e nas regras de negócio.
  * *Exemplos:* Heroku, Render, AWS Elastic Beanstalk, Google App Engine.
* **SaaS (Software como Serviço):** Aplicação completa disponibilizada via web no modelo de assinatura. O cliente não gerencia infraestrutura nem software.
  * *Exemplos:* Google Workspace, Microsoft 365, Salesforce.

### Modelos de Implantação
* **Nuvem Pública:** Infraestrutura compartilhada por múltiplos clientes, oferecendo alta escalabilidade e menor custo.
* **Nuvem Privada:** Infraestrutura dedicada a uma única organização (local ou hospedada), garantindo maior controle e segurança.
* **Nuvem Híbrida:** Integração entre nuvem pública e privada. Permite manter dados sensíveis *on-premise* e utilizar a nuvem pública para picos de demanda.

---

## 4. Provedores, Vantagens, Desafios e Segurança

### Principais Provedores
* **AWS (Amazon Web Services):** Líder de mercado, com vasto ecossistema de serviços.
* **Microsoft Azure:** Forte presença corporativa e integração com o ecossistema Microsoft.
* **GCP (Google Cloud Platform):** Destaque em soluções de Big Data, IA/ML e orquestração de containers.

### Vantagens e Desafios
* **Vantagens:** Redução de custos (OPEX), elasticidade, alta disponibilidade, abrangência global e aceleração da inovação.
* **Desafios:** Dependência de provedor (*Vendor lock-in*), complexidade na gestão de custos (FinOps), latência e conformidade regulatória (LGPD/GDPR).

### Modelo de Responsabilidade Compartilhada
* **Segurança DA Nuvem (Provedor):** Proteção da infraestrutura física, hardware, facilidades e hipervisores.
* **Segurança NA Nuvem (Cliente):** Gerenciamento de acessos (IAM), criptografia de dados, controle do SO e configurações de aplicações.

---

## 5. Containers e Microsserviços

* **Containers:** Isolamento a nível de sistema operacional. Empacotam a aplicação e suas dependências compartilhando o *kernel* do SO hospedeiro, tornando-se mais leves e rápidos que VMs.
  * **Docker:** Ferramenta padrão para criação e empacotamento de containers.
  * **Kubernetes:** Plataforma para orquestração, automação e escalabilidade de containers.
* **Microsserviços:** Arquitetura estruturada em serviços pequenos, independentes e comunicáveis via APIs (HTTP/REST), facilitando deploys e escalabilidade granular.

---

## 6. Prática: API REST, Node.js e Render

* **Web Services & API REST:** Permitem a interoperabilidade e comunicação padronizada entre sistemas heterogêneos utilizando o protocolo HTTP/HTTPS.
* **Express.js:** Framework minimalista para Node.js utilizado na construção de servidores backend e APIs.
* **CORS (*Cross-Origin Resource Sharing*):** Mecanismo de segurança que habilita e controla requisições entre domínios distintos no navegador.
* **Render:** Plataforma PaaS utilizada para publicação (*deploy*) contínuo e hospedagem de aplicações web e APIs.

---

## 7. Roteiro da Atividade Prática

1. **Desenvolvimento Local (`cloud-so-app`):**
   * Criar uma aplicação usando **Express.js** que consuma o módulo nativo `os` do Node.js.
   * Exibir dados do sistema operacional: nome do host, plataforma, arquitetura, contagem de CPUs, memória total/livre e tempo de atividade (*uptime*).
2. **Versionamento e Deploy:**
   * Subir o código para um repositório no **GitHub**.
   * Conectar o repositório ao **Render** configurando os comandos de build/start (`node index.js`).
3. **Análise Comparativa:**
   * Comparar os dados de hardware/SO retornados no ambiente local (máquina física) versus o ambiente em nuvem no Render (container/VM).
4. **Documentação:**
   * Elaborar um manual cobrindo os conceitos de SO (processos, memória, CPU, virtualização) e o passo a passo de desenvolvimento e deploy.