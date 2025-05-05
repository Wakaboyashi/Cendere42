export  const doLogin = async (nickname: string, password: string) => {
    console.log(nickname, password)
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, password }),
    });
    console.log(response)
    const data = await response.json();
    return data;
};