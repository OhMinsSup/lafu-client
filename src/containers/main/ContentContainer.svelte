<script lang="ts">
  // import { useRecommendQuery } from "@/libs/hooks/main";
  import CollectionList from "@/components/common/CollectionList.svelte";
  import CollectionWrapper from "~/components/common/CollectionWrapper.svelte";
  import recommend from "../../data/recommend";
  import playhistory from "../../data/playhistory";
  import CollectionItem from "~/components/common/CollectionItem.svelte";

  // const queryResult = useRecommendQuery();
</script>

<div class="content-container">
  <div>
    <CollectionWrapper title="최근 본 작품">
      {#each playhistory.results as item (item.id)}
        <CollectionItem {...item} />
      {/each}
    </CollectionWrapper>
    <div class="mt-4" />
    {#each recommend as item (item.id)}
      <CollectionList {...item} />
    {/each}
    <!-- {#if $queryResult.data}
      {#each $queryResult.data.data as recommend (recommend.id)}
        <CollectionList {recommend} />
      {/each}
    {/if} -->
  </div>
</div>
