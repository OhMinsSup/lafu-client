<script lang="ts">
  import { onMount } from "svelte";
  import { getScrollTop } from "~/libs/utils";
  let hasScroll: boolean = false;

  const onScroll = () => {
    const scrollTop = getScrollTop();
    if (!scrollTop) {
      hasScroll = false;
      return;
    }
    hasScroll = true;
  };

  onMount(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<div class="fixed top-0 left-0 right-0 z-10">
  <div
    class="relative"
    class:noscroll-header={!hasScroll}
    class:scroll-header={hasScroll}
  >
    <slot {hasScroll} />
  </div>
</div>

<style>
  .noscroll-header {
    transition: background-color 0.4s ease 0s, box-shadow 0.4s ease 0s;
    background-color: transparent;
    box-shadow: transparent 0px 1px 0px 0px;
  }

  .scroll-header {
    transition: background-color 0.4s ease 0s, box-shadow 0.4s ease 0s;
    background-color: white;
    box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
  }
</style>
