import {createServer} from 'miragejs';

export function makeServer() {
    const server = createServer({
        routes() {
        this.namespace = 'api';
    
        this.post('/signup', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            return { success: true, message: 'User registered successfully' };
        });
        this.post('/login', (schema, request) => {
            const { nickname, password } = JSON.parse(request.requestBody);
            console.log(nickname, password)
            if (nickname === 'test' && password === '123') {
                return { success: true, status: 200, message: 'Login successful' };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        });
        this.get('/home', (schema, request) => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (!isLoggedIn) {
                return new Response(401, {}, { error: "Giriş yapmadınız." });
              }
              return {
              user: {
                name: "test",
                    avatar: "test.png",
                score: 2400
              },
              leaderboard: [
                { id: 1, name: "Ali", score: 3000 },
                { id: 2, name: "Ayşe", score: 2700 },
                { id: 3, name: "test", score: 2400 },
                { id: 4, name: "Mehmet", score: 2200 }
              ]
            };
        });
        return this;
        }
    });
    return server;
}