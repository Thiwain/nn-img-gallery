import type { Photo } from "../models/Images";
import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            // sizes="(min-width: 1280px) 278px,
            // (min_width: 1040px) calc(12.73vw + 118px),
            // (min_width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            width={250}
            height={galleryHeight}
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            className="hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}
