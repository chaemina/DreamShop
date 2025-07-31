import Image from "next/image";
import Link from "next/link";

const GerLink = ({ name, link, image }) => (
  <Link href={link} className="block hover:scale-105 transition">
    <Image src={image} alt={name} width={200} height={200} className="rounded-md mb-2 p-2" />
    <p className="text-center font-semibold text-sm laptop:text-lg">{name}</p>
  </Link>
);

export default GerLink;
