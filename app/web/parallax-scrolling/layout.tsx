import Link from 'next/link';
import { PropsWithChildren } from 'react';

const layout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<ul className="fixed top-4 left-4 z-50 flex flex-col gap-4 rounded bg-white/30 p-2 backdrop-blur-sm">
				<li>
					<Link href="/web/parallax-scrolling/parallax-scrolling-1">
						视差滚动1
					</Link>
				</li>
				<li>
					<Link href="/web/parallax-scrolling/parallax-scrolling-2">
						视差滚动2
					</Link>
				</li>
			</ul>
			{children}
		</>
	);
};

export default layout;
