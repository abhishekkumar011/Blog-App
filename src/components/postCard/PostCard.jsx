import React from "react";
import { Link } from "react-router-dom";
import databaseService from "../../appwrite/config";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-64 shadow-md h-56 rounded-md p-4 bg-white">
        <div className="w-full h-32 justify-center mb-4 rounded-md overflow-hidden">
          <img
            src={databaseService.getFilePreview(featuredImage)}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
