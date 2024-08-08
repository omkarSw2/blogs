import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
function PriceCard({ title, desc, specs, price, priceInfo }) {
  // console.log(specs)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc} </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <h3 className="text-4xl font-bold">${price}</h3>
          <p className="text-muted-foreground">{priceInfo}</p>
        </div>
        <ul className="grid gap-2 text-sm">
          {specs?.map((spec, ind) => (
            <li
              className="flex items-center gap-2 text-muted-foreground"
              key={ind}>
              <Check className="h-4 w-4 fill-primary" />
              {spec}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}

export default PriceCard;
PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  specs: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  priceInfo: PropTypes.string.isRequired,
};
