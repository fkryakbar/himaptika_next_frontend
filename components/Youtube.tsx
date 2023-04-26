import axios from 'axios'
import React, { useState } from 'react'
import Loading from './Loading';



function Youtube() {

    const [isLoading, setIsLoading] = useState(true);
    const [video_id, setVideo_id] = useState('');
    const fetch_data = async () => {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/youtube_link`);
        setVideo_id(data.data.data.video_id);
        setIsLoading(false)
    }
    fetch_data();

    const iframe = (id: string) => {
        return (
            <iframe
                className="w-full mt-4"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        )
    }
    return (
        <>
            {
                isLoading ? <Loading /> : iframe(video_id)
            }
        </>
    )
}

export default Youtube