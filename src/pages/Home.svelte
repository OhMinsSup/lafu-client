<script lang="ts">
  import SvelteItem from "@/components/base/SlickItem.svelte";
  // import { onMount } from "svelte";

  // onMount(() => {
  //   (window as any).$(".slick-initialized").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     autoplay: true,
  //     // asNavFor: '.slider-nav'
  //   });
  // });
</script>

<div class="bg-white">
  <div class="carousel">
    <div class="slick-slider slick-initialized" dir="ltr">
      <div>prev</div>
      <div class="slick-list" style="height: 500px">
        <div class="slick-track" style="opacity: 1; width: 4875px;">
          <SvelteItem />
        </div>
      </div>
      <div>next</div>
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
  .carousel {
    width: 100%;
    height: 51.375em;
    background-color: rgb(224, 224, 224);
    font-size: calc(0.833333vw);

    @media (max-width: 480px) {
      font-size: calc(4.44444vw);
      height: 30em;
    }
  }
</style>
