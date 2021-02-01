<script lang="ts">
  export let title = "";
</script>

<div class="collection-list">
  <div class="collection-header">
    <div class="title flex flex-row items-center mb-2">
      <span>{title}</span>
    </div>
  </div>
  <div class="collection-slider">
    <div class="inner flex w-full flex-wrap space-x-2">
      <slot>
        <!-- fallback solt -->
      </slot>
    </div>
  </div>
</div>

<style lang="scss">
  .collection-list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    user-select: none;
    width: 100%;

    .collection-header {
      padding: 0px 3.125em;

      .title {
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        max-width: 75.625em;
        margin-bottom: 0.5em;
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
        }
      }
    }

    .collection-slider {
      position: relative;
      width: 100%;
      overflow: scroll;
      /* overflow: hidden; */

      &::-webkit-scrollbar {
        display: none;
      }
      .inner {
        width: 100%;
        display: flex;
        min-height: 14em;
        overflow-x: visible;
        flex-wrap: nowrap;
        padding: 0px 3.125em;
        transform: translate3d(0em, 0px, 0px);
      }
    }
  }
</style>
