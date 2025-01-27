document.addEventListener('DOMContentLoaded', function() {
    // Função para buscar usuários
    async function fetchUsers() {
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    }

    // Função para exibir usuários na tabela
    function displayUsers(users) {
        const userTable = document.getElementById('userTable');
        userTable.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="edit-btn" data-id="${user.id}">Editar</button>
                    <button class="delete-btn" data-id="${user.id}">Excluir</button>
                </td>
            `;
            userTable.appendChild(row);
        });

        // Adiciona eventos aos botões de editar e excluir
        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', handleEditUser);
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDeleteUser);
        });
    }

    // Função para lidar com a edição de usuário
    function handleEditUser(event) {
        const userId = event.target.dataset.id;
        // Lógica para editar usuário
        console.log('Editar usuário:', userId);
    }

    // Função para lidar com a exclusão de usuário
    async function handleDeleteUser(event) {
        const userId = event.target.dataset.id;
        try {
            await fetch(`/api/users/${userId}`, { method: 'DELETE' });
            fetchUsers();
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    }

    // Inicializa a busca de usuários ao carregar a página
    fetchUsers();
});