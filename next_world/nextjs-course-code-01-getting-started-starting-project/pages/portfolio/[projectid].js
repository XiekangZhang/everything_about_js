import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    // using router.query to get an object which can be then used to send a request to backend server
    // in this case the piece of data with an id of router.query.projectid can be fetched
  
    return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
