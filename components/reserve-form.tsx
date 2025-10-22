import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import Input from "./ui/input";
import Label from "./ui/label";
import TextArea from "./ui/text-area";

function ReserveForm() {
  return (
    <form className="bg-primary/80 w-[90%] md:max-w-1/2 flex flex-col gap-4 border-1 border-secondary p-6 rounded-md">
      <div className="flex flex-col items-start ">
        <Label className="text-secondary">First Name</Label>
        <Input required name="firstName" placeholder="John" />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-secondary">Last Name</Label>
        <Input required name="lastName" placeholder="Doe" />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-secondary">Email</Label>
        <Input
          type="email"
          name="email"
          required
          placeholder="john@email.com"
        />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-secondary">Phone number</Label>
        <Input
          required
          type="number"
          name="phoneNumber"
          placeholder="123-456-7890"
        />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-secondary">Phone number</Label>
        <Input 
        required
        name="address"
        placeholder="123 baker st"
        />
      </div>
      <div className="flex flex-col items-start">
        <Label className="text-secondary">Further Details</Label>
        <TextArea />
      </div>
      <Button className="bg-primary rounded-2xl
       text-secondary flex justify-center gap-4 items-center px-2 py-3">
        Submit <ArrowRight size={16} />
      </Button>
    </form>
  );
}

export default ReserveForm;
