import { BlogDetailSectionType } from "~/types/fragments/Blog"
export default function BlogDetailSection({ description, content, thumbnail }: BlogDetailSectionType) {
  return (
    <>
      <div className="text-white">
        <p className="font-bold text-lg text-white">{description}</p>
        <br />
        <figure><img src={thumbnail} alt={description} className="rounded" /></figure>
        <br />
        {content}
      </div>
    </>
  )
}

