import React from 'react'

async function getData(id) {
    const res = await fetch('http://localhost:4000/posts/' + id);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({ params: { id } }) {
    const tmpData = await getData(id);
    return (
        <>
            <div>
                <h2>Beispiel-Überschrift:</h2>
                <div>Daten aus URL bzw. aufrufenden Link: "{id}"<hr /></div>
                <div>{

                    < div className="">
                        <h3>{tmpData.title}</h3>
                        <p>{tmpData.content}</p>
                    </div>

                }</div>
            </div >
        </>
    )
}
