import React from 'react';

const VideoListItem = (props) => {
	// video do props vem do component video_list (section 2, lecture 26)
	const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem;