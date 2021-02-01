<script lang="ts">
  import CarouselContainer from "@/containers/main/CarouselContainer.svelte";
  import { browserWidth } from "@/store/main";
  import ContentContainer from "~/containers/main/ContentContainer.svelte";

  $: clientWidth = $browserWidth;
</script>

<svelte:head>
  <title>라프텔 - 애니 추천 • 애니스트리밍 사이트</title>
</svelte:head>
<div class="bg-white">
  <CarouselContainer {clientWidth} />
  <ContentContainer />
  <div />
</div>

<style lang="scss">
  :global(.content-container) {
    padding-top: 2.5em;
    padding-bottom: 9.125em;
    overflow-x: hidden;
    width: 100%;

    @media (max-width: 1024px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
    }

    @media (max-width: 375px) {
      font-size: 6px;
    }
  }
</style>
