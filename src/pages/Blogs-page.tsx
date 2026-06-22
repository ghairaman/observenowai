import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GridPattern from "@/assets/white-grid.svg";
import { blogPosts } from "@/components/blogs/blogData";

const Blogs = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="relative overflow-hidden bg-[#470277]/5 pt-8 pb-16 text-center md:pt-20 md:pb-15">
        <div className="pointer-events-none absolute inset-0 flex translate-y-48 items-center justify-center">
          <div
            className="hidden h-[500px] w-[900px] rounded-full blur-[50px] opacity-100 sm:block"
            style={{
              background:
                "radial-gradient(circle at center, rgba(71,2,119,0.35) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 70%)",
            }}
          />
        </div>

        <img
          src={GridPattern}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-3 flex justify-center"
          >
            <span className="section-badge border border-[#470277]">Our Blogs</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 max-w-3xl text-center"
          >
            <h1 className="font-sora text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-center md:text-5xl lg:text-6xl">
              Ideas That Drive <span className="font-sora text-[#72339F]/80">Growth</span>
            </h1>
          </motion.div>

          <p className="mx-auto mb-8 max-w-3xl font-sora text-base text-muted-foreground sm:text-sm md:text-lg">
            Stay ahead with expert insights, industry trends, and actionable strategies. Discover how data,
            technology, and smart outreach can help you build stronger pipelines and close more deals.
          </p>
        </div>
      </section>

      <section className="pt-12 pb-20 md:pt-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

          <div className="space-y-6">
            {paginatedPosts.map((post) => (
              <article
                key={post.slug}
                className="flex w-full flex-col gap-6 rounded-[26px] border border-[#72339F]/10 bg-[#F1EAF7] p-5 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(114,51,159,0.12)] sm:flex-row sm:items-center sm:p-6 lg:gap-10"
              >
                <div className="w-full shrink-0 sm:w-[260px] md:w-[290px] lg:w-[320px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full rounded-[18px] object-cover sm:h-[210px] lg:h-[220px]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-[#B99AD9] px-3 py-1 text-[11px] font-medium text-white">
                    AI Insights
                  </span>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground md:text-3xl md:leading-[1.2]">
                    <Link to={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mb-5 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {post.excerpt}{" "}
                    <Link to={`/blogs/${post.slug}`} className="font-medium text-[#72339F] hover:underline">
                      Read More
                    </Link>
                  </p>

                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span>|</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-[#72339F]">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#9A96A8] transition-colors hover:bg-[#F3ECFA] hover:text-[#72339F] disabled:text-[#9A96A8]"
              >
                <ChevronLeft className="h-4 w-4 stroke-[2.25]" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#5E178D] text-white shadow-[0_8px_18px_rgba(94,23,141,0.18)]"
                        : "text-[#1A1230] hover:bg-[#F3ECFA] hover:text-[#72339F]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#9A96A8] transition-colors hover:bg-[#F3ECFA] hover:text-[#72339F] disabled:text-[#9A96A8]"
              >
                <ChevronRight className="h-4 w-4 stroke-[2.25]" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

