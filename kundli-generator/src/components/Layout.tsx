import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="min-h-screen w-full bg-[#050510] text-white flex flex-col relative">

            {/* 🌌 Top Navbar */}
            <nav className="w-full bg-slate-900/60 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    {/* 🔮 Brand */}
                    <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(100,100,255,0.4)]">
                        AstroRudra-K ✨
                    </div>

                    {/* 🌙 Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-slate-300 text-lg">
                        <NavItem to="/">Kundli</NavItem>
                        <NavItem to="/matching">Matching</NavItem>
                        <NavItem to="/panchang">Panchang</NavItem>
                        <NavItem to="/dasha">Dasha</NavItem>
                        <NavItem to="/transit">Transit</NavItem>
                    </div>

                    {/* 📱 Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white transition"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* 📱 Mobile Drawer */}
                {open && (
                    <div className="md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 px-4 py-4 space-y-3">
                        <MobileNavItem to="/" onClick={() => setOpen(false)}>
                            Kundli
                        </MobileNavItem>
                        <MobileNavItem to="/matching" onClick={() => setOpen(false)}>
                            Matching
                        </MobileNavItem>
                        <MobileNavItem to="/panchang" onClick={() => setOpen(false)}>
                            Panchang
                        </MobileNavItem>
                        <MobileNavItem to="/dasha" onClick={() => setOpen(false)}>
                            Dasha
                        </MobileNavItem>
                        <MobileNavItem to="/transit" onClick={() => setOpen(false)}>
                            Transit
                        </MobileNavItem>
                    </div>
                )}
            </nav>

            {/* ☄️ Page Body */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
                <div className="animate-fadeIn">{children}</div>
            </main>

            {/* ⭐ Footer */}
            <footer className="py-6 text-center text-slate-600 text-sm border-t border-slate-800 bg-slate-900/40 backdrop-blur-xl">
                © {new Date().getFullYear()} AstroRudra-K · Vedic Astrology Engine 🚀
            </footer>

            {/* ⭐ Add subtle stars in the background */}
            <div className="pointer-events-none fixed inset-0 bg-[url('https://i.ibb.co/4J3ZbJH/stars.png')] opacity-10"></div>
        </div>
    );
}

/* ---------------------------------------
   🌙 Reusable Nav Item (Desktop)
---------------------------------------- */
function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `transition font-medium ${
                    isActive
                        ? "text-purple-300 drop-shadow-[0_0_6px_rgba(180,90,255,0.8)]"
                        : "text-slate-300 hover:text-purple-300"
                }`
            }
        >
            {children}
        </NavLink>
    );
}

/* ---------------------------------------
   ☎ Mobile nav item
---------------------------------------- */
function MobileNavItem({
    to,
    children,
    onClick
}: {
    to: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className="block py-2 text-lg text-slate-300 hover:text-purple-300 transition"
        >
            {children}
        </NavLink>
    );
}
