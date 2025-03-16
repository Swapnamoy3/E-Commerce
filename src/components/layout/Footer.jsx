import React from 'react';

export function Footer() {
    return (
        <footer class="bg-gray-800 py-12 mt-16">
            <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h5 class="text-lg font-bold mb-4">Dark Academy</h5>
                    <p class="text-gray-400 text-sm">Empowering developers worldwide</p>
                </div>
                <div>
                    <h6 class="font-bold mb-3">Company</h6>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" class="hover:text-purple-400">About</a></li>
                        <li><a href="#" class="hover:text-purple-400">Careers</a></li>
                        <li><a href="#" class="hover:text-purple-400">Blog</a></li>
                    </ul>
                </div>
                {/* <!-- Add more footer columns --> */}
            </div>
        </footer>
    );
}
