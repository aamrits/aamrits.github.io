import yaml from "js-yaml";
import cvRaw from "../data/cv.yml?raw";

const data = yaml.load(cvRaw);

export default function CV() {
  return (
    <main className="">
      {data.cv.sections.map((section) => (
        <section key={section.title} id={section.title.toLowerCase()}>
          <h2 className="section-title">{section.title}</h2>

          {section.items.map((item, index) => (
            <div key={index} className="cv-item">
              {/* Experience or Education */}
              {item.role && (
                <>
                  <div className="cv-header">
                    <div className="duration">{item.duration}</div>
                    <div className="duration">{item.type}</div>
                    <h3><b>{item.role}</b> at {item.company}</h3>
                  </div>
                </>
              )}

              {/* Education */}
              {!item.role && item.degree && (
                <>
                  <div className="cv-header">
                    <div className="duration">{item.duration}</div>
                    <div>{item.degree}</div>
                    <div>{item.school}</div>
                  </div>
                </>
              )}

              {/* Social Links */}
              {!item.role && item.social && (
                <>
                  <div className="social-links">
                    <p>{item.social}: <a href={item.link} target="_blank">{item.text}</a></p>
                  </div>
                </>
              )}

              {/* Bullets */}
              <ul className="cv-bullets">
                {item.bullets && item.bullets.map((b, i) => {
                  const parts = b.split(" - ");

                  return (
                    <li key={i}>
                      {parts.length > 1 ? (
                        <>
                          <span className="skill-category">{parts[0]}</span>
                          {" - "}
                          {parts.slice(1).join(" - ")}
                        </>
                      ) : (
                        b
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
