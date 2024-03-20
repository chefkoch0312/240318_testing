"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [views, setViews] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const post = {
            title, content, views
        }

        const res = await fetch('http://localhost:4000/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        });

        if (res.status === 201) {
            router.refresh();
            router.push("/posts");
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                <span>Titel:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label><br />
            <label>
                <span>Inhalt:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
            </label><br />
            <label>
                <span>Aufrufe:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setViews(e.target.value)}
                    value={views}
                />
            </label><br />
            <button disabled={isLoading} >
                {isLoading && <span>Speichern...</span>}
                {!isLoading && <span>Hinzufügen</span>}
            </button>
        </form>
    )
}
