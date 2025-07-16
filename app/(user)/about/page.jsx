import Link from "next/link";
import styles from "../style.module.css";
import Image from "next/image";

const About = async () => {
  return (
    <>
    <div className="flex flex-col gap-5">
      <h1 className="common-heading font-work">Hello About</h1>
      <Image
        src="/photo-1.jpeg"
        alt="Second About Image"
        width={500}
        height={300}
        className="w-half h-100 object-cover rounded-lg shadow-lg"
      />
      <button className="w-30 p-2 border bg-clip-border rounded-full shadow-inner bg-gradient-to-tr from-blue-400 via-black to-green-300">
        <Link href="/">Home Page</Link>
      </button>
      </div>
    </>
  );
};

export default About;
