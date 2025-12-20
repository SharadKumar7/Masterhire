// home.jsx
// home.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer"



export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020b2d] to-[#020617] text-white">

            {/* HEADER (UNCHANGED) */}
            <Header />

            {/* ================= HERO ================= */}
            <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-14 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Bringing Real Work And <br />
                        Real Talent Together
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-xl">
                        India’s Own Freelance Marketplace <br />
                        Hire Professionals. Post Jobs. Pay Only When You’re Happy.
                    </p>

                    <button className="mt-8 bg-emerald-500 hover:bg-emerald-400
            text-black font-semibold px-6 py-3 rounded-lg transition">
                        Post a Project
                    </button>
                </div>

                {/* Illustration placeholder */}
                <div className="hidden md:flex justify-center">
                    <div className="w-80 h-80 bg-white/10 rounded-xl
    flex items-center justify-center
    animate-float">
                        <span className="text-gray-400">Illustration</span>
                    </div>
                </div>

            </section>

            {/* ================= SEARCH ================= */}
            <section className="max-w-7xl mx-auto px-6 -mt-10">
                <div className="bg-[#0b1437] rounded-xl p-6 max-w-3xl shadow-lg">
                    <h3 className="font-semibold mb-4">
                        Find The Right Talent For Your Work
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Search by Skills, Role, or Keywords"
                            className="flex-1 px-4 py-3 rounded-md bg-[#020617]
              border border-gray-700 outline-none"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-500
              px-6 py-3 rounded-md font-semibold transition">
                            Find Talent
                        </button>
                    </div>

                    <div className="flex gap-6 mt-4 text-sm text-gray-400">
                        <span className="text-emerald-400 cursor-pointer">Find Talent</span>
                        <span className="cursor-pointer hover:text-white">Explore Jobs</span>
                    </div>
                </div>
            </section>

            {/* ================= CATEGORIES ================= */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h3 className="text-lg font-semibold mb-12">
                    Explore Over 1000+ Categories
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm text-gray-300">
                    {[
                        "Web Design", "Mobile Apps", "UI / UX", "Python", "Java", "PHP",
                        "React", "Node.js", "SEO", "Content Writing", "Marketing", "Video Editing",
                        "Data Science", "AI / ML", "DevOps", "Cyber Security", "Testing",
                        "Blockchain", "Cloud", "Game Development", "Automation", "No-Code",

                        // 7 NEW CATEGORIES
                        "Product Management",
                        "Business Analysis",
                        "Technical Writing",
                        "Quality Assurance",
                        "IT Support",
                        "Data Engineering",
                        "UI Animation"
                    ].map((item) => (
                        <div
                            key={item}
                            className="bg-[#0b1437] py-3 rounded-md text-center
              hover:bg-indigo-600 hover:text-white transition cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}

                    <button
                        className="bg-emerald-500 hover:bg-emerald-400
            text-black font-semibold rounded-md py-3
            col-span-2 md:col-span-1 transition"
                    >
                        Explore More →
                    </button>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <h3 className="text-lg font-semibold mb-12">
                    What Our Clients Experienced
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="h-36 bg-white/20 rounded-md"
                        />
                    ))}
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-[#020617] py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    <div>
                        <h4 className="text-2xl font-bold">XXXXXXX</h4>
                        <p className="text-gray-400 text-sm">Total Registered Users</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">XXXXXXX</h4>
                        <p className="text-gray-400 text-sm">Total Jobs Posted</p>
                    </div>
                </div>
            </section>

            {/* FOOTER (UNCHANGED) */}
            <Footer />
        </div>
    );
}
