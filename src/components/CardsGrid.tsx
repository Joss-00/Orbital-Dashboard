import type { HubbleImagesResponse, News, NewsResponse, WebbImage } from "@/utils/types";
import type { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";
import HubbleCard from "./HubbleCard";
import { ImageCard } from ".";

const CardsGrid = ({objects, mode}: {objects: NewsResponse | HubbleImagesResponse | WebbImage[] ; mode: string}): ReactNode => {
  console.log(mode);
  console.log("imagery", Array.isArray(objects), objects)

  if (mode === "hubble-page"){
      return (
      <div className="mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(objects as HubbleImagesResponse ).results.map((item, index) => (
          <HubbleCard image={item} key={index}/>
        ))}
      </div>
    );
  } else if (mode === "imagery") {
    return (
      <div className="grid grid-cols-1 gap-2 auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
        {(objects as WebbImage[]).map((item, index) => (
          <ImageCard image={item} key={index} />
        )
        )}
      </div>
    )
  } else if(mode === "news-page"){
    return <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
      {(objects as NewsResponse).results.map((item, index) => (
        <NewsPageCard news={item as News} key={index}/>
      ))}
    </div>
  }
};


export default CardsGrid;

