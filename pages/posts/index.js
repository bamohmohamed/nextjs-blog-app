import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import DUMMY_POSTS from "../../dummy/all-posts-data";
import { getAllPosts } from "../../lib/posts-util";

function PostListPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="descritpion"
          content="List of all programming related topics!"
        />
      </Head>
      <AllPosts posts={props.allPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

export default PostListPage;
