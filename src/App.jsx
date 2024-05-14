import Credits from "./components/Credits";
import Features from "./components/Features";
import Form from "./components/Form";
import Image from "./components/Image";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-green text-red",
          duration: 3000,
        }}
      />
      <div className=" bg-white">
        <div className="max-w-[1280px] px-3 md:px-4 lg:px-8 py-8 md:py-16 lg:py-24 mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-4 lg:gap-8">
          <div className="col-span-4 md:col-span-6 lg:col-span-6 flex flex-col justify-center gap-8 md:gap-12">
            <Features />
            <Form toast={toast} />
          </div>
          <Image />
        </div>
        <Credits />
      </div>
    </>
  );
}

export default App;
