import { Button } from 'flowbite-react';

function App() {
  return (
    <div className="h-[100vh] w-full bg-gray-600 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold  text-red-400 mb-2">
        Hello knot ! <br />
      </h1>
      <div>
        <Button className="text-sm p-0">Click me</Button>
      </div>
    </div>
  );
}

export default App;
