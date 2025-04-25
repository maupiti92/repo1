// Simulated API requests with callbacks

function getUserInfo(userId, callback) {
    setTimeout(() => {
        const userInfo = { name: 'John', email: 'john@example.com' };
        callback(userInfo);
    }, 2000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        callback(posts);
    }, 2500);
}

// Callback scenario

document.getElementById('loadBtn').addEventListener('click', () => {

    getUserInfo(1, (userInfo) => {
    
        //alert('user info récupérées !');
        console.log('User Info: ', userInfo);
    
        getUserPosts(1, (userPosts) => {
            // alert('user posts récupérés !');
            console.log('User Posts: ', userPosts);
            // Display user info and posts on the web page
            document.getElementById('resultInfo').innerHTML = `Nom : ${userInfo.name} <br> Email : ${userInfo.email}`;
            document.getElementById("resultPosts").textContent = userPosts;
            // This is where you would typically update the user informations
        });

    });

});