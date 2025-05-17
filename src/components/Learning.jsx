import data from './data/learningData.json';
import { Link } from 'react-router-dom';

export default function Learning() {
  return (
    <div>
      <h4>An archive of great learning material.</h4>
      {data.entries.map((entry, i) => (
        <div key={i}>
          <h4>{entry.header}</h4>
          <ul>
            {entry.content.map((item, j) => (
              <li key={j}>
                <i>{item.title}</i>&nbsp;
                {item.link.endsWith(".md") ? (
                  <Link to={`/markdown${item.link}`}>link</Link>
                ) : (
                  <a href={item.link} target="_blank" rel="noreferrer">link</a>
                )}
                {item.subcontent && (
                  <ul>
                    <li>{item.subcontent}</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
