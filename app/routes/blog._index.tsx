import { ArticleCard } from "~/components/elements/ArticleCard";
import { useBlogGetAll, useSearchBlog } from "~/hooks/blog";
import { Loading } from "~/components/elements/Loading";
import { DefaultInput } from "~/components/elements/Input";
import { SkeletonArticleCard } from "~/components/elements/Skeleton";
import { BlogSection } from "~/components/fragments/BlogSection";

export default function Blog() {
  const { blogs, loading: blogsLoading, error } = useBlogGetAll();
  const { searchQuery, handleSearch, filteredBlogs, loading: searchLoading } = useSearchBlog(blogs);

  if (blogsLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen">
      <BlogSection
        search={(
          <DefaultInput
            type="text"
            placeholder="Search..."
            label="Search"
            className="w-full"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        )}
      >
        {!searchLoading && filteredBlogs.length === 0 && (
          <div className="text-white">
            <h1 className="text-2xl">No blogs found!</h1>
          </div>
        )}
        {searchLoading && (
          [...Array(4)].map((_, i) => <SkeletonArticleCard key={i} />)
        )}
        {!searchLoading && filteredBlogs.length > 0 && (
          filteredBlogs.map((blog) => (
            <ArticleCard
              key={blog.ID}
              date={new Date(blog.createdAt).toDateString()}
              title={blog.title}
              description={blog.description}
              authorName={blog.author.name}
              authorAvatar={blog.thumbnail}
              readMoreLink={`/blog/${blog.ID}`}
            />
          ))
        )}
      </BlogSection>
    </div>
  );
}

