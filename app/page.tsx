import Example from "./example1";

 
export default function Home() {
  return ( 
    <div className="p-8 ">
      <main className="w-full h-screen flex justify-center items-center flex-col gap-4">
        <div className="bg-blue-100 shadow-lg p-8 border border-blue-300 rounded-lg">
            Hello
        </div>
         
        <Example />
      </main>
      
    </div>
  );
}
