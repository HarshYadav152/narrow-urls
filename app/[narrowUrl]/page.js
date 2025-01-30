import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const narrowUrl = (await params).narrowUrl
    const client = await clientPromise;
    const db = client.db("narrowlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({narrowUrl:narrowUrl})
    if(doc){
        // console.log("doc.url : ",doc.url)
        redirect(doc.url)
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {narrowUrl}</div>
  }