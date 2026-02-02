import Link from "next/link";
import type { THeader } from "@/types";

import { Logo } from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";

const styles = {
    header:
        "flex  items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800",
    actions: "flex items-center gap-4",
    summaryContainer: "flex-1 flex justify-center max-w-2xl mx-auto",
};

interface IHeaderProps {
    data?: THeader | null;
}

export async function HeaderSection({ data }: IHeaderProps) {
    if (!data) return null;

    const { logoLink, login } = data;
    
    return (
        <div className={styles.header}>
            <Logo text={logoLink.label} />
            <div className={styles.actions}>
                <Link href={login.url}>
                    <Button>{login.label}</Button>
                </Link>
            </div>
        </div>
    );
}