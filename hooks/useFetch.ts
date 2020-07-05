import {useEffect, useState} from "react";
import {Comics} from "../comics";

const useFetchList = () => {
    const [response, setResponse] = useState<Comics[]>([]);
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);
    const [id, setId] = useState<number | null>(null);

    let comics: Comics[] = [];

    useEffect( () => {
        doFetch();
    }, []);

    const fetchOne = async (url: string): Promise<any> => {
        const response = await fetch(url);
        const data: Comics = await response.json();
        return data;
    }

    const doFetch = async (): Promise<any> => {
        let helperId: number;
        const promises: Promise<any>[] = [];
        try{
            if(id===null) {
                const data: Comics = await fetchOne(`https://xkcd.com/info.0.json`);
                helperId = data.num;
                comics.push(data);
            } else {
                helperId = id;
            }

            for (let i = 0; i < 7; i++) {
                helperId--;
                console.log(helperId);
                promises.push(fetchOne(`https://xkcd.com/${helperId}/info.0.json`));
            }

            comics = [...comics, ...await Promise.all(promises)];
            setResponse([...response, ...comics]);
            setId(helperId);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    return { response, error, loading, doFetch } as const;
}

export default useFetchList;
