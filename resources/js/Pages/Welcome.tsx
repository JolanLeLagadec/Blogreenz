import { Button } from "@/Components/ui/button"
import MainLayout from "@/Layouts/MainLayout"
import { Link } from "@inertiajs/react"



export default function Welcome() {
  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="flex flex-col text-left">
          <p className="shadow-emerald-200 max-w-xl tracking-wide uppercase font-black text-7xl">
            Welcome to Blogreen,
          </p>
          <p className="max-w-lg mt-5 text-3xl leading-10">
            <span className="bg-emerald-400 p-2 font-normal rounded-br-3xl rounded-tl-3xl ">the place</span> to share your crazy hikes stories. And find some good tips.
          </p>
          <Link href="/home">
          <Button  variant={"ghost"} className="w-1/2 mt-12 text-md p-3 bg-emerald-500 text-white font-normal hover:bg-emerald-400 hover:text-white ">
            read
          </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
