<script lang="ts">
  import type { ItemList } from "@/libs/apis/model/main/main.model";
  import CollectionItem from "./CollectionItem.svelte";
  import CollectionWrapper from "./CollectionWrapper.svelte";

  export let id: string | number;
  export let type: string;
  export let name: string;
  export let item_list: ItemList[];
  console.log(id, type);
</script>

<CollectionWrapper title={name}>
  {#each item_list as item (item.id)}
    <CollectionItem {...item} />
  {/each}
</CollectionWrapper>
