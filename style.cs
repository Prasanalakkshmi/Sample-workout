body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.container {
    background: white;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}

h1 {
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input {
    padding: 10px;
}

button {
    padding: 10px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background: #0056b3;
}

ul {
    margin-top: 20px;
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    background: #eee;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.delete {
    background: red;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
}
