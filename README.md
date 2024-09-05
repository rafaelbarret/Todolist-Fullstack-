# Projetos-Fullstack
 to do list fullStack

# Task Manager API

Task Manager API é uma aplicação backend para gerenciar tarefas e usuários, construída com Node.js, Express, Sequelize e JWT para autenticação.

## Índice

- Instalação
- Configuração
- Uso
- Rotas
- Contribuição
- Licença

## Instalação

Para instalar e executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager-api.git
   cd task-manager-api

Instale as dependências:
npm install

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=Banco@98457147
JWT_SECRET=your_jwt_secret

Inicie o servidor:
npm start

Configuração
Certifique-se de configurar corretamente as variáveis de ambiente no arquivo .env para conectar ao banco de dados e configurar o JWT.

Uso
Após iniciar o servidor, a API estará disponível em http://localhost:3000. Você pode usar ferramentas como Postman ou Insomnia para testar as rotas da API.

Rotas
Usuários
POST /api/users/register: Registra um novo usuário.
POST /api/users/login: Faz login de um usuário.
Tarefas
GET /api/tasks: Obtém todas as tarefas do usuário autenticado.
POST /api/tasks: Cria uma nova tarefa.
PUT /api/tasks/:id: Atualiza uma tarefa existente.
DELETE /api/tasks/:id: Deleta uma tarefa.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para contribuir:

Fork o repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

<img src="images/todo-list (1).png" alt="">
<img src="images/todo-list (2).png" alt="">
<img src="images/todo-list (3).png" alt="">
<img src="images/todo-list (4).png" alt="">
<img src="images/todo-list (5).png" alt="">
<img src="images/todo-list (6).png" alt="">
<img src="images/todo-list (7).png" alt="">