
import useSite from "../hooks/useSite"

const Footer = () => {
	const { data: site } = useSite()
	// const [theme, setTheme] = useState<"light" | "dark" | "sepia">("light")

	// const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
	// 	setTheme(e.target.value as "light" | "dark" | "sepia")
	// }

	// useEffect(() => {
	// 	document.body.className = theme
	// }, [theme])

	return (
		<footer className="max-w-6xl mx-auto px-6 py-12 min-h-[10rem]">
			<div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between">
				<small className="text-gray-500">{site?.data?.data?.textLogo}</small>
				<small className="text-gray-500">
					&copy; {new Date().getFullYear()} All Rights Reserved.
				</small>
				{/* <select value={theme} onChange={handleThemeChange}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="sepia">Sepia</option>
				</select> */}
			</div>
		</footer>
	)
}

export default Footer
