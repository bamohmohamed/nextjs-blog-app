import AllPosts from "../../components/posts/all-posts";
import DUMMY_POSTS from "../../dummy/all-posts-data";
import { getAllPosts } from "../../lib/posts-util";

function PostListPage(props) {
  return <AllPosts posts={props.allPosts} />;
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
