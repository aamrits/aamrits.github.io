import yaml from "js-yaml";
import aboutRaw from "../data/about.yml?raw";

const data = yaml.load(aboutRaw);

export default function About() {
    const { description, links } = data.about;

    return (
        <main className="">
            {description.split("\n\n").map((para, i) => (
                <p key={i} className="lead">{para}</p>
            ))}

            <div className="links">
                {links.map(({ text, url }) => (
                    <a key={text} href={url} target="_blank">{text}</a>
                ))}
            </div>
        </main>
    );
}
