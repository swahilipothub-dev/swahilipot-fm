const VideoPlayer = ({ src }) => {
  return (
    <div className="container my-3">
      <div className='ratio ratio-16x9'>
        <iframe
        width='1000'
        height='500'
        src='https://www.youtube.com/embed/T_cM2XZqe18?si=-9YfScuM_uioqW4a'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoPlayer