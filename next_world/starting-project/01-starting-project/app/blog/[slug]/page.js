export default function BlogPageDetail({params}) {
    return (
        <main>
            <h1>Blog Page Detail</h1>
            <p>Blog {params.slug}</p>
        </main>
    )
}