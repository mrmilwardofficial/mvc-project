const api = '/api'; // ✅ Works on both localhost and production

function login() {
  fetch(`${api}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  })
    .then(res => res.text())
    .then(msg => {
      if (msg.includes("successful")) {
        window.location.href = "/admin.html";
      } else {
        alert(msg);
      }
    })
    .catch(err => console.error('Login error:', err));
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
  })
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
      loadPosts();
    })
    .catch(err => console.error('Add post error:', err));
}

function loadPosts() {
  fetch(`${api}/posts`)
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('posts') || document.getElementById('admin-posts');
      if (!container) return;

      container.innerHTML = `<p><strong>${posts.length}</strong> post(s)</p>`;
      posts.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('post');
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
  })
    .then(res => res.text())
    .then(alert)
    .then(loadPosts)
    .catch(err => console.error('Delete post error:', err));
}
function logout() {
  fetch(`${api}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  }).then(() => location.href = '/login.html');
}


window.onload = loadPosts;
