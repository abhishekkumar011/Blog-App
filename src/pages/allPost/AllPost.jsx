import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../../components";
import databaseService from "../../appwrite/config";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full pt-8 min-h-screen bg-gray-100">
      <Container>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {posts.length === 0 ? (
            <div className="text-center text-2xl w-full">There is no post</div>
          ) : (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
