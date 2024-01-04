import { readFileSync } from "fs";
import fetchImages from "../lib/fetchImages";
import type { ImagesResults } from "../models/Images";
import ImgContainer from "./imgContainer";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-5 text-2xl font-bold">No Images Found</h2>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.photos.map((photo) => (
        <ImgContainer photo={photo} />
      ))}
    </div>
  );
}
