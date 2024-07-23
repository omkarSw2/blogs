import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link className="flex items-center gap-2" prefetch={false}>
            <FeatherIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Blog Name</span>
          </Link>
          <p className="text-muted-foreground">
            A beautifully crafted blog about the latest trends and insights.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Pages</h4>
            <Link
              to="/about"
              className="text-sm hover:underline"
              prefetch={false}>
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:underline"
              prefetch={false}>
              Contact
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm hover:underline"
              prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Follow Us</h4>
            <div className="flex gap-2">
              <Link
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our{" "}
            <Link className="underline" prefetch={false}>
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-xs text-muted-foreground">
        &copy; 2024 Blog Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

function FeatherIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}
