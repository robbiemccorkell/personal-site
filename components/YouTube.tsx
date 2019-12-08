interface Props {
  videoId: string;
}

const YouTube: React.FunctionComponent<Props> = ({ videoId }) => (
  <div className="video-container">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
    />
    <style jsx global>{`
      .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
      }
      .video-container iframe,
      .video-container object,
      .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default YouTube;
