import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch"
import { numberToApodDate } from "@/utils/function";
import type { Apodtype } from "@/utils/types";
import { useEffect, useState } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const apodPageLoader: LoaderFunction = async (): Promise<Apodtype | null> => {
  try {
    const date = numberToApodDate(0);

    const response = await nasaCustomFetch.get<Apodtype>(
      `/apod-basic/${date}`
    );

    return response.data;
  } catch (error) {
    console.error("Unable to load APOD:", error);
    return null;
  }
};

const Apod = () => {
  const defaultApod = useLoaderData() as Apodtype
  const [data, setData] = useState<Apodtype>(defaultApod);
  const [day, setDay] = useState<number>(0)
  const [isLoading, SetIsLoading] =  useState<boolean>(false)
  console.log(defaultApod);

  const fetchApod = async (day: number): Promise<void> => {
  SetIsLoading(true);

  try {
    const date = numberToApodDate(day);

    const response = await nasaCustomFetch.get<Apodtype>(
      `/apod-basic/${date}`
    );

    setData(response.data);
  } catch (error) {
    console.error("Unable to fetch APOD:", error);
  } finally {
    SetIsLoading(false);
  }
};

  useEffect(() => {
    fetchApod(day)
  }, [day])
  
  return (
    <section className="section">
      <Title text="NASA's astronomy picture of the day" /> 
      <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading}  />
    </section>
  )
}

export default Apod