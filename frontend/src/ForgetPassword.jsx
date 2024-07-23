import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ForgetPassword() {
  return (
    <div className="h-screen  grid place-items-center ">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl"></CardTitle>
          <CardDescription>Enter your Email to Get OTP.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Get Magic Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgetPassword;
