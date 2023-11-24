import { useRouter } from "next/router";
import { BsFillMegaphoneFill } from "react-icons/bs";


const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-teal-400
        hover:bg-opacity-10
        cursor-pointer
    ">
      <BsFillMegaphoneFill size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
