<script lang="ts">
  import isEmpty from "lodash/isEmpty";
  import { link } from "svelte-spa-router";
  import type {
    ContentRating,
    Medium,
  } from "@/libs/apis/model/common/common.model";
  import type { Image } from "@/libs/apis/model/main/main.model";
  import InfoIcon from "../svg/InfoIcon.svelte";
  import PlayIcon from "../svg/PlayIcon.svelte";
  import Badge from "./Badge.svelte";
  import { keyBy } from "lodash";
  import { onMount } from "svelte";

  export let id: number | string = "";
  export let name: string = "";
  export let images: Image[] = [];
  export let is_adult: boolean = false;
  export let is_uncensored: boolean = false;
  export let is_dubbed: boolean = false;
  export let medium: Medium | string = "";
  export let is_laftel_only: boolean = false;
  export let content_rating: ContentRating | string = "";
  export let is_ending: boolean = false;
  export let genre: string[] = [];
  export let content: string = "";
  export let avg_rating: number = 0;
  export let is_avod: boolean = false;
  export let img: string = "";
  export let type: string = "";
  export let last_played_episode_info: any = {};

  let badges: any[] = [];
  onMount(() => {
    const badge = {
      is_dubbed,
      is_uncensored,
      is_adult,
      is_laftel_only,
      is_ending,
      is_avod,
    };

    badges = Object.entries(badge).filter(([k, v]) => v);
  });
</script>

<!-- markup (zero or more items) goes here -->
<div class="collection-item">
  <div class="thumbnail">
    {#if img}
      <picture>
        <source srcset={img} type="image/webp" />
        <img src={img} alt={name} />
      </picture>
    {:else if images.length}
      <picture>
        <source srcset={images[0].img_url} type="image/webp" />
        <img src={images[0].img_url} alt={name} />
      </picture>
    {/if}

    {#if !isEmpty(last_played_episode_info)}
      <div class="play-history-control">
        <div class="play-history-len absolute rounded">
          <!-- progress -->
          <div class="progress absolute h-full rounded" />
        </div>
        <div class="play-history-hover absolute w-full h-full" />
        <PlayIcon />
      </div>
    {:else}
      <div class="absolute right-1 bottom-1 flex flex-row space-x-2">
        {#each badges as [k, v], key (key)}
          <Badge key={k} value={v} />
        {/each}
      </div>
    {/if}
  </div>
  <!-- <div class="absolute flex flex-row right-2 bottom-2" /> -->
  <a href="/" class="footer flex justify-between" use:link>
    <div class="flex flex-col">
      <span class="play-history-title">{name}</span>
      {#if !isEmpty(last_played_episode_info)}
        <span class="play-history-title font-bold"
          >{last_played_episode_info.episode_num}화</span
        >
      {/if}
    </div>
    {#if !isEmpty(last_played_episode_info)}
      <div class="pl-4 pr-2 pt-1">
        <InfoIcon />
      </div>
    {/if}
  </a>
</div>

<style lang="scss">
  .collection-item {
    flex: 0 0 18.625em;
    width: 18.625em;
    scroll-snap-align: start;
    cursor: pointer;

    .thumbnail {
      position: relative;
      width: 100%;
      height: 10.375em;
      border-radius: 0.25em;
      margin-bottom: 0.25em;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        object-fit: cover;
        height: 10.375em;
      }
    }

    .play-history-control {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.8) 100%
      );

      .play-history-len {
        left: 0.75em;
        right: 0.75em;
        bottom: 0.75em;
        height: 0.375em;
        background-color: rgb(224, 224, 224);
        .progress {
          background-color: rgb(129, 107, 255);
          width: 43%;
        }
      }
    }

    .footer {
      width: 100%;
      overflow: hidden;
      height: 3.375em;

      .play-history-title {
        font-size: 1em;
        line-height: 1em;
        letter-spacing: -0.05em;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .play-history-info-icon {
      }
    }
  }
</style>
