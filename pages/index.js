import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "nextjs-in-action",
    title: "NextJs in Action",
    image: "nextjs-in-action.png",
    excerpt:
      "Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems.",
    date: "2022-11-17",
  },
  {
    slug: "react-in-action",
    title: "React in Action",
    image: "nextjs-in-action.png",
    excerpt:
      "Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems.",
    date: "2022-11-17",
  },
  {
    slug: "aws-in-action",
    title: "AWS in Action",
    image: "nextjs-in-action.png",
    excerpt:
      "Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems.",
    date: "2022-11-17",
  },
  {
    slug: "azure-in-action",
    title: "Azure in Action",
    image: "nextjs-in-action.png",
    excerpt:
      "Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems.",
    date: "2022-11-17",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
