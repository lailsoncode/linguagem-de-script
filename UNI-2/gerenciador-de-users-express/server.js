const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const readUsersFromFile = () => {
    const usersFilePath = path.join(__dirname, 'users.json');
    const usersFileContent = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(usersFileContent);
};

const writeUsersToFile = (users) => {
    const usersFilePath = path.join(__dirname, 'users.json');
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    const users = readUsersFromFile();

    if (pathname === '/api/users') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const newUser = JSON.parse(body);
                if (newUser.name && newUser.email) {
                    users.push(newUser);
                    writeUsersToFile(users);
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(newUser));
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Name and email are required' }));
                }
            });
        } else if (req.method === 'PUT') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const userId = query.id;
                const updatedUser = JSON.parse(body);
                const userIndex = users.findIndex((user) => user.id === userId);
                if (userIndex !== -1) {
                    users[userIndex] = { ...users[userIndex], ...updatedUser };
                    writeUsersToFile(users);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(users[userIndex]));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'User not found' }));
                }
            });
        } else if (req.method === 'DELETE') {
            const userId = query.id;
            const userIndex = users.findIndex((user) => user.id === userId);
            if (userIndex !== -1) {
                const deletedUser = users.splice(userIndex, 1)[0];
                writeUsersToFile(users);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(deletedUser));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'User not found' }));
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Route not found' }));
        }
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});