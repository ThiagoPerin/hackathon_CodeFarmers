import Image from "next/image";

export default function CornerPatternBackgorund() {
    return (
        <Image src="/background-home2.png" alt="Logo" width={600} height={600} className="absolute left-0 bottom-0" />
    );
}