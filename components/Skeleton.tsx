import clsx from "clsx"
import React from "react"

const Skeleton = ({
	className,
	styles,
}: {
	styles?: React.CSSProperties
	className?: string
}) => {
	return (
		<div
			style={{ ...styles }}
			className={clsx(
				"h-8 w-12 bg-[rgba(var(--text-color-base), 0.5)] rounded animate-pulse",
				className
			)}
		/>
	)
}

export default Skeleton
