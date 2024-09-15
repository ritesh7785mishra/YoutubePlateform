import VideoUpload from "@/components/VideoUpload";
import { uploadAction } from "@/lib/actions/upload.action";

export default function UploadPage() {
	return <VideoUpload uploadAction={uploadAction} />;
}
