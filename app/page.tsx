import Example from "./example1";

 
export default function Home() {
  return ( 
    <div className="">
      <main className="flex flex-col items-center justify-center">
        <div className=" border w-full h-screen flex flex-col justify-start items-center bg-zinc-50 max-w-sm shadow-lg rounded-lg">
 
          <h1 className="font-bold text-xl">Hello</h1>
          <p className="text-sm/6 text-black/50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tempore impedit est 
            id tenetur voluptatum a minima eos? Dolorum cupiditate, accusantium excepturi fuga expedita consequatur esse amet error ipsa delectus.
          </p>

          <button className="rounded-md bg-purple-600/50 shadow-lg px-4 py-2 text-white hover:bg-purple-500">
          click me
        </button>
        </div>
        
    

      </main>
    </div>
  );
}
