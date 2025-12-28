import { CardsGrid, Overview, Title } from "@/components";
import { datastroCustomFetch } from "@/utils/customFetch";
import type { HubbleImagesResponse } from "@/utils/types";
import { data, useLoaderData, type LoaderFunction } from "react-router-dom";

const hubbleParams = {
  order_by: "photo_date_taken desc",
  limit: 24,
}

export const hubblePageLoader: LoaderFunction = async():Promise<HubbleImagesResponse | null> => {
  try {
    const formattedParams = {
      ...hubbleParams,
    };
    const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams});
    return response.data
  } catch (error) {
    console.log(error);
    return null
    
  }
}
const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponse;
  console.log(data);
  
  return (
    <section className="section">
      <Title text="Hubble telescope photos" />
      <Overview objects={data} />
      <CardsGrid objects={data} mode="hubble-page" />

    </section>
  )
}

export default Hubble