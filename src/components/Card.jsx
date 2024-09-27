import "../styles/card.scss"



export function Card({ src, alt, content, hrefDeploy, hrefCode }) {
    return (
        <>
            <div className="card-works">
                <img src={src} alt={alt} id="imagens-card" />

                <div className="text-card">
                    <p>{content}</p>
                </div>

                <div className="buttons-card">
                    <a href={hrefDeploy} target="_blank">Deploy</a>
                    <a href={hrefCode} target="_blank">Code</a>
                </div>
            </div>
        </>
    )
}