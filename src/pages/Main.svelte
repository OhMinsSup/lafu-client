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
  <ContentContainer {clientWidth} />
  <div />
</div>
