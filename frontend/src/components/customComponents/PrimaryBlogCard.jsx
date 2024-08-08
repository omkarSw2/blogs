import PropTypes from "prop-types";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function PrimaryBlogCard({
  img = "https://placehold.co/500x250",
  title,
  desc,
  slug,
}) {
  return (
    <Card>
      <img
        src={img}
        width={400}
        height={250}
        alt="Featured Post 1"
        className="rounded-t-lg"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{desc}</p>
        <Link
          to={`blog/${slug}`}
          className="inline-flex items-center font-medium text-primary hover:underline">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

PrimaryBlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default PrimaryBlogCard;
