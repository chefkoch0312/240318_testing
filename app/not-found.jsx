import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div>
            <h2>Da ging wohl etwas schief...</h2>
            <Link href="/">Zurück zur Startseite</Link>
        </div>
    )
}
