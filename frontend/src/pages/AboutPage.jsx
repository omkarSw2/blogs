import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Welcome to Our Blog
            </h1>
            <p className="text-lg text-primary-foreground">
              Explore a wide range of topics from our team of passionate
              writers. Stay up-to-date with the latest trends and insights.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/600x600/orange/white"
                width={100}
                height={100}
                alt="Author"
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Founder and Editor</p>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">
                John Doe is the founder and editor of this blog. He has a
                background in journalism and has been writing about technology
                and innovation for over a decade. In his free time, he enjoys
                reading, hiking, and spending time with his family.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Mission and Values
              </h2>
              <p className="text-muted-foreground md:text-xl">
                At our blog, we&apos;re committed to providing our readers with
                high-quality, thought-provoking content that helps them navigate
                the complexities of modern life. We believe in the power of
                knowledge, empathy, and personal growth, and we strive to create
                a space where diverse perspectives can be shared and explored.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Our core values include integrity, curiosity, and a dedication
                to making a positive impact on the world. We&apos;re passionate
                about fostering a community of lifelong learners and encouraging
                our readers to embrace their unique journeys.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://placehold.co/600x400/orange/white"
                width="550"
                height="310"
                alt="Mission and Values"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Explore Our Topics</h2>
            <p className="text-muted-foreground">
              Our blog covers a wide range of topics, from technology and
              business to lifestyle and personal development.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="#"
                className="bg-background text-muted-foreground rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                Technology
              </Link>
              <Link
                href="#"
                className="bg-background text-muted-foreground rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                Business
              </Link>
              <Link
                href="#"
                className="bg-background text-muted-foreground rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                Lifestyle
              </Link>
              <Link
                href="#"
                className="bg-background text-muted-foreground rounded-md px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">
                Personal Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
