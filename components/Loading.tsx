import React from 'react'

function Loading() {
    return (
        <div>
            <div className="mt-3 flex flex-col gap-2">
                <div className="h-5 bg-slate-200 rounded-md "></div>
                <div className="h-5 bg-slate-200 rounded-md "></div>
                <div className="h-5 bg-slate-200 rounded-md w-[80%] "></div>
                <div className="h-5 bg-slate-200 rounded-md w-[60%] "></div>
                <div className="h-5 bg-slate-200 rounded-md w-[70%] "></div>
            </div>
        </div>
    )
}

export default Loading