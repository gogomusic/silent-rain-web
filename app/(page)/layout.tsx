import React from 'react';
import Navbar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
// import CloudMusic from "@/components/cloud-music";

const layout = async ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<Navbar />
			<main className="min-h-[800px]">{children}</main>
			<Footer />
			{/* <CloudMusic /> */}
		</>
	);
};

export default layout;
