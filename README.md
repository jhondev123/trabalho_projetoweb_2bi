# Psycheflow

Sistema de gestão para clínicas e psicólogos

---

## Integrantes

| Integrante | Atribuições |
| --- | --- |
| Jhonattan Curtarelli | Código do site e o README. [Link para o site](https://trabalho-projeto-web2bi.vercel.app) |
| Matheus Augusto | Documento de requisitos e o diagrama DER |
| Matheus Mantovani | Evidências, Trello e vídeo demonstrativo. [Link do Trello](https://trello.com/invite/b/6a3968b41afd673464141125/ATTI87a6f79c96584ea6794cb9e19ef0c4951B06A4B7/psycheflow) · [Vídeo demonstrativo](https://www.youtube.com/watch?v=jFXGiEraNCo) |
| Aline Avila Brunetti | Figma com o protótipo das telas. [Link do Figma](https://www.figma.com/design/FdMUPguJZoFUZ19QRBj5P7/Untitled?node-id=0-1&t=l02SW9BjkWQIq6JS-1) |

---

## Descrição do sistema

O Psycheflow é uma aplicação web voltada para psicólogos e clínicas de psicologia. Ele centraliza o dia a dia do profissional: cadastro de pacientes, configuração de horários de trabalho, agendamentos, registro de atendimentos e modelos de documentos (como anamneses e contratos).

O projeto é composto por duas partes:

## Tecnologias utilizadas

- **Frontend** — interface em React + TypeScript, com dados mockados em `localStorage` (sem chamadas à API durante o desenvolvimento).
- **API** — backend em ASP.NET Core 8 com PostgreSQL, responsável pela lógica de negócio e persistência real dos dados.

---

## Instruções para execução

### Pré-requisitos

- Node.js 18+ instalado

### Rodando o frontend

```bash
# Entre na pasta do frontend
cd codigo-fonte/Psycheflow.Frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

> Os dados são salvos no `localStorage` do navegador. Não é necessário rodar a API para usar o frontend.

**Conta de acesso para testes (criada no primeiro acesso):**
- Cadastre uma conta nova na tela de registro — ela fica salva localmente no navegador.

## Funcionalidades implementadas

### Conta e acesso
- Cadastro de conta com nome, e-mail, senha e CRP (psicólogo)
- Login com validação de credenciais
- Logout
- Sessão persistida no `localStorage`

### Pacientes
- Listagem de pacientes com busca por nome ou e-mail
- Cadastro de novo paciente (nome, e-mail, telefone, CPF, data de nascimento, anotações)
- Edição e exclusão de paciente
- Validação de CPF e telefone

### Agenda
- Calendário mensal com navegação entre meses
- Visualização de agendamentos por dia
- Criação de horário: tipo (atendimento ou bloqueio), data, hora de início e fim, status
- Edição e cancelamento de agendamentos
- Destaque visual para o dia atual e dias com eventos
- Lista de compromissos do dia selecionado

### Horários de trabalho
- Configuração dos dias da semana e faixas de horário disponíveis por psicólogo
- Cadastro, edição e remoção de faixas

### Atendimentos (sessões)
- Registro de atendimento vinculado a um paciente e a um horário da agenda
- Campo de feedback e descrição da sessão
- Status: agendada, em andamento, concluída, falta
- Listagem e filtros por status

### Documentos
- Cadastro de modelos de documentos (nome, descrição, campos personalizáveis)
- Campos com valor padrão, obrigatoriedade e ordem definidos pelo profissional

### Perfil
- Visualização e edição dos dados do psicólogo (nome, e-mail, CRP, abordagem)
