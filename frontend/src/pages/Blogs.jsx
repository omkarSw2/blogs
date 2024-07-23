import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SecondaryBlogCard from "@/components/customeComponents/SecondaryBlogCard";

const blogArray = [
  {
    id: 1,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Mastering React: A Comprehensive Guide",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: false,
    desc: "  Dive into the world of React and learn how to build powerful web applications.",
  },
  {
    id: 2,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Unleashing the Power of Tailwind CSS",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: true,
    desc: "Discover how Tailwind CSS can revolutionize your web development workflow.",
  },
  {
    id: 3,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Exploring the Shadcn UI Library",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: false,
    desc: "Learn how to leverage the Shadcn UI library to build stunning user interfaces.",
  },
  {
    id: 4,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Optimizing Your Next.js Applications",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: true,
    desc: "Discover best practices for building high-performance Next.js applications.",
  },
  {
    id: 5,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Mastering TypeScript for React Development",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: false,
    desc: "Enhance your React projects with the power of TypeScript.",
  },
  {
    id: 6,
    img: "https://placehold.co/500x250",
    icon: "https://placehold.co/250x250",
    title: "Building Accessible Web Applications",
    author: "John Doe",
    date: "May 15, 2023",
    statusType: true,
    desc: "Ensure your web applications are inclusive and accessible to all users.",
  },
];
function Blogs() {
  return (
    <div className="w-full">
      <header className="bg-primary py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Latest Blogs
          </h1>
          <p className="mt-4 text-lg text-primary-foreground md:text-xl">
            Explore our collection of insightful articles and stay up-to-date
            with the latest industry trends.
          </p>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogArray?.map((item) => (
            <SecondaryBlogCard
              key={item}
              img={item.img}
              icon={item.icon}
              title={item.title}
              author={item.author}
              date={item.date}
              desc={item.desc}
              statusType={item.statusType}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
