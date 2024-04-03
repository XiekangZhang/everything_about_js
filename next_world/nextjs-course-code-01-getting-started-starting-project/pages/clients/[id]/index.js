import { useRouter } from "next/router";

export default function ClientDetailPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Client Detail Page</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
}
