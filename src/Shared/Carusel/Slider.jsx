import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-3/4 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1407172051/photo/indian-spicy-chicken-tikka-biryani-with-raita-and-gulab-jamun-served-in-a-dish-top-view-on.jpg?b=1&s=170667a&w=0&k=20&c=CoIMBHc5qY47d5pRUW-Z_nuWl53kp2-ZqMJ_Qj-46WY=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://media.istockphoto.com/id/1411959136/photo/indian-spicy-food-chicken-afghani-tikka-biryani-or-reshmi-chicken-tikka-biryani-with-raita.jpg?b=1&s=170667a&w=0&k=20&c=MVSWPZHKWrscKzTKvq8MptbkeMEFYIr6sgcV9PZ3zaI=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1366480242/photo/fruits-and-vegetables-assorted-full-frame-background-featuring-leaf-vegetables.jpg?s=612x612&w=0&k=20&c=YbFGuzNIJzWlsctyz8fTPInWahoGblVE71T8feaAhw0=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1385042040/photo/hand-of-maid-washing-tomato-fresh-vegetables-preparation-healthy-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=zg5iftHb9KseBtIWr5aycGANqhWzHQFsf6b6HuGj8QA=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;