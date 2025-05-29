export default function WavyPatternBackground() {
    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background-home1.png')" }}
            />
            <div className="absolute inset-0 bg-gray-light opacity-[97%]" />
        </>
    );
}