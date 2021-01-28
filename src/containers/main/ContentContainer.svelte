<script lang="ts">
  import { useRecommendQuery } from "@/libs/hooks/main";
  import CollectionList from "@/components/common/CollectionList.svelte";

  export let clientWidth: number;

  const queryResult = useRecommendQuery();

  console.log(clientWidth);
  console.log($queryResult);
</script>

<!-- markup (zero or more items) goes here -->
<div class="overflow-x-hidden content-container">
  <div>
    {#if $queryResult.data}
      {#each $queryResult.data.data as recommend (recommend.id)}
        <CollectionList {recommend} />
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .content-container {
    padding-top: 2.5em;
    padding-bottom: 9.125em;
    overflow-x: hidden;
    width: 100%;
    font-size: 3.125px;

    @media (max-width: 1400px) {
      font-size: 3.71094px;
    }

    @media (max-width: 1100px) {
      font-size: 4.57031px;
    }

    @media (max-width: 800px) {
      font-size: 5.95703px;
    }

    @media (max-width: 500px) {
      font-size: 8.49609px;
    }

    @media (pointer: coarse), (hover: none) {
      padding-top: 1.5rem;
      padding-bottom: 3rem;
      width: 100%;
      font-size: 1em;
    }

    @media (max-width: 1024px), (pointer: coarse), (hover: none) {
      font-size: 7.8125px;
    }

    @media (max-width: 480px), (pointer: coarse), (hover: none) {
      font-size: 16.6667px;
    }
  }
</style>
