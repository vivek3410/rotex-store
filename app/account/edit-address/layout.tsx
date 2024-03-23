import React from 'react';

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    return (
        <div className='flex flex-col py-4 gap-12'>
            <div className='flex items-center justify-center text-4xl'>Addresses</div>
            {props.children}
        </div>
    );
}

export default Layout;

