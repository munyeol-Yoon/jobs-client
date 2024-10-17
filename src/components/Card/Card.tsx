import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  category: string;
  link: string;
}

export default function Card({ imageUrl, title, category, link }: CardProps) {
  return (
    <Link href={link}>
      <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
        <div className="relative w-full h-32">
          <Image
            src={imageUrl}
            alt={title}
            layout={"fill"}
            objectFit={"cover"}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-500">{category}</p>
        </div>
      </div>
    </Link>
  );
}
