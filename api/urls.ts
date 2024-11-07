export const urls = {
  posts: {
    list: "/posts",
    byId: (id: number | string) => `/post/${id}`,
  },
  users: {
    list: "/users",
    byId: (id: number | string) => `/users/${id}`,
  },
  comments: {
    byPostId: (postId: number) => `/comments/post/${postId}`,
  },
};
