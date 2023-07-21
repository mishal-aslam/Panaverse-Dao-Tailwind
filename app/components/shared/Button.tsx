'use client';
import { useRouter } from 'next/navigation';

export default function Button() {
    const router = useRouter();
    return (
        <div className='max-w-screen py-4 px-20'>
            <button className=" border-2 border-teal-500 hover:bg-teal-600 rounded-lg py-1 px-3 font-medium duration-200" type="button" onClick={() => router.push('/component/courses')}>
                Read More
            </button>
        </div>
    )
}



