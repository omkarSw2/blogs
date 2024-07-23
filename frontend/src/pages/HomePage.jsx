import { Link } from "react-router-dom";
import PrimaryBlogCard from "@/components/customeComponents/PrimaryBlogCard";
import RecentPost from "@/components/customeComponents/RecentPost";

const secondArr = [
  {
    id: 1,
    title: "Unleashing the Power of Tailwind CSS",
    desc: "Discover how Tailwind CSS can streamline your front-end development workflow.",
    date: "May 15, 2023",
  },
  {
    id: 2,
    title: "Exploring the Future of Web Development",
    desc: "Stay ahead of the curve with our insights on the latest web development trends.",
    date: "April 28, 2023",
  },
  {
    id: 3,
    title: "Mastering the Art of Responsive Design",
    desc: "Learn how to create websites that adapt seamlessly to any device.",
    date: "April 15, 2023",
  },
  {
    id: 4,
    title: "Optimizing Your Website for SEO",
    desc: "Discover proven strategies to improve your website&apos;s search engine visibility.",
    date: "March 30, 2023",
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    desc: "Learn how to create inclusive and user-friendly web experiences.",
    date: "March 15, 2023",
  },
];

const primaryArr = [
  {
    id: 1,
    img: "https://placehold.co/500x250",
    title: "Unlocking the Power of React Hooks ",
    desc: "Discover how React Hooks can revolutionize your web development workflow.",
    slug: "IDNO",
  },
  {
    id: 2,
    img: "https://placehold.co/500x250",
    title: "Mastering Responsive Design with CSS",
    desc: "Learn how to create stunning, mobile-friendly websites with the power of CSS.",
    slug: "ISNO",
  },
  {
    id: 3,
    img: "https://placehold.co/500x250",
    title: "Optimizing Web Performance with Serverless",
    desc: " Discover how serverless architecture can boost your website&apos;s speed and reliability.",
    slug: "ISN3",
  },
];

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover the Latest Insights
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Explore our collection of thought-provoking articles and stay
                ahead of the curve.
              </p>
              <Link to='/blogs' className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1">
                Blog&apos;s
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://placehold.co/600x400"
                width={600}
                height={400}
                alt="Blog Hero"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryArr?.map((item, ind) => (
              <PrimaryBlogCard
                key={ind}
                img={item.img}
                title={item.title}
                desc={item.desc}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondArr?.map((item, ind) => (
              <RecentPost
                key={ind}
                title={item.title}
                desc={item.desc}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
