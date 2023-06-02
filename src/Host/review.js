import React from 'react'

export default function Review(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    return(
        <div className='review-section'>
         <div className='review-title-flex'>
         <h1 style={{fontSize:'2rem'}}>Your Review</h1>
         <p style={{fontSize:'1.1rem',marginLeft:'1em',marginBottom:'.6em'}}>Last <span style={{textDecoration:'underline',fontWeight:'800',color:'rgb(22, 22, 22,.8)'}}>30 days</span></p>
         </div>
         <div className='img-review-ctn'>
             <img src='../images/review.png' alt='review' />
         </div>
         <h1 style={{marginTop:'1.5em' , marginBottom:'1.5em'}}>Reviews (2)</h1>
         <div>
            {reviewsData.map(review=>{
                return (
                    <div key={review.id}>
                        {[...Array(review.rating)].map((_, i) => (
                             <img src='../images/star.svg' alt='star review' key={i} />
                        ))} 
                       <div className="info">
                            <p className="name" style={{fontWeight:'bold' , fontSize:'1.5rem'}}>{review.name}</p>
                            <p className="date" style={{marginLeft:'2em',color:'gray'}}>{review.date}</p>
                        </div>
                        <p style={{fontSize:'1.1rem',marginTop:'0'}}>{review.text}</p> 
                        <hr style={{marginTop:'2.5em' , marginBottom:'2.5em'}}></hr>                    
                    </div>
                    
                )
            })}
           
         </div>
        </div>
    )
}