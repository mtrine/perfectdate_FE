'use client';
import Image from 'next/image';
import BrokenHeart from '../../../assets/images/broken_heart.png';
import Button from '@/components/Button';
export default function ErrorPage () {
    return (
        <div className="flex items-center justify-center h-screen flex flex-col gap-4">
            <Image src={BrokenHeart} alt="Broken Heart" width={200} height={200} />
            <h2 className="text-darkRed font-playfair-bold text-center ">Oops! Có gì đó không ổn...</h2>
            <p className='text-gray'>Hãy thử tải lại trang hoặc kiểm tra kết nối của bạn.</p>
            <Button
                onClick={() => window.location.reload()}
                typeButton='secondary'
                text='Thử lại'
                type='button'
                
            />

        </div>
    )
}