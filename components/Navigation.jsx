import Link from "next/link";
import { } from "../app/globals.css";




export default function Navigation() {
  return (
    <header className="grid grid-flow-col grid-cols-2 p-4 bg-gray-800 text-white font-roboto font-medium text-xl" >
      <div className="">sk logo</div>
      <nav>
        <ul className="flex flex-grow gap-16 object-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>             
          </li>
          <li>
            <Link href="/Service">Service</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
