<script>
  // your script goes here
</script>

<div class="carousel-item">
  <div class="carousel-content absolute">
    <img
      class="object-cover"
      src="https://image.laftel.net/carousel/carousel_logo_dadada.png"
      alt="logo-description"
    />
    <div class="carousel-description">
      <span>바바의 육아일기!</span>
    </div>
  </div>
</div>

<style lang="scss">
  .carousel-item {
    width: 100%;
    height: 51.375em;
    background-size: cover;
    background-image: linear-gradient(
        90deg,
        rgba(18, 18, 18, 0.5) 0%,
        rgba(18, 18, 18, 0) 50%
      ),
      linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
      linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%),
      url("https://image.laftel.net/carousel/carousel_hero_dadada_w.jpg");

    @media (max-width: 480px) {
      height: 30em;
      cursor: pointer;
      background-image: linear-gradient(
          90deg,
          rgba(18, 18, 18, 0.7) 0%,
          rgba(18, 18, 18, 0) 49.03%
        ),
        linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.7) 100%),
        linear-gradient(rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 32.71%),
        url("https://image.laftel.net/carousel/carousel_hero_dadada_m.jpg");
    }
    .carousel-content {
      left: 3.125em;
      bottom: 11em;
      max-width: 38.75em;
      @media (max-width: 480px) {
        left: 1em;
        bottom: 3.375em;
        max-width: 18em;
      }

      .carousel-description {
        margin-top: 0.75em;

        @media (max-width: 480px) {
          margin-top: 0.375em;
        }

        @media (max-width: 1024px) {
          margin-top: 1.25em;
        }

        & > span {
          display: block;
          font-size: 1.75em;
          line-height: 1.214em;
          letter-spacing: -0.075em;
          color: white;
          font-weight: 500;
          text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.25em;
          font-style: normal;

          @media (max-width: 480px) {
            font-size: 0.875em;
            line-height: 1.285em;
            letter-spacing: -0.025em;
          }

          @media (max-width: 1024px) {
            font-size: 2.1875em;
            letter-spacing: -0.09375em;
          }
        }
      }

      img {
        height: 16.25em;
        margin-top: 0.75em;

        @media (max-width: 480px) {
          height: 7.5625em;
          margin-top: 0.375em;
          top: 300px;
        }

        @media (max-width: 1024px) {
          margin-top: 1.25em;
        }
      }
    }
  }
</style>
