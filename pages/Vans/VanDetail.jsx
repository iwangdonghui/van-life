import React from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader( { params } ) {
    return getVans(params.id)
}

export default function VanDetail(){
    // const params = useParams()
    // const [van, setVan] = React.useState(null)
    const location = useLocation()  // the value of (location.state.search) is an object {search: "?type=xxxx"} which has been set in the Vans.jsx file
    const van = useLoaderData()

    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    const search = location.state?.search || "" // location.state might be null
    const type = location.state?.type || "all" // a simple js way can also solve the problem: search.split('=')[1]

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span>
            </Link>

            
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
            
        </div>
        
    )
}