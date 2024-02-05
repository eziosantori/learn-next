
export default function BlogPostDetail (params: {
    slug: string;
}) {
    console.log(params);
    return <main>
        <h1>Hello details view {params?.slug}</h1>
    </main>
}