import { generateClient } from "./client";
import { urls } from "./urls";

export const fetchPostComments = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IfetchCommentResponse>(
    urls.comments.byPostId(id)
  );
  return response.data;
};
