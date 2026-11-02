import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const PAGE_TITLE = "Knowledge hub"; // the page heading (your navbar calls it "Knowledge Hub")
const PAGE_INTRO =
  "Guides, maintenance tips and buying advice to help you get the most from your water purification system.";
const PHONE_HREF = "tel:+919999999999";
const PAGE_SIZE = 6; // how many articles show before "Load more"
const ARROW = 'M5 12h14M13 6l6 6-6 6';

const categories = [
  "RO basics",
  "Maintenance tips",
  "Buying guides",
  "Commercial & industrial",
] as const;
type Category = (typeof categories)[number];

type Post = {
  slug: string; // the article link becomes /knowledge-hub/<slug>
  title: string;
  excerpt: string;
  category: Category;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  featured?: boolean; // the ONE big article at the top
  image?: string; // optional cover photo (import it at the top of the file)
};

// SAMPLE ARTICLES: replace the titles and excerpts with your real posts.
const posts: Post[] = [
  {
    slug: "how-often-replace-ro-filters-membranes",
    title: "How often should you replace RO filters and membranes?",
    excerpt:
      "A practical guide to replacement intervals for each stage, and the signs that tell you it is time to service your system.",
    category: "Maintenance tips",
    date: "2026-10-22",
    readMinutes: 6,
    featured: true,
  },
  {
    slug: "ro-uv-uf-which-purifier",
    title: "RO, UV and UF: which water purifier is right for your home?",
    excerpt:
      "A plain-language comparison of the common purification technologies and when each one makes sense.",
    category: "Buying guides",
    date: "2026-10-15",
    readMinutes: 5,
  },
  {
    slug: "what-tds-reading-means",
    title: "What does your TDS reading really mean?",
    excerpt:
      "Learn what TDS measures, what it does not, and how to read the number on your meter.",
    category: "RO basics",
    date: "2026-10-08",
    readMinutes: 4,
  },
  {
    slug: "signs-ro-needs-service",
    title: "5 signs your RO system needs a service visit",
    excerpt:
      "Low flow, odd taste, constant running and other warning signs worth acting on early.",
    category: "Maintenance tips",
    date: "2026-09-30",
    readMinutes: 4,
  },
  {
    slug: "amc-vs-repeated-repairs",
    title: "Why an AMC can cost less than repeated repairs",
    excerpt:
      "How scheduled maintenance keeps your system performing and helps you avoid unexpected breakdowns.",
    category: "Maintenance tips",
    date: "2026-09-21",
    readMinutes: 5,
  },
  {
    slug: "ro-plant-restaurant-hotel",
    title: "Choosing an RO plant for a restaurant or hotel",
    excerpt:
      "What to consider on capacity, water quality and space before you buy a commercial system.",
    category: "Commercial & industrial",
    date: "2026-09-12",
    readMinutes: 7,
  },
  {
    slug: "industrial-ro-capacity-pretreatment",
    title: "Industrial RO: planning capacity and pre-treatment",
    excerpt:
      "The key questions to answer before specifying a plant for process water.",
    category: "Commercial & industrial",
    date: "2026-09-02",
    readMinutes: 8,
  },
  {
    slug: "hard-water-explained",
    title: "Hard water explained: the effect on appliances and what to do",
    excerpt:
      "Why hard water leaves scale behind, how it affects your equipment, and the options for dealing with it.",
    category: "RO basics",
    date: "2026-08-24",
    readMinutes: 5,
  },
  {
    slug: "rent-or-buy-ro-equipment",
    title: "Rent or buy? Deciding on RO equipment for short-term needs",
    excerpt:
      "When renting equipment makes more sense than buying, and what to ask before you decide.",
    category: "Buying guides",
    date: "2026-08-14",
    readMinutes: 4,
  },
];

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = " px-5 md:px-8";

const ICONS = {
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
  arrow: "M5 12h14M13 6l6 6-6 6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  drop: "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z",
};

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const postHref = (p: Post) => `/knowledge-hub/${p.slug}`;

// Cover picture: the photo if you added one, otherwise a blue gradient with a water drop
function Cover({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-(--blue) to-(--primary) ${className}`}
    >
      {post.image ? (
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cyan-300/15 transition-transform duration-700 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d={ICONS.drop} />
        </svg>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-(--primary) backdrop-blur">
        {post.category}
      </span>
    </div>
  );
}

function Meta({ post, light = false }: { post: Post; light?: boolean }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${
        light ? "text-white/70" : "text-slate-500"
      }`}
    >
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="inline-flex items-center gap-1.5">
        <Icon d={ICONS.clock} className="h-4 w-4" />
        {post.readMinutes} min read
      </span>
    </p>
  );
}

