<script lang="ts">
  import type { RecommendModel } from "@/libs/apis/model/main/main.model";
  import CollectionItem from "./CollectionItem.svelte";

  export let recommend: RecommendModel;
</script>

<div class="flex relative flex-col w-full items-start select-none">
  <div class="collection-header">
    <div class="header-title flex flex-row items-center mb-2">
      <span>{recommend.name}</span>
    </div>
  </div>
  <div class="collection-slider relative w-full overflow-hidden">
    <div class="list-wrapper flex w-full flex-wrap">
      {#each recommend.item_list as item (item.id)}
        <CollectionItem {...item} />
      {/each}
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
  .collection-header {
    padding: 0px 3.125em;

    @media (pointer: coarse), (hover: none) {
      padding: 0px 1em;
    }

    .header-title {
      @media (pointer: coarse), (hover: none), (max-width: 480px) {
        -webkit-box-pack: justify;
        justify-content: space-between;
        max-width: 42.25em;
      }

      span {
        font-weight: bold;
        font-size: 1.75em;
        letter-spacing: -0.04285em;
        line-height: 1.46428em;
        padding-right: 0.075em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        color: rgb(18, 18, 18);
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        @media (pointer: coarse), (hover: none), (max-width: 480px) {
          font-size: 1.125em;
          line-height: 1.5em;
          letter-spacing: -0.04444em;
          color: rgb(0, 0, 0);
          -webkit-line-clamp: 2;
        }
      }
    }
  }

  .collection-slider {
    .list-wrapper {
      min-height: 14em;
      overflow-x: visible;
      padding: 0px 3.125em;
      transform: translate3d(0em, 0px, 0px);

      @media (pointer: coarse), (hover: none) {
        min-height: 9.5em;
        padding: 0px 1em;
        overflow-x: auto;
      }
    }
  }
  /* your styles go here */
</style>
