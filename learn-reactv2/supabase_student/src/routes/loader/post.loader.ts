import { LoaderFunctionArgs } from "react-router";
import supabase from "../../utils/supabase";

export const fetchPosts = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("query") ?? "";

  try {
    const { data: posts } = await supabase
      .from("posts")
      .select(
        `
    *,
    profiles (
      id, 
      username,
      avatar_url
    )
  `
      )
      .ilike("title", `%${q}%`); // 예: 제목에 검색어 포함 필터

    return posts;
  } catch (e) {
    console.error(e);
  }
};

export const fetchPostDetail = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { data: posts } = await supabase
      .from("posts")
      .select(
        `
    *,
    profiles (
      id, 
      username,
      avatar_url
    ),
    comments (
      id, 
      comment, 
      profile_id,
      created_at,
      post_id,
      profiles (
        id, 
        username,
        avatar_url
      )
    )
  `
      )
      .eq("id", Number(params.id))
      .single();

    return posts;
  } catch (e) {
    console.error(e);
  }
};