/* =========================================================
   3. SECTION: HERO
   ========================================================= */
function Hero() {
  return (
    <section
      aria-labelledby="blog-title"
      className="blog-hero relative isolate overflow-hidden  pb-16 pt-36 text-white sm:pb-24 sm:pt-44"
    >
      

      <div className={wrap}>
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/" className="hover:text-white focus-visible:outline-none focus-visible:underline">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">
              {PAGE_TITLE}
            </li>
          </ol>
        </nav>

        <h1
          id="blog-title"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {PAGE_TITLE}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {PAGE_INTRO}
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   4. SECTION: FEATURED ARTICLE
   ========================================================= */
function Featured({ post }: { post: Post }) {
  return (
    <section aria-label="Featured article" className="bg-white pt-16 sm:pt-20">
      <div className={wrap}>
        <a
          href={postHref(post)}
          className="group grid overflow-hidden rounded-xs border border-slate-200 bg-slate-50 transition duration-300 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 lg:grid-cols-2"
        >
          <Cover post={post} className="aspect-[16/10] lg:aspect-auto lg:min-h-[380px]" />

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700">
              <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
              Featured article
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-3xl lg:text-4xl">
              {post.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {post.excerpt}
            </p>
            <div className="mt-6">
              <Meta post={post} />
            </div>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) group-hover:text-cyan-700">
              Read article
              <Icon
                d={ICONS.arrow}
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   5. SECTION: ARTICLE LIST (filter + search + grid)
   ========================================================= */
function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xs border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10">
      <Cover post={post} className="aspect-[16/10]" />

      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h3 className="mt-3 text-xl font-semibold leading-snug text-(--primary)">
          {/* "after:" makes the whole card clickable */}
          <a
            href={postHref(post)}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:underline"
          >
            {post.title}
          </a>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-(--primary) group-hover:text-cyan-700">
          Read more
          <Icon
            d={ICONS.arrow}
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>
  );
}

function ArticleList({ items }: { items: Post[] }) {
  const [category, setCategory] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Apply the category and the search text
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q))
    );
  }, [items, category, query]);

  const shown = filtered.slice(0, visible);

  const chooseCategory = (c: "All" | Category) => {
    setCategory(c);
    setVisible(PAGE_SIZE); // start from the first page again
  };
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVisible(PAGE_SIZE);
  };

  const chip = (on: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
      on
        ? "border-(--primary) bg-(--primary) text-white"
        : "border-slate-300 bg-white text-slate-700 hover:border-(--primary) hover:text-(--primary)"
    }`;

  return (
    <section aria-labelledby="articles-title" className="bg-white py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="articles-title" className="sr-only">
          All articles
        </h2>

        {/* Toolbar: category chips on the left, search on the right */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => chooseCategory(c)}
                className={chip(category === c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Icon
              d={ICONS.search}
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={onSearch}
              placeholder="Search articles"
              className="w-full rounded-full border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500" role="status" aria-live="polite">
          Showing {shown.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "article" : "articles"}
        </p>

        {/* Grid */}
        {shown.length > 0 ? (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-(--primary)">No articles found</p>
            <p className="mt-2 text-sm text-slate-600">
              Try a different word or choose another category.
            </p>
            <button
              type="button"
              onClick={() => {
                chooseCategory("All");
                setQuery("");
              }}
              className="mt-5 rounded-full border border-(--primary)/25 px-5 py-2.5 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Load more */}
        {visible < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full border border-(--primary) px-8 py-3 text-sm font-semibold text-(--primary) transition-colors hover:bg-(--primary) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              Load more articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   6. SECTION: CALL TO ACTION
   ========================================================= */

function CtaBand () {
  return (
    <section
      aria-labelledby='about-cta-title abt-cta'
      className='bg-white pb-20 sm:pb-28'
    >
      <div className={wrap}>
        <div className='relative isolate overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16'>
         

          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2
                id='about-cta-title'
                className='max-w-xl text-3xl font-semibold leading-tight sm:text-4xl'
              >
                Ready for cleaner, safer water?
              </h2>
              <p className='mt-3 max-w-xl text-base leading-relaxed text-white/75'>
                Tell us what you need and we will recommend the right system.
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              <a
                href='/contact#quote'
                className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Get a quote
                <Icon d={ARROW} className='h-4 w-4' />
              </a>
              <a
                href={PHONE_HREF}
                className='rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   7. THE PAGE
   ========================================================= */
export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);

  return (
    <main>
      <Hero />
      {featured && <Featured post={featured} />}
      <ArticleList items={rest} />
      <CtaBand />
    </main>
  );
}