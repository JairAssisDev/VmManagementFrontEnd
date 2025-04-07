# Projeto - Gestão e Monitoramento de Máquinas Virtuais

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Desenvolvedor Júnior no time Ustore/Claro.

## ✅ Funcionalidades

### Backend (100% concluído - em repositório separado)

O backend da aplicação foi totalmente desenvolvido em Java com Spring Boot e está disponível neste repositório:

🔗 [Repositório do Backend](https://github.com/usuario/backend-vm-monitoramento) <!-- substitua pelo link real -->

**Funcionalidades:**
- [x] Autenticação com Spring Security e JWT.
- [x] API REST para listar, criar, iniciar, pausar, parar e excluir máquinas virtuais.
- [x] Regras de negócio: limite de 5 VMs por usuário.
- [x] Integração completa com o frontend via HTTP.
- [x] API documentada com Swagger.
- [x] Configurado para Docker e Docker Compose.

---

### Frontend (em desenvolvimento)

- [x] Tela de login com integração ao backend.
- [ ] Dashboard com gráficos (barra e pizza) usando Chart.js.
- [ ] Tela de listagem de máquinas virtuais.
- [ ] Tela de cadastro de nova VM.
- [ ] Ações: iniciar, pausar, parar e excluir VMs.

## 📦 Tecnologias Utilizadas

### Frontend:
- Angular 17
- Typescript
- CSS

### Backend (repositório separado):
- Java 17
- Spring Boot
- Spring Security
- JWT
- REST API

## ▶️ Como Rodar o Projeto

### Backend
Acesse o repositório e siga as instruções:  
🔗 [Backend no GitHub](https://github.com/JairAssisDev/Vmmanagement)

### Frontend

1. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```

2. Instale o gerenciador de pacotes e Angular CLI:
   ```bash
   npm i
   npm install -g npm@11.2.0
   npm install -g @angular/cli@17
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Inicie o servidor Angular:
   ```bash
   ng s
   ```

5. Acesse no navegador:
   ```
   http://localhost:4200
   ```

## 🧪 Credenciais de Teste

- **Email:** admin@admin.com  
- **Senha:** 123456

## 📅 Prazo

Entrega até **07/04/2025 às 9:00h**.

---

Desenvolvido com 💻 por **Jair Victor**.
