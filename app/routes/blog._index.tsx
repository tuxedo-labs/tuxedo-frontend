import { BlogSection } from "~/components/fragments/BlogSection";
import { ArticleCard } from "~/components/elements/ArticleCard";
import { useBlogGetAll } from "~/hooks/blog";

export default function Blog() {
  const { blogs, loading, error } = useBlogGetAll()

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <BlogSection>
        {blogs.map((blog) => (
          <ArticleCard
            key={blog.ID}
            date={new Date(blog.createdAt).toDateString()}
            title={blog.title}
            description={blog.description}
            authorName={blog.author.name}
            authorAvatar={blog.thumbnail}
            readMoreLink={`/blog/` + blog.ID}
          />
        ))}
      </BlogSection>
    </div>
  );
}

