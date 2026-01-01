import type { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Link } from "react-router-dom"
import { useState } from "react";


const NewsCard = ({news}: {news: News}) => {
    const {image_url, title , news_site, url} = news;
    const [imgError, setImgError] = useState(false)
  return (
    <Card className="relative text-white border-0">
        <Link to={url} target="_blank">
            <CardHeader className="absolute top-1 left-1 p-0 capitalize">{news_site}</CardHeader>
            <CardContent className="h-full w-full p-0">
                {!imgError? (<img src={image_url} alt="card-img" className="h-full w-full object-cover" onError={() => setImgError(true)}/>)
                : (<div className="flex flex-col justify-between h-full">
                        <span className="text-black flex left-1 z-10">{news_site}</span>
                        <span className="text-black uppercase flex justify-center z-10"> no image</span>
                        <span className="text-black flex justify-center align-middle z-10 p-2 font-extrabold text-xl leading-5">{title}</span>
                    </div>
                )}
            </CardContent>
            <CardFooter className="absolute bottom-0 p-2 font-extrabold text-xl leading-5">{title}</CardFooter>
        </Link>
    </Card>
  )
}

export default NewsCard