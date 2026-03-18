const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <div>
        <p className="text-zinc-400 text-xs mb-1">{label}</p>
        <p className="font-bold text-sm">{value}</p>
    </div>
);

export const InfoGrid = () => (
    <div className="rounded-2xl bg-white p-8 shadow-sm h-full">
        <h2 className="text-2xl font-bold mb-8">Personal Info</h2>
        <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            <InfoItem label="Full Name" value="Ly Truong Nam" />
            <InfoItem label="Student ID" value="22120218" />
            <InfoItem label="Place of birth" value="Soc Si Bai" />
            <InfoItem label="Birthday" value="23/10/2004" />
            <InfoItem label="Course" value="2022" />
            <InfoItem label="Training Level" value="Bachelor" />
            <InfoItem label="Industry" value="Information Technology" />
            <InfoItem label="Type of training" value="Official" />
        </div>
    </div>
);