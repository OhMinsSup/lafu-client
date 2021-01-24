<script lang="ts">
  import MenuIcon from "../svg/MenuIcon.svelte";
  import SearchIcon from "../svg/SearchIcon.svelte";
</script>

<div class="fixed top-0 left-0 right-0 z-10">
  <div class="relative bg-transparent shadow-sm header-shadow">
    <div class="h-12 relative flex px-4 z-20 items-center justify-center">
      <div class="absolute right-4 flex justify-center items-center">
        <SearchIcon
          width={24}
          height={24}
          classNames="z-1 cursor-pointer text-white transition-colors"
        />
        <MenuIcon
          width={44}
          height={17}
          classNames="z-1 ml-4 cursor-pointer menu-icon"
        />
      </div>
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
  .header-shadow {
    box-shadow: transparent 0px 1px 0px 0px;
  }

  :global(.menu-icon g) {
    transition: fill 0.4s ease 0s;
    fill: white;
  }

  :global(.menu-icon g path:first-child) {
    transition: stroke 0.4s ease 0s;
    stroke: white !important;
  }
</style>
