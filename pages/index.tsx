import Feed from "@/components/Feed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <Feed posts={[1, 2, 3]} />
    </>
  )
}
