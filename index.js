function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach((post) => {
    const listItem = document.createElement('li');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');

    heading.textContent = post.title;
    paragraph.textContent = post.body;

    listItem.appendChild(heading);
    listItem.appendChild(paragraph);
    postList.appendChild(listItem);
  });
}

async function fetchPosts() {
  const fallbackPosts = [
    {
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ];

  displayPosts(fallbackPosts);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
