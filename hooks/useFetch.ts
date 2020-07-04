import {useEffect, useState} from "react";

const useFetchList = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    let comics: any = [];

    let id: number;

    useEffect( () => {
        (async () => {
            const promises = [];
            const data = await doFetch(`https://xkcd.com/info.0.json`);
            comics.push(data);
            for (let i = 0; i < 7; i++) {
                id--;
                promises.push(doFetch(`https://xkcd.com/${id}/info.0.json`));
            }
            comics = [...comics, ...await Promise.all(promises)];
            setResponse(comics);
        })();
    }, []);

    const doFetch = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(!id) id = data.num;
            return data;
        } catch (e) {
            setError(e);
        }
    }
    return { response, error, doFetch }
}

export default useFetchList;
