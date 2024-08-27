const VideoPlayer = ({ src }) => {
  return (
    <div className='container my-3'>
      <div
        style={{
          padding: '56.25% 0 0 0',
          position: 'relative',
        }}
      >
        <iframe
          src='https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287'
          allow='autoplay'
          allowFullScreen={true}
          frameBorder={0}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  )
}

export default VideoPlayer
