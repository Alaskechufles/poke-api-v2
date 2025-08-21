import axios from "axios";
import { useState, useEffect } from "react";



export default function useAxios(url) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [])

    return {
        data, loading
    }
}
