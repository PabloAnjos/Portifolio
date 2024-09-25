import "../styles/card.scss"



export function Card({ src, alt, content, hrefDeploy, hrefCode }) {
    return (
        <>
            <div className="card-works">
                <img src={src} alt={alt} />

                <p>{content}</p>

                <div className="buttons-card">
                    <a href={hrefDeploy} target="_blank">Deploy</a>
                    <a href={hrefCode} target="_blank">Code</a>
                </div>
            </div>
        </>
    )
}