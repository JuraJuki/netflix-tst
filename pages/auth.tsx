import Input from "@/components/Input";
import Image from "next/image";

const Auth = () => {
  return (
    <div
      className={
        "relative h-full w-full bg-[url('/images/hero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover"
      }
    >
      <div className={"bg-black w-full h-full lg:bg-opacity-50"}>
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={178}
            height={48}
            className={"h-12"}
          />
        </nav>
        <div className={"flex justify-center"}>
          <div
            className={
              "bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
            }
          >
            <h2 className={"text-white text-4xl mb-8 font-semibold"}>
              Sign in
            </h2>
            <div className={"flex flex-col gap-4"}>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
