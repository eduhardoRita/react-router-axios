import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {

        const fetch = async () => {
            if (!url) return;

            try {
                const res = await axios.get(url);
                setResponse(res.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetch();
    }, [url]);

    return {response, error, loading}; 
};

export default useAxios;