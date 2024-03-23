import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsExclamationTriangle } from 'react-icons/bs';

interface Props {

}

function Page(props: Props) {

    const orders = []
    return (
        <div className='flex flex-col py-4 gap-12'>
            <div className='flex items-center justify-center text-4xl'>Orders</div>
            <div className='flex flex-col px-4 md:px-12 justify-start gap-2'>
                {orders.length === 0 ? (
                    <>
                        <div className='border-teal-600 border-[2px] bg-teal-100 flex items-center justify-between px-4 py-2'>
                            <div className='flex items-center gap-2'>
                                <div><BsExclamationTriangle className='font-bold' /></div>
                                <div className='text-xs md:text-sm'>No order has been made yet.</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Link href={"/"} className='border-b-[1px] border-slate-500 text-xs md:text-sm text-slate-500'>Browse Products</Link>
                                <div><BsArrowRight className='text-slate-500' /></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Page;

