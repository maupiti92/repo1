// Simulated API requests with Promises

function getUserInfo(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = { name: 'John', email: 'john@example.com' };
      resolve(userInfo);
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = ['Post 1', 'Post 2', 'Post 3'];
      resolve(posts);
    }, 1500);
  });
}

function getInfo(userId) {
  return Promise.all([getUserInfo(userId), getUserPosts(userId)]);
}

// Using promises to simplify the code

document.getElementById('loadBtn').addEventListener('click', () => {

  getInfo(1)
    .then(([userInfo, userPosts]) => {
      console.log('User Info: ', userInfo);
      console.log('User Posts: ', userPosts);
      // Display user info and posts on the web page
      document.getElementById('resultInfo').innerHTML = `Nom : ${userInfo.name} <br> Email : ${userInfo.email}`;
      document.getElementById("resultPosts").textContent = userPosts.join(', ');
    })
    .catch((error) => {
      console.error('An error occurred: ', error);
    });

});