import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip";
import { useEffect } from "react";

export default function Navbar({ section, setSection, setCurrentNav }) {

    useEffect(() => {
        setSection(section)
    }, [section])

    const getScale = (sectionImage) => {
        return section === sectionImage ? "scale-125" : "scale-100";
    };

    const handleSection = (handleSection, posY) => {
        setSection(handleSection)
        setCurrentNav(posY)
    }

    return (
        <div className="fixed left-0 flex flex-col justify-evenly h-screen w-[300px]">
            <div className="h-full flex justify-center items-end">
                <Tooltip
                    content="Acerca de mi"
                    positioning={{ placement: "right" }}
                    openDelay={0}
                    closeDelay={0}
                >
                    <Image
                        className={`transition-transform duration-300 ${getScale(1)} hover:scale-125`}
                        src="/esfera1.png"
                        width={150}
                        height={150}
                        alt="esfera1"
                        onClick={() => handleSection(1, 0)}
                    />
                </Tooltip>
            </div>
            <div className="h-full flex flex-row-reverse items-center">
                <Tooltip
                    content="Proyectos"
                    positioning={{ placement: "right" }}
                    openDelay={0}
                    closeDelay={0}
                >
                    <Image
                        className={`transition-transform duration-300 ${getScale(2)} hover:scale-125`}
                        src="/esfera2.png"
                        width={150}
                        height={150}
                        alt="esfera2"
                        onClick={() => handleSection(2, 955)}
                    />
                </Tooltip>
            </div>
            <div className="h-full flex justify-center items-start">
                <Tooltip
                    content="Contacto"
                    positioning={{ placement: "right" }}
                    openDelay={0}
                    closeDelay={0}
                >
                    <Image
                        className={`transition-transform duration-300 ${getScale(3)} hover:scale-125`}
                        src="/esfera3.png"
                        width={150}
                        height={150}
                        alt="esfera3"
                        onClick={() => handleSection(3, 2100)}
                    />
                </Tooltip>
            </div>
        </div>
    );
}
