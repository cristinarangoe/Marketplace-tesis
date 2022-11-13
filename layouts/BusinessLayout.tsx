interface LayoutProps {
	children: JSX.Element;
}

export default function BusinessLayout({ children }: LayoutProps) {
	return (
		<div className="bg-blue-300">
			{children}
			<footer className="mt-auto">business footer</footer>
		</div>
	);
}
