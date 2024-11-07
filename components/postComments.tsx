import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchPostComments } from "../api/comments.api";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export const PostComments: React.FC<{ id: string }> = (props) => {
  const [showComments, setShowComments] = useState(false);

  const comments = useQuery({
    queryKey: ["fetchin-post-comments", props.id],
    queryFn: () => fetchPostComments(Number(Number(props.id))),
    enabled: showComments,
  });

  const handleSeeCommentsClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="space-y-1 pt-5">
      <button
        className="my-2 mx-auto bg-gray-100 px-3 py-3 rounded-2xl w-40 text-md font-gray-800 shadow-lg font-semibold col-span-1 lg:col-span-2 hover:bg-gray-300"
        onClick={handleSeeCommentsClick}
      >
        {showComments ? "Close Comments" : "See Comments"}
      </button>
      {comments.isLoading && (
        <p className="text-center text-gray-500">Loading comments...</p>
      )}
      {showComments &&
        comments.data?.comments?.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-gray-100 rounded-lg shadow-xl flex-col min-w-full space-y-1 px-4 py-3"
            >
              <div className="flex items-center gap-1">
                <IoPersonCircleSharp className="w-11 h-11 fill-gray-400" />
                <p className="text-lg font-semibold text-gray-800">
                  {el.user.username}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="font-medium text-gray-700 px-1">{el.body}</p>
                <div className="inline-flex items-start gap-0.5">
                  <IoHeartOutline className="w-6 h-6" />
                  <p className="text-base min-w-4">{el.likes}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
