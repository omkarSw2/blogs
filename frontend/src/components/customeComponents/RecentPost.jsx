import PropTypes from "prop-types";

import { Card, CardContent } from "../ui/card";

import { Calendar } from "lucide-react";

function RecentPost({ title, desc, date }) {
  return (
    <Card className="group hover:bg-primary cursor-pointer ">
      <CardContent className="p-6">
        <h3 className="text-xl group-hover:text-primary-foreground   font-bold mb-2 cursor-text">
          {title}
        </h3>
        <p className="group-hover:text-primary-foreground text-muted-foreground mb-4 cursor-text">
          {desc}
        </p>
        <div className="flex items-center group-hover:text-primary-foreground text-muted-foreground text-sm cursor-text">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentPost;

RecentPost.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
