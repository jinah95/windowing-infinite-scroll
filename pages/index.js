import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>infinite-scroll</title>
                <meta name="description" content="practice windowing" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.h1}>{`Practice windowing`}</h1>
                <p className={styles.description}>{`'Infinite-Scroll'`} </p>
                <Link href="/infiniteScrollComponent">
                    <code className={styles.code}>
                        react-infinite-scroll-component
                    </code>
                </Link>
                <Link href="/window">
                    <code className={styles.code}>react-window</code>
                </Link>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/jinah95"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {`Jinah's GitHub`}{" "}
                    <span
                        className={styles.logo}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Image
                            src="/jinah.png"
                            alt="Jinah's GitHub"
                            width={40}
                            height={40}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
