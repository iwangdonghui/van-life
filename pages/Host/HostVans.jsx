import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utility";

export async function loader({ request }) {
    await requireAuth(request)
    return getHostVans()
}

export default function HostVans () {
    
    const hostVans = useLoaderData()

    // React.useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setHostVans(data.vans))
    // }, [])

    const hostVansElements = hostVans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostVans.length > 0 ? (
                        <section>
                            {hostVansElements}
                        </section>
                    ): (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
    
}