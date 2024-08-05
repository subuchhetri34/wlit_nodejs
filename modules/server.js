import http from "http";    //built-in module
import fs from "fs";
  
const PORT = 3000;
const filePath = "./post-lists.json";
  
const readPosts = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};
  
const server = http.createServer((req, res) => {
    const url = req.url;
    const posts = readPosts();
  
    if (url == "/") {
      res.end(JSON.stringify(posts));
      return;
    }
    console.log("sup?");
  
    const postId = url.split("/")[1];
    const post = posts.find((post) => post._id === postId);
  
    if (post) {
      res.end(JSON.stringify(post));
    } else {
      res.end("Post not found");
    }
  });
  
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
  