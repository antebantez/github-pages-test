import { Link } from "react-router-dom"
import "../App.css"

const Contact = () => {
    return (
        <main className="site-shell contact-page">
            <nav className="nav-wrap" aria-label="Primary navigation">
                <Link className="brand" to="/" aria-label="Home">
                    <span className="brand-mark">A</span>
                    <span>Anton Olsson</span>
                </Link>
                <Link className="nav-link" to="/">Back home <span aria-hidden="true">↗</span></Link>
            </nav>
            <section className="contact-hero">
                <p className="eyebrow"><span className="eyebrow-line" /> Say hello</p>
                <h1>Have a good<br /><em>idea?</em></h1>
                <p>Tell me where you want to go. I&apos;d love to hear what you&apos;re building.</p>
                <a className="button button-primary" href="mailto:hello@antonolsson.dev">hello@antonolsson.dev <span>↗</span></a>
            </section>
            <footer className="footer">
                <span>© {new Date().getFullYear()} Anton Olsson</span>
                <span>Open for interesting work <span className="footer-heart">✦</span></span>
            </footer>
        </main>
    )
}

export default Contact
