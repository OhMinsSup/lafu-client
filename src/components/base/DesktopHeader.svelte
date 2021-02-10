<script lang="ts">
  import { link } from "svelte-spa-router";
  import DownArrowIcon from "../svg/DownArrowIcon.svelte";
  import Logo from "../svg/Logo.svelte";
  import NotificationIcon from "../svg/NotificationIcon.svelte";
  import SearchIcon from "../svg/SearchIcon.svelte";
  import HeaderWrapper from "./HeaderWrapper.svelte";
  import UserMenu from "./UserMenu.svelte";

  let useMenu: boolean = false;
</script>

<HeaderWrapper let:hasScroll>
  <div class="w-full h-16 items-center flex relative pl-12 pr-12">
    <div class="logo-area flex items-center">
      <a class="flex items-center" href="/" use:link>
        {#if hasScroll}
          <Logo />
        {:else}
          <Logo fillColor="#ffff" />
        {/if}
      </a>
    </div>
    <div class="header-links flex relative ml-10 flex-1 space-x-5">
      <a href="/" use:link class:black={hasScroll}>태그검색</a>
      <a href="/" use:link class:black={hasScroll}>요일별 신작</a>
      <a href="/" use:link class:black={hasScroll}>테마추천</a>
      <a href="/" use:link class:black={hasScroll}>멤버십</a>
    </div>
    <div class="right flex items-center ml-auto">
      <div class="icon-wrapper ml-4" class:black={hasScroll}>
        <SearchIcon />
      </div>
      <a
        href="/"
        class="icon-wrapper ml-2 relative"
        use:link
        class:black={hasScroll}
      >
        <NotificationIcon />
        <div class="red-dot" />
      </a>
      <div class="relative ml-6 text-xs header-user-menu">
        <div class="drop-down">
          <div
            class="username font-bold overflow-x-hidden whitespace-nowrap overflow-ellipsis"
            class:text-black={hasScroll}
          >
            오민섭
          </div>
          {#if hasScroll}
            <DownArrowIcon classNames="text-sm" fillColor="#282A35" />
          {:else}
            <DownArrowIcon classNames="text-sm" />
          {/if}
        </div>
        <UserMenu />
      </div>
    </div>
  </div>
</HeaderWrapper>

<style lang="scss">
  .header-user-menu {
    .drop-down {
      cursor: pointer;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: white;
    }

    .username {
      max-width: 8rem;
      font-size: 1rem;
    }
  }

  .header-links {
    transition: color 0.4s ease 0s;
    a {
      color: white;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: -0.025rem;
      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      &:active {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    a.black {
      color: black;
    }
  }

  .icon-wrapper {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: color 0.4s ease 0s;
    cursor: pointer;
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: white;
    }
  }

  .icon-wrapper.black {
    color: black;
  }

  .red-dot {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 7px;
    height: 7px;
    border-radius: 3.5px;
    background: rgb(255, 16, 16);
  }
</style>
