import ReserveForm from "@/components/reserve-form";

export default function Reserve(){
    return <div className="min-h-screen py-6 flex flex-col gap-4 justify-center items-center">
        <h2 className="font-bold text-4xl text-center">Fill out the details below</h2>
        <p>We will get back to your as soon as possible 😊</p>
        <ReserveForm />
    </div>
}