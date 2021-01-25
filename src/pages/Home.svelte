<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import Carousel from "@beyonk/svelte-carousel";

  import { getMainCarouselAPI, GET_MAIN_CAROUSE_KEY } from "@/libs/apis/main";

  import SlickItem from "@/components/base/SlickItem.svelte";

  const queryResult = useQuery(GET_MAIN_CAROUSE_KEY, getMainCarouselAPI, {
    refetchInterval: 30000,
  });
</script>

<svelte:head>
  <title>라프텔 - 애니 추천 • 애니스트리밍 사이트</title>
</svelte:head>
<div class="bg-white w-screen">
  <div class="carousel-wrapper">
    {#if $queryResult.data}
      <Carousel
        perPage={1}
        loop={true}
        autoplay={3000}
        controls={false}
        dots={true}
      >
        {#each $queryResult.data.data.data as carousel (carousel.id)}
          <div class="slide-content">
            <SlickItem {...carousel} />
          </div>
        {/each}
      </Carousel>
    {/if}
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
