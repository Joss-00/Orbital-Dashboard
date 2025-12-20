import CardsGrid from "@/components/CardsGrid"
import { snapiCustomFetch } from "@/utils/customFetch"
import type { NewsResponse } from "@/utils/types"
import type { LoaderFunction } from "react-router-dom"
import { useLoaderData } from "react-router-dom"


const newsParams = {
  news_site_exclude: "SpacePolicyOnline.com",
  limit: 20,
  ordering: "-published_at",
}

export const newsPageLoader: LoaderFunction = async (): Promise<NewsResponse | null> => {
  try {
    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: newsParams,
    })
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


const News = () => {
  const {results} = useLoaderData() as NewsResponse;
  console.log(results);
  
  return (
    <section className="section">
      <CardsGrid objects={results} mode="news-page" />
    </section>
  )
}

export default News