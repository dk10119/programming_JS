const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayData(json))
    .catch((error) => console.log(`Error status: ${error.message}`));
};

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) throw new Error(`Error status: ${response.status}`);
//     const data = await response.json();
//     displayData(data);
//   } catch (error) {}
// };

const displayData = (data) => {
  const container = document.querySelector(".blogs_container");
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
    container.appendChild(postElement);
  });
};

fetchData();
