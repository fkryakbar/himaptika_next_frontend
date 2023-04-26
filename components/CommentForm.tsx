import React, { useImperativeHandle, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

function CommentForm() {
    const router = useRouter()

    const [isDisabled, setIsDisabled] = useState(false)

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const submit_form = async (e: any) => {
        e.preventDefault();
        setShowError(false)
        setShowSuccess(true)
        setIsDisabled(true);
        const data = {
            name: name,
            email: email,
            comment: comment,
        }
        const post_data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/comments/${router.query.slug}`, data);
        setIsDisabled(false);
        setName('');
        setEmail('');
        setComment('')
        console.log(post_data)
        if (post_data.data.code == 200) {
            setShowSuccess(true)
            setShowError(false)
        } else {
            setShowError(true)
            setShowSuccess(false)
        }

    }

    return (
        <>
            <div className='my-2 p-4 bg-slate-100 rounded'>
                {
                    showSuccess ? (
                        <div className='p-3 bg-green-300 rounded-md text-green-700'>
                            Komentar Berhasil dikirim
                        </div>
                    ) : null
                }
                {
                    showError ? (
                        <div className='p-3 bg-red-300 rounded-md text-red-700'>
                            Komentar Gagal dikirim
                        </div>
                    ) : null
                }
                <form action="" onSubmit={e => { submit_form(e) }} autoComplete='off'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Nama</span>
                        </label>
                        <input onChange={e => { setName(e.target.value) }} value={name} type="text" placeholder="Nama" className="input input-bordered w-full" required disabled={isDisabled} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={e => { setEmail(e.target.value) }} value={email} type="email" placeholder="Email" className="input input-bordered w-full" required disabled={isDisabled} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Komentar</span>
                        </label>
                        <textarea onChange={e => { setComment(e.target.value) }} value={comment} className="textarea textarea-bordered h-24" placeholder="Komentar" required disabled={isDisabled}></textarea>
                    </div>
                    <button className='my-2 btn bg-himaptika hover:bg-red-900 border-0 btn-sm' type='submit' disabled={isDisabled}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CommentForm