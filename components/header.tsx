"use client"
import useSite from "../hooks/useSite"
import Link from "next/link"
import { Page } from "../types/generated/types"
import { ChevronDown } from "react-feather"
import { useCallback, useState } from "react"
import clsx from "clsx"
import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"
import Skeleton from "./Skeleton"

const Header = () => {
	// const router = useRouter()
	const { data: site } = useSite()

	const firstFourPages = site?.data?.data?.headerPages?.slice(0, 4)
	// const restOfThePages = site?.data?.data?.headerPages?.slice(4, undefined)

	const linkClassName =
		"capitalize justify-between flex items-center text-sm py-4 px-2 hover:bg-white cursor-pointer text-black font-medium"

	const renderFirstFourPages = useCallback(() => {
		return firstFourPages?.map((page: Page) => (
			<Link href={page.slug}>
				<li key={page.id} className={linkClassName}>
					{page.name}
				</li>
			</Link>
		))
	}, [firstFourPages])

	const _renderAllPages = useCallback(() => {
		return site?.data?.data?.headerPages?.map((page: Page) => (
			<li key={page.id} className={linkClassName}>
				<Link href={page.slug} onClick={() => setShowMore(false)}>
					{page.name}
				</Link>
			</li>
		))
	}, [site])

	const [showMore, setShowMore] = useState(false)

	const frostyDiv = `border-solid border-2 border-[rgba(255,255,255,0.2)] bg-[rgba(240,240,250,0.5)] [.dark]:bg-rgba(50,50,50,0.2) backdrop-blur-md `

	const MotionDialogContent = motion(Dialog.Content)

	return (
		<Dialog.Root open={showMore} onOpenChange={open => setShowMore(open)}>
			<nav
				className={clsx(
					"w-screen fixed top-4 left-0 right-0 max-w-6xl -ml-px mx-4 lg:mx-auto rounded-full  overflow-hidden",
					frostyDiv
				)}>
				<div className="w-full flex items-center justify-between">
					<div className="px-4">
						{site ? (
							<Link href="/">
								<p className="text-black text-xl font-extrabold">
									{site?.data?.data?.textLogo}.
								</p>
							</Link>
						) : (
							<Skeleton />
						)}
					</div>
					<ul className="flex items-center justify-end">
						{firstFourPages ? renderFirstFourPages() : <Skeleton />}
						{site?.data?.data?.headerPages &&
						site?.data?.data?.headerPages.length > 4 ? (
							<Dialog.Trigger asChild>
								<button
									type="button"
									aria-label="Show more pages"
									className={linkClassName}
									onClick={() => setShowMore(true)}>
									<span>All Pages</span> <ChevronDown height={14} />
								</button>
							</Dialog.Trigger>
						) : (
							<Skeleton />
						)}
					</ul>
				</div>
			</nav>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed w-screen h-screen bg-black/50 top-0 left-0 z-50 backdrop-blur-sm" />
				<MotionDialogContent
					initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9, y: 10 }}
					animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="fixed bottom-0 md:bottom-[20%] left-0 md:left-[20%]  mx-auto bg-white w-screen md:w-[60vw] shadow-md h-[60vh] z-[99] rounded-lg overflow-y-auto">
					<Dialog.Title className="sticky top-0 bg-white text-base uppercase font-medium text-gray-700 px-4 py-4">
						All Pages
					</Dialog.Title>
					{/* <Dialog.Close /> */}
					<nav className="flex flex-col">
						{site?.data?.data?.headerPages?.map((page: Page) => (
							<Link
								href={page.slug}
								onClick={() => setShowMore(false)}
								className="w-full px-4 py-4 hover:bg-slate-200 text-black">
								{page.name}
							</Link>
						))}
						<div className="flex items-center justify-center py-4" />
					</nav>
				</MotionDialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default Header
