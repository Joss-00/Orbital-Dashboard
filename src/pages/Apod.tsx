import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch"
import { numberToDate } from "@/utils/function";
import type { Apodtype } from "@/utils/types";
import { useEffect, useState } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const apodPageLoader: LoaderFunction = async(): Promise <Apodtype | null> => {
  try {
    const response = await nasaCustomFetch.get<Apodtype>("");
    return response.data
  } catch (error) {
    console.log(error);
    return null
  }
}

const Apod = () => {
  const defaultApod = useLoaderData() as Apodtype
  const [data, setData] = useState<Apodtype>(defaultApod);
  const [day, setDay] = useState<number>(0)
  const [isLoading, SetIsLoading] =  useState<boolean>(false)
  console.log(defaultApod);

  const fetchApod = async(day:number):Promise<void | null> => {
    SetIsLoading(true)
    try {
      const params = {date: numberToDate(day)};
      const response = await nasaCustomFetch.get<Apodtype>("", {params})
      setData(response.data)
      SetIsLoading(false)
    } catch (error) {
      console.log(error);
      SetIsLoading(false)
      return null
    }
  }

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