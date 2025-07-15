import Link from "next/link";
import styles from "../style.module.css";
import Image from "next/image";

const About = async () => {
  return (
    <>
      <h1 className="common-heading font-work">Hello About</h1>
      <Image
        src="/photo-1.jpeg"
        alt="Second About Image"
        width={500}
        height={300}
        className="w-half h-100 object-cover rounded-lg shadow-lg"
      />
      <button className={styles.bgColor}>
        <Link href="/">Home Page</Link>
      </button>
    </>
  );
};

export default About;
