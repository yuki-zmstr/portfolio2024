import data from './data/philosophyData.json'

export default function Philosophy() {
    return (
        <div>
            <h4>Some stuff I want to say about life.</h4>
            {data.entries.map((item, i) => (
                <div key={i}>
                    <h4>{item.header}</h4>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    )
}