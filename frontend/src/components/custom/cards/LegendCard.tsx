type LegendCard = {
    children: React.ReactNode;
    label: string;
};

export default function LegendCard({ children, label }: LegendCard) {
    return (
        <div className="flex items-center gap-3">
            {children}
            <div className="text-sm">{label}</div>
        </div>
    );
}