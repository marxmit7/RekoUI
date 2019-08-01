import React from 'react'

function VideoViewBox(props) {
	return (
		<div style={{ textAlign: "center" }}>
		{props.filetext}
		<video
			controls
			width="712"
			height="400"
			src={props.preview}
			type="video/mp4"
		/>

		</div>
	)
}

export default VideoViewBox;
