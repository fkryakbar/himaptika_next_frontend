import axios from 'axios'
import useSWR from 'swr';

const Loading = () => {
    return <>
        <div className='h-32 w-full rounded-xl bg-gray-200 animate-pulse mt-4'></div>
    </>
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

function Youtube() {

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/youtube_link`, fetcher);

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
                isLoading ? <Loading /> : iframe(data.data.video_id)
            }
        </>
    )
}

export default Youtube