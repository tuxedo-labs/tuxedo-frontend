import React from "react"

interface ArticleLayoutType {
  children: React.ReactNode;
}
export default function ArticleLayout({ children }: ArticleLayoutType) {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {children}
        </article>
      </div>
    </main>
  )
}

