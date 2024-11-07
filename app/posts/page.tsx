"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPostList } from "../../api/posts.api";
import { listLimit } from "../../utils/config";
import { PostCard, PostCardSkelton } from "../../components/postCard";
import { fetchUsersList, fetchUsersListById } from "../../api/users.api";
import { useRouter } from "next/navigation";

const PostPage: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IDataState>({
    post: [],
    user: [],
  });
  const router = useRouter();

  const { mutate: fetchPosts, isPending: postLoading } = useMutation<
    fetchPostResponse,
    null,
    {
      page: number;
      listLimit: number;
    }
  >({
    mutationKey: ["fetching-posts"],
    mutationFn: ({ listLimit, page }) =>
      fetchPostList({ skip: page * listLimit, limit: listLimit }),
  });

  const users = useMutation<
    Iuser[],
    null,
    {
      posts: Ipost[];
    }
  >({
    mutationKey: ["fetching-users-by-id"],
    mutationFn: ({ posts }) =>
      fetchUsersListById(posts.map((el) => Number(el.userId))),
  });

  const isLastPage = useCallback(() => {
    const totalPosts = data.post.length;
    return totalPosts > (page + 1) * listLimit;
  }, [data.post.length, page, listLimit]);

  useEffect(() => {
    fetchPosts(
      {
        page,
        listLimit,
      },
      {
        onSuccess: (postData) => {
          users.mutate(
            { posts: postData.posts },
            {
              onSuccess: (userData) => {
                setData((prevState) => {
                  return {
                    post: [...prevState.post, ...postData.posts],
                    user: [...prevState.user, ...userData],
                  };
                });
              },
            }
          );
        },
      }
    );
  }, [page]);

  // useEffect(() => {
  //   if (!post.error || !post.isError) return;
  //   throw new Error("OOPSS");
  // }, [post.error, post.isError]);

  return (
    <div className="min-h-screen bg-indigo-100 px-10 flex flex-1 mt-5">
      <div className="mx-auto my-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.post.map((item, index) => {
          const user = data?.user?.find((user) => user.id == item.userId);
          return (
            <div onClick={() => router.push(`/post/${item.id}`)}>
              <PostCard user={user as Iuser} post={item} key={index} />
            </div>
          );
        })}
        {Boolean(postLoading || users.isPending) &&
          Array.from({ length: 8 }).map((item, index) => {
            return <PostCardSkelton key={index} />;
          })}
        <button
          disabled={isLastPage() || postLoading || users.isPending}
          className="my-2 mx-auto bg-gray-100 px-3 py-3 rounded-2xl w-40 text-md font-gray-800 shadow-lg font-semibold col-span-1 lg:col-span-2 hover:bg-gray-300"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default PostPage;
