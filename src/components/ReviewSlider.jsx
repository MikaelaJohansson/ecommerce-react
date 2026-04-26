import { useState } from 'react'
import { reviews } from '../data/reviews'
import styles from "./ReviewSlider.module.css"

export default function ReviewSlider() {

  const [startIndex, setStartIndex] = useState(0)

  const visibleReviews = reviews.slice(startIndex, startIndex + 3)

  function handleNext() {
    if (startIndex < reviews.length - 3) {
      setStartIndex(startIndex + 1)
    }
  }

  function handlePrev() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className={styles.ReviewSliderMainContainer}>

      <h2>Customer Review</h2>

        <div className={styles.ReviewControls}>

          <button onClick={handlePrev}>‹</button>

          <div className={styles.ReviewSliderCarusell}>
            {visibleReviews.map((review) => (
              <div className={styles.ReviewCard} key={review.id}>

                <div className={styles.ReviewHeader}>
                  <img
                  className={styles.ReviewImage}
                  src={review.image}
                  alt={review.name}
                  />

                  <div>
                      <h3>{review.name}</h3>
                      <p>{"⭐".repeat(review.rating)}</p>
                  </div>
                </div>

                <p>{review.text}</p>

              </div>
            ))}
          </div>

          <button onClick={handleNext}>›</button>

        </div>
    </div>
  )
}