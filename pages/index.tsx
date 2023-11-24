import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"
import MyMap from "@/components/layout/Imagecomponent";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <MyMap />

      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  )
}
