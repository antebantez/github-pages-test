import { Link } from "react-router-dom"
import "../App.css"

const highlights = [
    { value: "01", label: "Clear ideas" },
    { value: "02", label: "Careful craft" },
    { value: "03", label: "Real impact" },
]

const Home = () => {
    return (
        <main className="site-shell">
            <nav className="nav-wrap" aria-label="Primary navigation">
                <Link className="brand" to="/" aria-label="Home">
                    <span className="brand-mark">A</span>
                    <span>Anton Olsson</span>
                </Link>
                <Link className="nav-link" to="/contact">
                    Let&apos;s talk <span aria-hidden="true">↗</span>
                </Link>
            </nav>

            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="eyebrow-line" /> Independent digital maker</p>
                    <h1 id="hero-title">Make it <em>matter.</em></h1>
                    <p className="hero-intro">
                        Thoughtful design and dependable technology for ideas that deserve to move forward.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/contact">Start a conversation <span>↗</span></Link>
                        <a className="text-link" href="#approach">Explore the approach <span>↓</span></a>
                    </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                    <div className="orb orb-large" />
                    <div className="orb orb-small" />
                    <div className="art-label">Ideas in<br /><strong>motion</strong></div>
                    <div className="art-ring ring-one" />
                    <div className="art-ring ring-two" />
                </div>
            </section>

            <section className="highlight-row" aria-label="Values">
                {highlights.map((highlight) => (
                    <div className="highlight" key={highlight.value}>
                        <span>{highlight.value}</span>
                        <strong>{highlight.label}</strong>
                    </div>
                ))}
            </section>

            <section className="approach" id="approach">
                <p className="eyebrow"><span className="eyebrow-line" /> The approach</p>
                <div className="approach-content">
                    <h2>Less noise.<br /><span>More signal.</span></h2>
                    <p>I turn ambitious starting points into simple, useful experiences. Every detail has a job: to help people understand, connect, and take the next step.</p>
                </div>
            </section>

            <footer className="footer">
                <span>© {new Date().getFullYear()} Anton Olsson</span>
                <span>Built with intention <span className="footer-heart">✦</span></span>
            </footer>
        </main>
    )
}

export default Home
