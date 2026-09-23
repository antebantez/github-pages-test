import { Link } from "react-router-dom"
import "../App.css"

const Contact = () => {
    return (
        <main className="site-shell contact-page">
            <nav className="nav-wrap" aria-label="Primary navigation">
                <Link className="brand" to="/" aria-label="Home">
                    <span className="brand-mark">A</span>
                    <span>ante<span className="brand-dot">.</span></span>
                </Link>
                <Link className="nav-link" to="/">Back home <span aria-hidden="true">↗</span></Link>
            </nav>
            <section className="contact-hero">
                <p className="eyebrow"><span className="eyebrow-line" /> Say hello</p>
                <h1>Have a good<br /><em>idea?</em></h1>
                <p>Tell me where you want to go. I&apos;d love to hear what you&apos;re building.</p>
                <a className="button button-primary" href="mailto:hello@antebantez.dev">hello@antebantez.dev <span>↗</span></a>
            </section>
            <footer className="footer">
                <span>© {new Date().getFullYear()} Ante Bantez</span>
                <span>Open for interesting work <span className="footer-heart">✦</span></span>
            </footer>
        </main>
    )
}

export default Contact
