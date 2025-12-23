import {  MessageCircle, GitBranch, Podcast} from "lucide-react";

export default function Bio() {
  return (
    <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
      <img src="/image.png" alt="profile picture"
      className="h-32 w-32 rounded-full"></img>
      <h1 className="text-lg md:text-2xl font-bold mt-3">About Me</h1>
      <p className="text-secondary-foreground py-2">
        Hello! I'm a passionate developer with a love for creating dynamic and responsive web applications. With experience in various technologies, I enjoy solving complex problems and continuously learning new skills.
      </p>
      <div className="flex flex-row gap-3 mt-2">
        <a href="https://www.linkedin.com/in/shreya-singhal-b2984a289/"
        target="_blank" rel="noopener noreferrer" >
        <Podcast className="text-blue-400 hover:text-blue-200 cursor-pointer"/>
        </a>
        <a href="https://x.com/"
        target="_blank" rel="noopener noreferrer">
          <MessageCircle className="text-blue-400 hover:text-blue-200 cursor-pointer"/>
        </a>
        <a href="https://github.com/ShreyaSinghal22"
        target="_blank" rel="noopener noreferrer">
          <GitBranch className="text-blue-400 hover:text-blue-200 cursor-pointer"/>
        </a>
      </div>
    </section>
  );
}