import React, { useRef } from "react";
import useMediaRecorder from "../../components/useMediaRecorder";
import { ipcRenderer } from "electron";

const RecorderVideo = () => {
	const {
		mediaUrl,
		isMuted,
		startRecord,
		resumeRecord,
		pauseRecord,
		stopRecord,
		clearBlobUrl,
		getMediaStream,
		toggleMute,
	} = useMediaRecorder({
		audio: true,
		video: true,
		onStop: (url: string) => {
			console.log(`录像完成，${url}`);
			ipcRenderer.send("rv:download-record", {
				downloadUrl: url,
			});
		},
	});

	const previewVideo = useRef<HTMLVideoElement>(null);

	return (
		<div>
			<h2>录像</h2>
			<video src={mediaUrl} controls />

			<video ref={previewVideo} controls />

			<button
				onClick={() =>
					(previewVideo.current!.srcObject = getMediaStream() || null)
				}
			>
				预览
			</button>
			<button onClick={startRecord}>开始</button>
			<button onClick={pauseRecord}>暂停</button>
			<button onClick={resumeRecord}>恢复</button>
			<button onClick={stopRecord}>停止</button>
			<button onClick={() => toggleMute(!isMuted)}>
				{isMuted ? "打开声音" : "禁音"}
			</button>
			<button onClick={clearBlobUrl}>清除 URL</button>
		</div>
	);
};

export default RecorderVideo;
