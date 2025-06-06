export default function WavyPatternBackground() {
    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background-home1.png')" }}
            />
            <div className="absolute inset-0 bg-gray-light opacity-[97%]" />
            <div
                className="h-full 2xl:w-[30%] xl:w-[35%] w-[55%] absolute right-0 bottom-0 sm:visible invisible bg-cover bg-left transition-transform duration-700"
                style={{ backgroundImage: "url('/right-background-home1.webp')" }}
            />
        </>
    );
}