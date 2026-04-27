import { useState } from 'react'
import { reviews } from '../data/reviews'
import styles from "./ReviewSlider.module.css"

export default function ReviewSlider() {

  // Tracks the starting index for visible reviews in the slider
  const [startIndex, setStartIndex] = useState(0)

  // Selects a subset of reviews to display based on the current index
  const visibleReviews = reviews.slice(startIndex, startIndex + 3)

  // Moves the slider forward if there are more reviews available
  function handleNext() {
    if (startIndex < reviews.length - 3) {
      setStartIndex(startIndex + 1)
    }
  }

  // Moves the slider backward if not at the start
  function handlePrev() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <section className={styles.ReviewSliderMainContainer}>

      <h2>Customer Reviews</h2>

      {/* Navigation controls for sliding through reviews */}
      <section className={styles.ReviewControls}>

        <button onClick={handlePrev}>‹</button>

        {/* Renders the currently visible reviews */}
        <div className={styles.ReviewSliderCarusell}>
          {/* Each review displays user info, rating, and feedback */}
          {visibleReviews.map((review) => (
            <article className={styles.ReviewCard} key={review.id}>

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

            </article>
          ))}
        </div>

        <button onClick={handleNext}>›</button>

      </section>
    </section>
  )
}