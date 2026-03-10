"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound(): JSX.Element {
    return (
        <div>
            <Nav />
            <div style={styles.container}>
                <div style={styles.noise} />

                <div style={styles.content}>
                    <div style={styles.badge}> Work in Progress</div>

                    <h1 style={styles.heading}>
                        Coming
                        <span style={styles.accent}> Soon</span>
                    </h1>

                    <p style={styles.subtext}>
                        We're building something great here. Check back soon.
                    </p>

                    <Link href="/" style={styles.button}>
                        ← Back to Home
                    </Link>
                </div>

                <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

            @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            }

            @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
            }

            @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 200, 0, 0.3); }
            50% { box-shadow: 0 0 40px rgba(255, 200, 0, 0.6); }
            }
        `}</style>
            </div>
            <Footer />
        </div>
    );
}

const styles: Record<string, CSSProperties> = {
    container: {
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
    },
    noise: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: "none",
    },
    content: {
        textAlign: "center",
        padding: "2rem",
        animation: "fadeUp 0.8s ease forwards",
        zIndex: 1,
    },
    badge: {
        display: "inline-block",
        backgroundColor: "rgba(255, 200, 0, 0.1)",
        border: "1px solid rgba(255, 200, 0, 0.4)",
        color: "#ffc800",
        padding: "0.4rem 1.1rem",
        borderRadius: "999px",
        fontSize: "0.85rem",
        fontWeight: 500,
        letterSpacing: "0.05em",
        marginBottom: "2rem",
        animation: "pulse-glow 3s ease-in-out infinite",
    },
    heading: {
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(3rem, 10vw, 7rem)",
        fontWeight: 800,
        color: "#0a0a0a",
        lineHeight: 1.05,
        margin: "0 0 1.5rem",
        animation: "float 5s ease-in-out infinite",
    },
    accent: {
        color: "#ffc800",
        display: "block",
    },
    subtext: {
        color: "#0a0a0a",
        fontSize: "1.05rem",
        marginBottom: "2.5rem",
        maxWidth: "360px",
        margin: "0 auto 2.5rem",
        lineHeight: 1.6,
    },
    button: {
        display: "inline-block",
        backgroundColor: "#ffc800",
        color: "#0a0a0a",
        padding: "0.75rem 1.8rem",
        borderRadius: "999px",
        fontWeight: 600,
        fontSize: "0.95rem",
        textDecoration: "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        letterSpacing: "0.02em",
    },
};