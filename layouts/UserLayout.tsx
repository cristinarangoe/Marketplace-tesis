interface LayoutProps {
	children: JSX.Element;
}

export default function UserLayout({ children }: LayoutProps) {
	return (
		<div className="h-full flex flex-col ">
			{children}
			<footer className="mt-auto">footer user</footer>
		</div>
	);
}
