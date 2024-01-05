import { readFileSync } from "fs";
import fetchImages from "../lib/fetchImages";
import type { ImagesResults } from "../models/Images";
import ImgContainer from "./imgContainer";
import addBlurredDataUrls from "../lib/getBase64";

type Props = {
  topic?: string | undefined;
};

export default async function Gallery({ topic }: Props) {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-5 text-2xl font-bold">No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
