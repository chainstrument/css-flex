import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return ( 
    <div className="p-8 ">
        <Button name="Hello" className="bg-green-500 text-white px-4 py-2 rounded-md"/>
        <section className="flex flex-col items-center justify-center">
         <span className="text-lg font-medium">Bonjour</span>
        </section>

    </div>
  );
}
