import React, { useEffect, useState } from "react";
import { PostForm } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../../appwrite/config";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <PostForm post={post} />
    </div>
  ) : null;
};

export default EditPost;
