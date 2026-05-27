import { useParams, Link } from 'react-router'
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { blogPosts } from '../data/blogs'
import type { BlogSection } from '../data/blogs'

function BlogContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => {
        switch (section.type) {
          case 'heading': {
            const level = section.level || 2
            const text = section.text || ''
            if (level === 2) {
              return (
                <h2
                  key={i}
                  className="font-[Montserrat] text-[clamp(24px,3vw,36px)] font-black uppercase tracking-[-0.01em] text-black leading-[1.2] mt-16"
                >
                  {text}
                </h2>
              )
            }
            if (level === 3) {
              return (
                <h3
                  key={i}
                  className="font-[Montserrat] text-[clamp(18px,2vw,24px)] font-black uppercase tracking-[-0.01em] text-black leading-[1.2] mt-12"
                >
                  {text}
                </h3>
              )
            }
            return (
              <h4
                key={i}
                className="font-[Montserrat] text-lg font-black uppercase tracking-[-0.01em] text-black leading-[1.2] mt-8"
              >
                {text}
              </h4>
            )
          }

          case 'paragraph':
            return (
              <p key={i} className="text-lg text-[#222] leading-[1.8]">
                {section.text}
              </p>
            )

          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-black pl-6 py-2 italic text-xl text-[#222] leading-[1.7]"
              >
                {section.text}
              </blockquote>
            )

          case 'list':
            return (
              <ul key={i} className="space-y-3">
                {section.items?.map((item: string, j: number) => (
                  <li key={j} className="flex items-start gap-3 text-[#222]">
                    <ChevronRight className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )

          case 'table':
            return (
              <div key={i} className="overflow-x-auto my-8">
                <table className="w-full min-w-[600px] border border-[#D0D0D0] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-black text-white">
                      {section.headers?.map((h: string, j: number) => (
                        <th
                          key={j}
                          className="text-left px-5 py-4 text-sm font-bold uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows?.map((row: { label: string; values: string[] }, j: number) => (
                      <tr
                        key={j}
                        className={`${j % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'} border-t border-[#D0D0D0]`}
                      >
                        <td className="px-5 py-4 text-sm font-bold text-black">
                          {row.label}
                        </td>
                        {row.values.map((val: string, k: number) => (
                          <td
                            key={k}
                            className="px-5 py-4 text-sm text-[#222] leading-relaxed"
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'code':
            return (
              <pre
                key={i}
                className="bg-[#F5F5F5] border border-[#D0D0D0] rounded-xl p-6 overflow-x-auto"
              >
                <code className="text-sm text-[#222] font-mono leading-relaxed whitespace-pre">
                  {section.code}
                </code>
              </pre>
            )

          case 'faq':
            return (
              <div key={i} className="space-y-0">
                {section.questions?.map((faq: { question: string; answer: string }, j: number) => (
                  <details
                    key={j}
                    className="border-b border-[#D0D0D0] group"
                    open={j === 0}
                  >
                    <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none">
                      <span className="font-[Montserrat] text-base font-bold text-black leading-[1.4]">
                        {faq.question}
                      </span>
                      <span className="text-2xl text-[#666] leading-none group-open:rotate-45 transition-transform flex-shrink-0 mt-0.5">
                        +
                      </span>
                    </summary>
                    <p className="text-base text-[#222] leading-[1.8] pb-5 -mt-1">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            )

          case 'cta':
            return (
              <div
                key={i}
                className="bg-[#F5F5F5] rounded-xl p-10 text-center my-12"
              >
                <p className="text-lg text-[#222] mb-6">{section.text}</p>
                <Link
                  to="/free-3d-design"
                  className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Get a Custom Quote and Free 3D Design
                </Link>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <main className="bg-white min-h-screen pt-[120px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center py-20">
          <h1 className="font-[Montserrat] text-4xl font-black text-black mb-4">
            ARTICLE NOT FOUND
          </h1>
          <Link
            to="/blog"
            className="text-black border-b border-black pb-1 font-semibold"
          >
            Back to blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="pt-[140px] pb-[60px] border-b border-[#D0D0D0]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link to="/blog" className="hover:text-black hover:underline transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span>{post.category}</span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666] mb-4">
            {post.category}
          </p>

          <h1 className="font-[Archivo] text-[clamp(32px,5vw,56px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-black">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mt-8 text-sm text-[#666]">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>by {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <BlogContent sections={post.content} />

          {/* Bottom CTA */}
          <div className="mt-20 pt-10 border-t border-[#D0D0D0]">
            <h3 className="font-[Montserrat] text-2xl font-black uppercase tracking-[-0.01em] text-black mb-4">
              READY TO ELEVATE YOUR BRAND?
            </h3>
            <p className="text-lg text-[#222] mb-8">
              Get a free 3D design rendering of your custom-branded inflatable tent and see the difference before your next event.
            </p>
            <Link
              to="/free-3d-design"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#222] transition-colors duration-200 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Get a Free 3D Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
