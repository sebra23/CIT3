import { Link } from 'react-router'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useEffect } from 'react'
import { blogPosts } from '../data/blogs'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-[140px] pb-[60px] border-b border-[#D0D0D0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4">
            CIT INSIGHTS
          </p>
          <h1 className="font-[Archivo] text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-black">
            BLOG
          </h1>
          <p className="text-xl text-[#222] max-w-[640px] mt-6 leading-relaxed">
            Expert guides, comparisons, and insights for event marketing professionals who demand more from their brand activations.
          </p>
        </div>
      </section>

      {/* Blog Post Cards */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-[#D0D0D0] rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666] bg-[#F5F5F5] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#666]">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#666]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-[Montserrat] text-2xl font-black uppercase tracking-[-0.01em] text-black leading-[1.2] mb-4 group-hover:underline decoration-2 underline-offset-4">
                    {post.title}
                  </h2>

                  <p className="text-base text-[#222] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 group-hover:gap-3 transition-all"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
