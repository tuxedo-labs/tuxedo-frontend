import { useParams } from "@remix-run/react";
import { ArticleHeader } from "~/components/elements/ArticleHeader";
import { Loading } from "~/components/elements/Loading";
import BlogDetailSection from "~/components/fragments/BlogDetailSection";
import ArticleLayout from "~/components/layouts/ArticleLayout";
import { useBlogGetById } from "~/hooks/blog";

export default function BlogId() {
  const { uuid } = useParams<{ uuid: string }>();
  const { loading, error, blog } = useBlogGetById(uuid ?? "");

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  if (!blog) return <p>No blog found</p>;

  return (
    <ArticleLayout>
      <ArticleHeader
        name={blog.author.name}
        time={blog.createdAt}
        title={blog.title}
        avatar={blog.author.avatar}
      />
      <BlogDetailSection
        description={blog.description}
        content={<div dangerouslySetInnerHTML={{ __html: blog.content || "" }} />}
        thumbnail={`http://103.175.220.20:1111/` + blog.thumbnail}
      />
    </ArticleLayout>
  );
}

