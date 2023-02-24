import Link from "next/link";
import { LikeButton } from "./likeButton";
const fetchPost = () => fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 }})
    .then(res => res.json());

export async function ListOfPost() {
    const post = await fetchPost();
    console.log("HOla!!!!!!!!!!!!!!")
    return (
        <>
            {post.slice(0, 5).map(post =>
                <article key={post.id}>
                    <Link href={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton />
                    </Link>
                </article>
            )}
        </>
    )
}