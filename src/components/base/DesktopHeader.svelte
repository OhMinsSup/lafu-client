<script lang="ts">
  import { link } from "svelte-spa-router";
  import Logo from "../svg/Logo.svelte";
  import HeaderWrapper from "./HeaderWrapper.svelte";
</script>

<HeaderWrapper>
  <div class="w-full h-16 items-center flex relative pl-12 pr-12">
    <div class="logo-area flex items-center">
      <a class="flex items-center" href="/" use:link>
        <Logo fillColor="#ffff" />
      </a>
    </div>
    <div class="header-links flex relative ml-10 flex-1 space-x-5">
      <a href="/" use:link>태그검색</a>
      <a href="/" use:link>요일별 신작</a>
      <a href="/" use:link>테마추천</a>
      <a href="/" use:link>멤버십</a>
    </div>
    <div class="right flex items-center ml-auto">right</div>
  </div>
</HeaderWrapper>

<style lang="scss">
  .header-links {
    transition: color 0.4s ease 0s;
    a {
      color: white;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: -0.025rem;
    }
  }
</style>
