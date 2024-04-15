import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import heroimage from "@/../public/heroimage.png";
import Image from "next/image";
import html from "@/../public/icons/html-icon.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="max-w-7xl m-auto ">
      {/* hero section Start */}
      <section className="flex justify-around flex-col-reverse lg:flex-row ">
        <div className=" space-y-4 m-auto p-4">
          <h1 className="text-2xl text-pretty font-sans font-semibold">
            Hi, I&apos; Omkar <br /> FullStack Dev
          </h1>
          <p className="text-base text-gray-500 font-sans font-medium border-l-4 border-gray-900 pl-2">
            On this Blog I sahare the Tips and Trticks, Fromeworks, Projects,
            Tutorials etc. <br />
            Make Sure To subscribe to get the latest Updates{" "}
          </p>
          <div className="flex space-x-2 max-w-md">
            <Input placeholder="Enter Your Email here." />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className="m-auto">
          <Image
            src={heroimage}
            alt="Hero Image"
            className="max-w-full lg:max-w-md"
          />
        </div>
      </section>
      {/* hero section END */}
      {/* category cards Start */}
      <Card className="flex flex-col  max-w-36  bg-gray-300  pl-4 hover:bg-[#6246EA] hover:text-white ">
        <CardHeader>
          <Button variant="outline" size="icon">
            <Image src={html} alt="html" className="w-6" />
          </Button>{" "}
        </CardHeader>
        <CardContent className="font-semibold">
          <p>HTML </p>
        </CardContent>
      </Card>

      {/* category cards  End*/}

      {/* Cared Component Start */}
      <Card className="max-w-72 m-auto ">
        <CardHeader className="max-w-72">
          <Image src={heroimage} alt="Card Image" />
        </CardHeader>
        <CardDescription className="text-md text-center text-pretty ">
          <h2>
            Title Of the Blog Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </h2>
        </CardDescription>
        <CardFooter className="flex flex-row mt-4  font-semibold text-gray-500  text-pretty space-x-2">
          <Avatar>
            {" "}
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-balance">Omkar</p>
            <div className="flex flex-row justify-between space-x-4 text-xs">
              <p>Jan 10, 2024</p>

              <ul className="list-disc list-inside">
                <li>3 min read</li>
              </ul>
            </div>
          </div>
        </CardFooter>
      </Card>
      {/* Cared Component End */}

      {/* Subcription section  Start */}
      <div className="m-auto max-w-3xl ">
        <Card className=" flex items-center flex-col space-y-2">
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="text-center">
            <p>HEading</p>

            <CardDescription className="text-pretty text-justify hyphens-manual max-w-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              placeat laudantium enim in ex obcaecati sit qui fugit, beatae
              perferendis
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex space-x-2 max-w-md">
              <Input placeholder="Enter Your Email here." />
              <Button>Subscribe</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* Subcription section  end */}
    </div>
  );
};

export default page;
