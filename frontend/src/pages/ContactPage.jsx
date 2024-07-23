import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? We&apos; love to hear
              from you.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-primary" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneCall className="mt-1 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  <Link href="#" prefetch={false}>
                    info@example.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px]"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
