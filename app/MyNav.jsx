import { React } from 'react'
import Link from 'next/link'

export default function MyNav() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                {/* <li><Link href="/posts/post/3">Post mit ID (3)</Link></li> */}
                <li><Link href="/aboutus">Über uns</Link></li>
            </ul>
        </nav>
    )
}
