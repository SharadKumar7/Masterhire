export default function Footer() {
    return (
        <footer className="bg-nav-bg-dark py-14 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">

                <div>
                    <h4 className="text-white font-semibold mb-3">MasterHire</h4>
                    <p>India’s trusted freelance marketplace.</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Marketplace</h4>
                    <ul className="space-y-2">
                        <li>Find Freelancers</li>
                        <li>Find Jobs</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Company</h4>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Resources</h4>
                    <ul className="space-y-2">
                        <li>Help</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Join Our Newsletter</h4>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-l-md bg-[#0b1437]
                            border border-gray-700 outline-none w-full"
                        />
                        <button className="bg-emerald-600 px-4 rounded-r-md text-black font-semibold">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
