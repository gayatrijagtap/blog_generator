const fs = require("fs");

let blog = fs.readFileSync("./src/blog.json", "utf8");
let blogContent = JSON.parse(blog);

const withTag = function(tag, content, cls = "") {
  let tagWithContent = [
    "<",
    tag,
    " class = ",
    cls,
    ">",
    content,
    "</",
    tag,
    ">"
  ].join("");
  return tagWithContent;
};

const generateBlog = function(blogContent) {
  let author = withTag("h2", blogContent.author, "left_align");
  let date = withTag("h3", blogContent.date, "left_align");
  let blogTitle = withTag("h1", blogContent.title);
  let blogDescription = withTag("p", blogContent.description);
  let blogData = author + date + blogTitle + blogDescription;
  return blogData;
};

const addPost = function(postData) {
  let posts = postData.map(generatePost);
  return posts.join("");
};

const generatePost = function(postData) {
  let title = withTag("h2", postData.title);
  let content = withTag("p", postData.content);
  return title + content;
};

const createHTMLBlog = function(blog, posts, head) {
  let bodyContent = blog + posts;
  let body = withTag("body", bodyContent);
  let htmlBody = withTag("html", head + body);
  return htmlBody;
};

const addStyleSheet = function(styleSheet) {
  let style =
    "<link rel='stylesheet' type='text/css' href='" + styleSheet + "'>";
  let head = withTag("head", style);
  return head;
};

let blogData = generateBlog(blogContent);
let postData = addPost(blogContent.post);
let styleSheet = addStyleSheet(blogContent.styleSheet);
console.log(createHTMLBlog(blogData, postData, styleSheet));
