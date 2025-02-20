# 🖩 Calculadora 

Este projeto consiste em uma **calculadora web** desenvolvida com **JavaScript, HTML e CSS puro**, aplicando os princípios de **Clean Architecture** e **Programação Orientada a Objetos (POO)**.  

A estrutura do código segue o padrão de projeto **Template Method**, garantindo melhor organização e reutilização de código. Além disso, foram implementados **testes unitários com Jest** para validar as operações matemáticas e regras de negócio.  

---

## 🚀 Funcionalidades  

- ✅ Operações matemáticas básicas: **soma (+), subtração (-), multiplicação (*) e divisão (/)**.  
- ✅ Suporte a entrada via **mouse (cliques nos botões)** e **teclado (eventos de keyup)**.  
- ✅ Tratamento de erros para entradas inválidas.  
- ✅ Arquitetura baseada nos princípios **SOLID** e **Clean Architecture**.  
- ✅ Aplicação do **padrão Template Method** para evitar código duplicado.  
- ✅ **Testes unitários com Jest** para validar a classe `Calculator`.  

---

## 🛠️ Tecnologias Utilizadas  

- **JavaScript (ES6+)** → Lógica da calculadora com POO e Design Patterns.  
- **Jest** → Framework para testes unitários.  
- **HTML5 & CSS3** → Estruturação e estilização da interface.  

---

## 🏗️ Arquitetura do Projeto  

O projeto segue uma estrutura modular baseada em **Clean Architecture**, separando responsabilidades para facilitar a manutenção e escalabilidade.  

### 📂 Estrutura de Pastas  
```bash
calculator-project/
│── src/
│   ├── core/                  # Regras de negócio (Domínio)
│   │   ├── Calculator.js       # Classe principal da calculadora
│   │   ├── operations/         # Operações matemáticas separadas
│   ├── ui/                     # Interface do usuário (View)
│   │   ├── index.html          # Estrutura da interface
│   │   ├── reset.css          # reseta estilos padrões
│   │   ├── styles.css          # Estilização da página
│   │   ├── App.js              # Inicialização e integração
│   ├── handlers/               # Manipuladores de eventos
│   │   ├── InputHandler.js     # Classe base (Template Method)
│   │   ├── ButtonHandler.js    # Eventos de clique
│   │   ├── KeyboardHandler.js  # Eventos de teclado
│── tests/
│   ├── Calculator.test.js      # Testes unitários com Jest
│── README.md                   # Documentação do projeto
│── package.json                 # Dependências do projeto

