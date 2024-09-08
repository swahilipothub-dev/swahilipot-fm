const VideoStream = () => {
  return (
    <div className='container my-3'>
      <div
        style={{
          padding: '56.25% 0 0 0',
          position: 'relative',
        }}
      >
        <iframe
          title='Swahilipot FM Live Stream'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen={true}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src='https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287'
        />
      </div>
    </div>
  )
}

export default VideoStream
