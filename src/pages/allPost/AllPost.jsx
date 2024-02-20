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
    <div className="w-full pt-8 min-h-screen">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
