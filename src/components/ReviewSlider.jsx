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

      {/* Reviews */}
      <div className={` ${styles.ReviewSliderCarusell}
        flex flex-col items-center gap-6
        md:flex-row md:justify-center md:items-center md:gap-6 `}>
          
        {visibleReviews.map((review) => (
          <article
            className={`
              ${styles.ReviewCard}
              w-full max-w-[320px]
            `}
            key={review.id}>

            <div className={styles.ReviewHeader}>

              <img
                className={styles.ReviewImage}
                src={review.image}
                alt={review.name}
                loading='lazy'
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

      {/* Buttons (mobile) */}
      <div className="flex gap-4 -mt-20 md:hidden">
        <button className={styles.ReviewButton} onClick={handlePrev}>‹</button>
        <button className={styles.ReviewButton} onClick={handleNext}>›</button>
      </div>

      {/* Buttons (desktop) */}
      <div className="hidden md:flex justify-center gap-6 -mt-15">
        <button className={styles.ReviewButton} onClick={handlePrev}>‹</button>
        <button className={styles.ReviewButton} onClick={handleNext}>›</button>
      </div>

    </section>
  )
}