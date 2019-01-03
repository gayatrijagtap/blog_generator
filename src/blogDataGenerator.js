const read = require("readline-sync");

const generateBlogData = function() {
  let blog = new Object();
  let themes = "1.travel\n2.cooking\n3.animals\n4.other\n";
  let theme = new Object();
  theme["1"] = "../style_sheets/travelTheme.css";
  theme["2"] = "../style_sheets/cookingTheme.css";
  theme["3"] = "../style_sheets/animalsTheme.css";
  theme["4"] = "../style_sheets/generalTheme.css";
  let userTheme = read.question(themes + "choose the theme you want to apply:");
  blog["styleSheet"] = theme[userTheme];
  blog["author"] = read.question("Enter blogger name:");
  blog["date"] = new Date();
  blog["title"] = read.question("Enter Blog Title:");
  blog["description"] = read.question("Enter Blog description:");
  blog["post"] = new Array();
  let wannaAddPost = "y";
  while (wannaAddPost == "y") {
    blog.post.push(generatePostData());
    wannaAddPost = read.question("Do you want to add more posts:(y/n)");
  }
  return blog;
};

const generatePostData = function() {
  let post = new Object();
  post["title"] = read.question("Enter post title:");
  post["content"] = read.question("Enter post content:");
  return post;
};

let blogData = generateBlogData();
console.log(JSON.stringify(blogData));
