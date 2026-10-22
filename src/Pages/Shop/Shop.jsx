
import React, { useState } from 'react'

import One from './one.svg'
import Two from './two.svg'
import Three from './three.svg'
import Four from './four.svg'

import './Shop.css'

const products = [
  {
    id: 1,
    name: 'Periwinkle',
    price: 5,
    image: One,
    description:
      'Bring a touch of beauty to every moment with our lovely periwinkle flowers. Their delicate blooms and charming colors make a wonderful gift for someone special or a beautiful addition to your home.',
  },
  {
    id: 2,
    name: 'Daisy',
    price: 5,
    image: Two,
    description:
      'Brighten someone’s day with our fresh and beautiful daisies. These cheerful blooms bring a feeling of happiness, freshness, and natural beauty to birthdays, celebrations, or any ordinary day.',
  },
  {
    id: 3,
    name: 'Sun flower',
    price: 8,
    image: Three,
    description:
      'Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant, long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.',
  },
  {
    id: 4,
    name: 'White Rose',
    price: 10,
    image: Four,
    description:
      'Express your deepest feelings with our elegant white roses. Their timeless beauty and delicate petals symbolize purity, love, and new beginnings, making them perfect for anniversaries, weddings, and thoughtful gifts.',
  },
  {
    id: 5,
    name: 'Periwinkle',
    price: 5,
    image: One,
    description:
      'Bring a touch of beauty to every moment with our lovely periwinkle flowers. Their delicate blooms and charming colors make a wonderful gift for someone special or a beautiful addition to your home.',
  },
  {
    id: 6,
    name: 'Daisy',
    price: 5,
    image: Two,
    description:
      'Brighten someone’s day with our fresh and beautiful daisies. These cheerful blooms bring a feeling of happiness, freshness, and natural beauty to birthdays, celebrations, or any ordinary day.',
  },
  {
    id: 7,
    name: 'Sun flower',
    price: 8,
    image: Three,
    description:
      'Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant, long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.',
  },
  {
    id: 8,
    name: 'White Rose',
    price: 10,
    image: Four,
    description:
      'Express your deepest feelings with our elegant white roses. Their timeless beauty and delicate petals symbolize purity, love, and new beginnings, making them perfect for anniversaries, weddings, and thoughtful gifts.',
  },
  {
    id: 9,
    name: 'Periwinkle',
    price: 5,
    image: One,
    description:
      'Bring a touch of beauty to every moment with our lovely periwinkle flowers. Their delicate blooms and charming colors make a wonderful gift for someone special or a beautiful addition to your home.',
  },
  {
    id: 10,
    name: 'Daisy',
    price: 5,
    image: Two,
    description:
      'Brighten someone’s day with our fresh and beautiful daisies. These cheerful blooms bring a feeling of happiness, freshness, and natural beauty to birthdays, celebrations, or any ordinary day.',
  },
  {
    id: 11,
    name: 'Sun flower',
    price: 8,
    image: Three,
    description:
      'Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant, long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.',
  },
  {
    id: 12,
    name: 'White Rose',
    price: 10,
    image: Four,
    description:
      'Express your deepest feelings with our elegant white roses. Their timeless beauty and delicate petals symbolize purity, love, and new beginnings, making them perfect for anniversaries, weddings, and thoughtful gifts.',
  },
]

const Shop = () => {
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  )

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const productGroups = Array.from(
    { length: Math.ceil(filteredProducts.length / 4) },
    (_, index) => filteredProducts.slice(index * 4, index * 4 + 4)
  )

  return (
    <section className="shop">
      <div className="container">
        <div className="shop-container">
          {selectedProduct ? (
            <div className="shop-detail">
              <button
                className="shop-back-btn"
                type="button"
                onClick={() => setSelectedProduct(null)}
              >
                ← Back to shop
              </button>

              <div className="shop-detail-content">
                <div className="shop-detail-image-box">
                  <img
                    className="shop-detail-image"
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                  />
                </div>

                <div className="shop-detail-info">
                  <span className="shop-subtitle">
                    OUR FLOWERS
                  </span>

                  <h1 className="shop-detail-title">
                    {selectedProduct.name}
                  </h1>

                  <p className="shop-detail-description">
                    {selectedProduct.description}
                  </p>

                  <span className="shop-detail-price">
                    ${selectedProduct.price.toFixed(2)}
                  </span>

                  <button
                    className="shop-btn shop-detail-btn"
                    type="button"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to cart
                  </button>

                  <p className="shop-cart-count">
                    Cart items: {cart.length}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="shop-header">
                <div className="shop-heading-box">
                  <span className="shop-subtitle">
                    OUR FLOWERS
                  </span>

                  <h1 className="shop-heading">
                    Flower Shop
                  </h1>

                  <p className="shop-description">
                    Find the perfect flowers for every moment.
                  </p>
                </div>

                <div className="shop-search">
                  <span className="shop-search-icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m16 16 4 4" />
                    </svg>
                  </span>

                  <input
                    type="search"
                    className="shop-search-input"
                    placeholder="Search flowers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search flowers"
                  />

                  {search && (
                    <button
                      type="button"
                      className="shop-clear-btn"
                      onClick={() => setSearch('')}
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              <p className="shop-results">
                {filteredProducts.length} flowers found
              </p>

              {productGroups.length > 0 ? (
                productGroups.map((group, index) => (
                  <ul className="shop-list" key={index}>
                    {group.map((product) => (
                      <li className="shop-item" key={product.id}>
                        <button
                          className="shop-product-open"
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          aria-label={`View ${product.name} details`}
                        >
                          <div className="shop-image-wrapper">
                            <img
                              className="shop-image"
                              src={product.image}
                              alt={product.name}
                            />
                          </div>

                          <div className="shop-card-heading">
                            <h2 className="shop-title">
                              {product.name}
                            </h2>

                            <span className="shop-price">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                        </button>

                        <div className="shop-item-info shop-card-actions">
                          <button
                            className="shop-btn shop-details-btn"
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                          >
                            View details
                          </button>

                          <button
                            className="shop-btn"
                            type="button"
                            onClick={() => addToCart(product)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))
              ) : (
                <div className="shop-empty">
                  <span className="shop-empty-icon">🌸</span>

                  <h2>No flowers found</h2>

                  <p>
                    Try searching for Periwinkle, Daisy,
                    Sun flower or White Rose.
                  </p>

                  <button
                    className="shop-btn shop-reset-btn"
                    type="button"
                    onClick={() => setSearch('')}
                  >
                    Show all flowers
                  </button>
                </div>
              )}

              <p className="shop-cart-count">
                Cart items: {cart.length}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Shop
