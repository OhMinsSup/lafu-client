<script lang="ts">
  import Carousel from "@beyonk/svelte-carousel";
  import SlickItem from "@/components/base/SlickItem.svelte";
</script>

<div class="bg-white w-screen">
  <div class="carousel-wrapper">
    <Carousel
      perPage={1}
      loop={false}
      autoplay={0}
      controls={false}
      dots={false}
    >
      <div class="slide-content">
        <SlickItem />
      </div>
      <div class="slide-content">Slide 2</div>
      <div class="slide-content">Slide 3</div>
      <div class="slide-content">Slide 4</div>
      <div class="slide-content">Slide 5</div>
    </Carousel>
  </div>
</div>

<style lang="scss">
  .carousel-wrapper {
    width: 100%;
    height: 51.375em;
    background-color: rgb(224, 224, 224);
    font-size: calc(0.833333vw);

    @media (max-width: 480px) {
      font-size: calc(4.44444vw);
      height: 30em;
    }
  }

  :global(.slides > div > *) {
    position: relative;
  }
</style>
