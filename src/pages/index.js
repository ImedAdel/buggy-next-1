import * as React from "react"
import {
	Dialog,
	DialogBackdrop,
	DialogDisclosure,
	useDialogState,
} from "reakit/Dialog"

export default () => {
	const dialog = useDialogState()
	return (
		<div>
			<h1>Buggy Next 1</h1>
			<p>In my setup, I've got Reakit, a custom _document and a custom _app</p>
			<DialogDisclosure {...dialog}>Dialog</DialogDisclosure>
			<DialogBackdrop
				{...dialog}
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100vw",
					height: "100vh",
					backgroundColor: "rgba(203,213,224,.25)!important",
					backdropFilter: "blur(4px)",
				}}
			>
				<Dialog
					{...dialog}
					className="flex flex-col items-center justify-center h-auto px-4 py-12 bg-white rounded-lg shadow w-88"
					style={{
						width: "20rem",
						height: "20rem",
						backgroundColor: "white",
					}}
				>
					<h2>Log in</h2>
					<input
						aria-label={"Email"}
						placeholder={"Email"}
						name={"email"}
						type={"email"}
						autoComplete={"email"}
						required
					/>
					<button>Submit</button>
				</Dialog>
			</DialogBackdrop>
		</div>
	)
}
