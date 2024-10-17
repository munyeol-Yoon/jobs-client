import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  category: string;
}

export default function Card({ imageUrl, title, category }: CardProps) {
  return (
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
  );
}
