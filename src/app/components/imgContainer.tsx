import type { Photo } from "../models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div className="rounded-lg relative overflow-hidden">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
        width={250}
        height={300}
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
        className="hover:opacity-75"
      />
    </div>
  );
}
