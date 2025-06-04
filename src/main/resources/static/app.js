const api = 'http://localhost:8080/api';

function login() {
  fetch(`${api}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }).then(res => res.text()).then(alert);
}

function addPost() {
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      title: document.getElementById('title').value,
      content: document.getElementById('content').value
    })
  }).then(res => res.text()).then(alert);
}

function loadPosts() {
  fetch(`${api}/posts`)
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('posts') || document.getElementById('admin-posts');
      container.innerHTML = '';
      posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>
          <button onclick="deletePost(${post.id})">Delete</button>`;
        container.appendChild(div);
      });
    });
}

function deletePost(id) {
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  }).then(res => res.text()).then(alert).then(loadPosts);
}

window.onload = loadPosts;