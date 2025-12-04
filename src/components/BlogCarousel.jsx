import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BlogCarousel = ({ blogs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <Slider {...settings}>
      {blogs.map(blog => (
        <div key={blog.id} className="p-2">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold">{blog.title}</h3>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
            <button className="mt-2 text-primary">Read More</button>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default BlogCarousel