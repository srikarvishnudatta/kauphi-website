import Button from "./ui/button";
import Input from "./ui/input";
import Label from "./ui/label";

export default function Reserve() {
  return (
    <section className="bg-primary/80 max-w-6xl mx-auto text-center py-20 space-y-4">
      <h2 className="text-secondary text-3xl">Special Event coming up?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
        <h4>Let us know the details and we will be there</h4>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-start ">
            <Label className="text-secondary">First Name</Label>
            <Input
              className="bg-secondary px-2 py-1 rounded-md w-full"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label className="text-secondary">Last Name</Label>
            <Input
              className="bg-secondary px-2 py-1 rounded-md"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label className="text-secondary">Email</Label>
            <Input
              className="bg-secondary px-2 py-1 rounded-md"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col items-start">
            <Label className="text-secondary">Phone number</Label>
            <Input
              className="bg-secondary px-2 py-1 rounded-md"
              placeholder="John"
            />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </section>
  );
}
