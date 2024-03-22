import {getMeal} from "@/app/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from "next/navigation";

export async function generateMetadata({params}) {
    const meal = getMeal(params.slug);
    if (!meal) {
        return notFound();
    }
    return {
        title: meal.title,
        description: meal.summary,
    }
}


export default function MealDetailsPage({params}) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{__html: `${meal.instructions.replace(/\n/g, '<br />')}`}}
                ></p>
            </main>
        </>
    );
}
