"use server";

import fs from "fs";
import path from "path";

export const uploadAction = async (formData) => {
	try {
		const videoFile = formData.get("video");

		if (!videoFile) {
			return { error: "No video file uploaded." };
		}

		const uploadDir = path.join(process.cwd(), "uploaded_videos");

		// Ensure the upload directory exists
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true });
		}

		// Get the file extension from the original file name
		const fileExtension = path.extname(videoFile.name);

		// Create a new file name using Date.now()
		const newFileName = `${Date.now()}${fileExtension}`;

		// Set the path to save the new file
		const videoFilePath = path.join(uploadDir, newFileName);

		// Read the video file as a buffer
		const videoBuffer = await videoFile.arrayBuffer();

		// Use fs.promises.writeFile to save the file
		await fs.promises.writeFile(videoFilePath, Buffer.from(videoBuffer));

		return { message: "Video uploaded successfully!", fileName: newFileName };
	} catch (error) {
		console.error(error);
		return { error: "Error uploading video." };
	}
};
