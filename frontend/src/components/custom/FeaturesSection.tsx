import React from "react";

interface TFeature {
    id: number;
    heading: string;
    subHeading: string;
    icon: string;
}

export interface IFeaturesSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature?: TFeature[] | null;
}



function getIcon(name: string) {
    switch (name) {
        case "clock":
            return <ClockIcon className="w-12 h-12 mb-4 text-gray-900" />;
        case "check":
            return <CheckIcon className="w-12 h-12 mb-4 text-gray-900" />;
        case "cloud":
            return <CloudIcon className="w-12 h-12 mb-4 text-gray-900" />;
        default:
            return <span className="text-red-500 text-xs">Icon Not Found: {name}</span>;
    }
}

const styles = {
    container: "flex-1",
    section: "container px-4 py-6 mx-auto md:px-6 lg:py-24",
    grid: "grid gap-8 md:grid-cols-3",
    featureCard: "flex flex-col items-center text-center",
    icon: "w-12 h-12 mb-4 text-gray-900",
    heading: "mb-4 text-2xl font-bold",
    description: "text-gray-500",
};

export function FeaturesSection({ data }: { data: IFeaturesSectionProps }) {
    if (!data?.feature) return null;
    return (
        <div>
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.grid}>
                        {data.feature.map((item: TFeature) => (
                            <div className={styles.featureCard} key={item.id}>
                                {getIcon(item.icon)}
                                <h2 className={styles.heading}>{item.heading}</h2>
                                <p className={styles.description}>{item.subHeading}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    );
}