import Input from "@/components/ui/input"
import Label from "@/components/ui/label"

export default function Contact(){
    return <section className="min-h-screen py-6 flex flex-col gap-4 justify-center items-center">
         <h2 className="font-bold text-4xl text-center">Fill out the details below</h2>
        <p>We will get back to your as soon as possible 😊</p>
        <ContactForm />
    </section>
}
function ContactForm(){
    return <form className="bg-primary/80 w-[90%] md:max-w-1/2 flex flex-col gap-4 border-1 border-secondary p-6 rounded-md">
        <div className="flex flex-col items-start ">
                <Label className="text-secondary">Email</Label>
                <Input required name="email" placeholder="john@gmail.com" />
        </div>
    </form>
}