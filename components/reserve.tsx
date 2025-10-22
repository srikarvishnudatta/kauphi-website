
import ReserveForm from "./reserve-form";

export default function Reserve() {
  return (
    <section className=" max-w-6xl mx-auto text-center py-20 space-y-4">
      <h2 className="text-primary text-3xl px-5">Special Event coming up?</h2>
      <div className="flex flex-col justify-center gap-10 items-center">
        <h4 className="px-5">Let us know the details and we will be there</h4>
        <ReserveForm />
      </div>
    </section>
  );
}
