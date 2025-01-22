import React from "react";
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-xl mb-4">© 2024 AHSAN HANIF. All rights reserved.</p>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/Muhammadahsanhanif"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-2xl text-gray-400 hover:text-[#6e5494]"
                        title="GitHub Profile"
                    >
                        <GithubOutlined className="text-[#6e5494]" />
                        GitHub
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/ahsan-hanif-47ab13320/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-2xl text-gray-400 hover:text-[#0077B5]"
                        title="LinkedIn Profile"
                    >
                        <LinkedinFilled className="text-[#0077B5]" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
