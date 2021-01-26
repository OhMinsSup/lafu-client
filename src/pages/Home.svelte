<script lang="ts">
  import CarouselContainer from "@/containers/main/CarouselContainer.svelte";

  let clientWidth = 0;
</script>

<svelte:head>
  <title>라프텔 - 애니 추천 • 애니스트리밍 사이트</title>
</svelte:head>
<div class="bg-white w-screen" bind:clientWidth>
  <CarouselContainer {clientWidth} />
</div>

<style lang="scss">
</style>
