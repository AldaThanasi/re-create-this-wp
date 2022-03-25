async function getData() {
    let result = await fetch("https://hyggeland.dk/bikes_wp/wp-json/wp/v2/bike?_embed");
    showPosts(await result.json());
  }
  
  function showPosts(posts) {
    console.log(posts);
  }
  
  getData();
  