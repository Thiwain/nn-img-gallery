import { readFileSync } from "fs"
import fetchImages from "../lib/fetchImages"
import type { ImagesResults } from "../models/Images"

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-5 text-2xl font-bold">No Images Found</h2>;

  return (
    <section>
      <ul>
        {images.photos.map((photo) => (
          <li key={photo.id}>{photo.src.large}</li>
        ))}
      </ul>
    </section>
  );
}
