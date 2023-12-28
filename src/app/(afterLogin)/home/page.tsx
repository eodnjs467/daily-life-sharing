import Tab from "@/app/(afterLogin)/home/_component/tab";
import TabProvider from "@/app/(afterLogin)/home/_component/tab-context";
import PostForm from "@/app/(afterLogin)/home/_component/post-form";
import Post from "@/app/(afterLogin)/home/_component/post";

export default function HomePage() {
  return (
    <main>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
