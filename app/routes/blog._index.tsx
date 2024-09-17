import { useState } from "react";
import { BlogSection } from "~/components/fragments/BlogSection";
import { ArticleCard } from "~/components/elements/ArticleCard";
import { useBlogGetAll, useSearchBlog } from "~/hooks/blog";
import { Loading } from "~/components/elements/Loading";
import { DefaultInput } from "~/components/elements/Input";

export default function Blog() {
  const { blogs, loading, error } = useBlogGetAll();
  const { searchQuery, handleSearch, filteredBlogs } = useSearchBlog(blogs)

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
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
        {filteredBlogs.length > 0 ? (
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
        ) : (
          <div className="flex justify-center items-center text-white">
            <h1>Blog is not found!</h1>
          </div>
        )}
      </BlogSection>
    </div>);
}

