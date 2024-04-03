import { useRouter } from "next/router";
export default function BlogsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blogs Page</h1>
    </div>
  );
}
