import type { HubbleImagesResponse, NewsResponseWithParams } from "@/utils/types"
import type { ReactNode } from "react"

const Overview = ({objects}: {objects: NewsResponseWithParams | HubbleImagesResponse }): ReactNode => {
    let number: number
    // type guard:
    if("total_count" in objects){
      number = objects.total_count
    } else {
      number = objects.response.count;
    }
  return (
    <div className="my-6 text-xl">{number} matchs</div>
  )
}

export default Overview