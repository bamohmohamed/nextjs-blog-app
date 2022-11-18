import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "markdown");

export function getPostData(fileName) {
  const postSlug = fileName.replace(".md", "");
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    ...data,
    content,
  };
  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles
    .map((postFile) => {
      return getPostData(postFile);
    })
    .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));
  return allPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.isFeatured);
}
