import React from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testomonial = () => {
    const users = useSelector((state) => state.allUsers.users);    
    console.log(users)
  return(
      <section className='testo__sec section'>
          <div className='container center'>
            <Swiper 
            navigation={true} 
            loop={true} 
            modules={[Navigation]} 
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={2}
            loopFillGroupWithBlank={true}
            className="mySwiper">
                {users.map(user => {
                    const {name, id, avatar,message,designation } = user;
                    return (
                        <SwiperSlide key={id}>
                            <div className='testo__card grid'>
                                <div className='user__info'>
                                    <div className='user__avatar'>
                                        <img src={avatar} alt={name} />
                                    </div>
                                    <h2 className='sub__title' style={{textAlign:'start'}}>{name}</h2>
                                    <h3 className='sub'>{designation}</h3>
                                    <span className='reviews'> 
                                    <i className='bx bx-star'></i> 
                                    <i className='bx bx-star'></i> 
                                    <i className='bx bx-star'></i> 
                                    <i className='bx bx-star'></i> 
                                    <i className='bx bx-star'></i> 
                                    </span> 
                                </div>
                                <div className='user__msg'> 
                                <p>{message}</p> 
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
          </div>
      </section> 
  )

};

export default Testomonial;
