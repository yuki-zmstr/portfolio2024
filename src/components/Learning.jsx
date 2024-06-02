import data from './data/learningData.json'

export default function Learning() {
    return (
        <div>
            <h4>An archive of great learning material.</h4>
            {data.entries.map((entry, i) => (
                <div key={i}>
                    <h4>{entry.header}</h4>
                    <ul>
                        {entry.content.map((item, j) => (
                            <li key={j}>{item.title}&nbsp;
                                <a href={item.link} target="_blank">link</a>
                            </li>))}
                    </ul>

                </div>
            ))}
        </div>
    )
}