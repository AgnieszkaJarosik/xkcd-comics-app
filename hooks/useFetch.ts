import {useEffect, useState} from "react";

const useFetchList = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let comics: any = [];

    let id: number;

    useEffect( () => {
        doFetch(1);
    }, []);

    const fetchOne = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(!id) id = data.num;
            return data;
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    const doFetch = async (offset: number) => {
        const promises = [];
        const data = await fetchOne(`https://xkcd.com/info.0.json`);
        comics.push(data);
        for (let i = 0; i < 7; i++) {
            id--;
            promises.push(fetchOne(`https://xkcd.com/${id}/info.0.json`));
        }
        comics = [...comics, ...await Promise.all(promises)];
        setResponse(comics);
    }
    return { response, error, loading, doFetch }
}

export default useFetchList;
