const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "HTML & CSS",
  "Git & GitHub",
  "RESTful APIs",
  "Test-Driven Development (TDD)",
  "Agile/Scrum",
];

export default function Skills()  {
    return (
        <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
            <h2 className="text-lg md:text-2xl text-black mb-3 font-semibold">Skills</h2>
            <ul className="flex flex-wrap text-secondary-foreground leading-10">
                {skills.map((skill, index) => (
                 <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};