const BilibiliVideo: React.FC = () => {
	const src = `//player.bilibili.com/player.html?isOutside=true&aid=113818546016616&bvid=BV1XUckePEe8&cid=27839236934&p=1`;
	const params = new URLSearchParams({
		autoplay: '1',
		high_quality: '1',
		danmaku: '0',
		ad: '0',
	}).toString();
	return (
		<div className="w-full absolute top-0 left-0">
			<iframe
				src={`${src}?${params}`}
				className="border-0 w-full h-[300px] md:h-[800px]"
				allowFullScreen
				sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
			></iframe>
		</div>
	);
};

export default BilibiliVideo;
