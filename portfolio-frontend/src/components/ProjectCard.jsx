import { ChevronRight } from "lucide-react";

function ProjectCard ({title,description,tech}) {
    return (
            <div className="flex flex-col flex-grow border-b py-4 px-rounded-md group/item hover:bg-slate-200 rounded-md p-2 mt-1">
                    <a className="font-semibold hover:text-blue-200 "><p>{title}</p></a>
                    <div className="text-secondary-foreground">
                        <p>{description}</p>
                        <p>{tech}</p>
                    </div>
                    <div>
                        <ChevronRight/>
                    </div>
            </div>
    );
};

export default ProjectCard;