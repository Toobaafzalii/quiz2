"use client";
import React from "react";
import { fetchPostById } from "@/api/posts.api";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersListById } from "@/api/users.api";
import { PostCard, PostCardSkelton } from "@/components/postCard";
import { PostComments } from "@/components/postComments";
import { useRouter, useParams } from "next/navigation";

const PostById: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const post = useQuery({
    queryKey: ["fetching-post-info"],
    queryFn: () => fetchPostById(Number(id)),
  });

  const user = useQuery({
    queryKey: ["fetching-user-by-id", post.data?.userId],
    queryFn: () => fetchUsersListById([post.data?.userId]),
  });

  return (
    <div className="mx-auto py-10 px-10 lg:px-20 min-h-[774px] flex-col flex-1 w-full w-min-[600px]">
      {post.isLoading || user.isLoading ? (
        <PostCardSkelton />
      ) : (
        <PostCard extendBody={true} user={user.data?.[0]} post={post.data} />
      )}
      <PostComments id={String(post.data?.id)} />
    </div>
  );
};

export const fetchByIdLoader = async (data: Ipost) => {
  let post: Ipost | undefined = undefined;
  try {
    post = await fetchPostById(Number(data.id));
  } catch (error) {
    console.log("error", error);
  }
  return { post };
};

export default PostById;
