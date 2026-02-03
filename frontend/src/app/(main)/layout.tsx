import { FooterSection } from '@/components/custom/FooterSection';
import { HeaderSection } from '@/components/custom/HeaderSection';
import { getMainRootData } from '@/data/loaders';
import React from 'react'

async function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const data = await getMainRootData();
    console.log(data);
    return (
        <>
            <HeaderSection data={data?.Header} />
            <div>
                {children}
            </div>
            <FooterSection data={data?.Footer} />
        </>
    )
}

export default Layout