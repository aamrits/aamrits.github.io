import yaml from "js-yaml";
import cvRaw from "../data/projects.yml?raw";

const data = yaml.load(cvRaw);

export default function Projects() {
  return (
    <main className="">
      {data.projects.sections.map((section) => (
        <section key={section.title} id={section.title.toLowerCase()}>
          <h2 className="section-title">{section.title}</h2>

          {section.items.map((item, index) => (
            <div key={index} className="project-item">
              {/* Projects */}
              {item.project && (
                <>
                  <div className="project-header">
                    <div className="title"><b>{item.project}</b></div>
                    <div className="desc color-muted">{item.content}</div>
                    <div className="url">
                        <a href={item.url} target="_blank" className="">Open Project</a>
                    </div>
                  </div>
                </>
              )}

              {/* Bullets */}
              {item.tags && (
                <ul className="project-tags">
                  {item.tags.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
