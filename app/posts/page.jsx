import React from 'react'
import Link from 'next/link'
import styles from '/app/page.module.css'

async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 2000));

    const res = await fetch('http://localhost:4000/posts/', {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const tmpData = await getData();
    return (
        <>
            <div>
                <h2>Beispiel-Überschrift:</h2>
                <div>{
                    tmpData.map((tmpD) => (
                        <div key={tmpD.id} className={styles.myCard}>
                            <h3>
                                <Link href={`/posts/post/${tmpD.id}`}>{tmpD.title}</Link>
                            </h3>
                            <p>{tmpD.content}</p>
                        </div>
                    ))
                }</div>
            </div >
        </>
    )
}
