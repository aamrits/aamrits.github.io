import { NavLink } from "react-router";
import yaml from "js-yaml";
import aboutRaw from "../data/about.yml?raw";

const data = yaml.load(aboutRaw);

export default function Header() {
    const { name, title } = data.about;

    return (
        <main className="">
            <div className="header">
                <div className="header-title">
                    <h1>{name}</h1>
                    <p>{title}</p>
                </div>
                <div className="header-links">
                    <nav className="header-links">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            about
                        </NavLink>

                        <NavLink
                            to="/cv"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            cv
                        </NavLink>

                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            projects
                        </NavLink>
                    </nav>
                </div>
            </div>
        </main>
    );
}
