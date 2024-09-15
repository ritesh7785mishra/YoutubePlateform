"use client";

import { useState } from "react";

const VideoUpload = ({ uploadAction }) => {
	const [videoFile, setVideoFile] = useState(null);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleFileChange = (e) => {
		setVideoFile(e.target.files[0]);
		setMessage(""); // Clear the message when a new file is selected
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!videoFile) {
			setMessage("Please select a video file first.");
			return;
		}

		const formData = new FormData();
		formData.append("video", videoFile);

		try {
			setLoading(true);
			setMessage(""); // Clear previous messages

			// Trigger the server action
			const result = await uploadAction(formData);

			if (result?.error) {
				setMessage(result.error);
			} else {
				setMessage("Video uploaded successfully!");
			}
		} catch (error) {
			setMessage("Error uploading video.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.title}>Upload Video</h2>
			<form onSubmit={handleSubmit} style={styles.form}>
				<input
					type="file"
					accept="video/*"
					onChange={handleFileChange}
					style={styles.inputFile}
				/>
				<button type="submit" disabled={loading} style={styles.button}>
					{loading ? "Uploading..." : "Upload"}
				</button>
			</form>

			{loading && <p style={styles.message}>Uploading, please wait...</p>}
			{message && <p style={styles.message}>{message}</p>}
		</div>
	);
};

// Inline styles for simplicity
const styles = {
	container: {
		backgroundColor: "#000",
		color: "#fff",
		padding: "20px",
		borderRadius: "8px",
		width: "100%",
		maxWidth: "500px",
		margin: "auto",
		textAlign: "center",
	},
	title: {
		fontSize: "24px",
		marginBottom: "20px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "15px",
	},
	inputFile: {
		color: "#fff",
		backgroundColor: "#333",
		border: "1px solid #555",
		padding: "10px",
		borderRadius: "5px",
		width: "100%",
		cursor: "pointer",
	},
	button: {
		backgroundColor: "#FF6347", // Tomato color
		color: "#fff",
		border: "none",
		padding: "12px 20px",
		borderRadius: "5px",
		cursor: "pointer",
		fontWeight: "bold",
		transition: "background-color 0.3s",
		width: "100%",
		maxWidth: "200px",
	},
	buttonHover: {
		backgroundColor: "#FF4500", // Darker tomato color for hover
	},
	message: {
		marginTop: "10px",
		fontSize: "16px",
	},
};

export default VideoUpload;
