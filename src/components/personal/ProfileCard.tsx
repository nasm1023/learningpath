import { Phone, Mail, Calendar, Briefcase } from "lucide-react";

export const ProfileCard = () => (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="aspect-square w-full rounded-xl bg-zinc-200 mb-4" /> {/* Placeholder cho ảnh */}
        <h2 className="text-2xl font-bold mb-6">Lý Trường Nam</h2>

        <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
                <Phone size={18} className="text-zinc-500 mt-0.5" />
                <div><p className="text-zinc-400 text-xs">Phone</p><p className="font-medium">03213213</p></div>
            </div>
            <div className="flex items-start gap-3">
                <Mail size={18} className="text-zinc-500 mt-0.5" />
                <div><p className="text-zinc-400 text-xs">Email</p><p className="font-medium">namt@gmail.com</p></div>
            </div>
            <div className="flex items-start gap-3">
                <Calendar size={18} className="text-zinc-500 mt-0.5" />
                <div><p className="text-zinc-400 text-xs">Start date</p><p className="font-medium">October 1, 2022</p></div>
            </div>
            <div className="flex items-start gap-3">
                <Briefcase size={18} className="text-zinc-500 mt-0.5" />
                <div><p className="text-zinc-400 text-xs">Position</p><p className="font-medium">Front-end Developer</p></div>
            </div>
        </div>
    </div>
);