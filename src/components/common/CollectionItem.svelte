<script lang="ts">
  import { link } from "svelte-spa-router";
  import type {
    ContentRating,
    Medium,
  } from "@/libs/apis/model/common/common.model";
  import type { Image } from "@/libs/apis/model/main/main.model";

  export let id: number;
  export let name: string;
  export let images: Image[];
  export let is_adult: boolean;
  export let is_uncensored: boolean;
  export let is_dubbed: boolean;
  export let medium: Medium;
  export let is_laftel_only: boolean;
  export let content_rating: ContentRating;
  export let is_ending: boolean;
  export let genre: string[];
  export let content: string;
  export let avg_rating: number;
  export let is_avod: boolean;
</script>

<!-- markup (zero or more items) goes here -->
<a href="/" class="collection-item" use:link>
  <div class="thumbnail">
    <picture>
      <source srcset={images[0].img_url} type="image/webp" />
      <img src={images[0].img_url} alt={name} />
    </picture>
  </div>
  <!-- <div class="absolute flex flex-row right-2 bottom-2" /> -->
  <div class="footer">
    <span>{name}</span>
  </div>
</a>

<style lang="scss">
  .collection-item {
    flex: 0 0 18.625em;
    width: 18.625em;
    scroll-snap-align: start;
    cursor: pointer;

    /* @media (pointer: coarse), (hover: none), (max-width: 480px) {
      flex: 0 0 12.25em;
      width: 12.25em;
    } */

    .thumbnail {
      position: relative;
      width: 100%;
      height: 10.375em;
      border-radius: 0.25em;
      margin-bottom: 0.25em;
      overflow: hidden;

      /* @media (pointer: coarse), (hover: none), (max-width: 480px) {
        height: 6.875em;
      } */

      img {
        position: absolute;
        width: 100%;
        object-fit: cover;
        height: 10.375em;
        /* @media (pointer: coarse), (hover: none), (max-width: 480px) {
          height: 6.875em;
        } */
      }
    }

    .footer {
      width: 17.75em;
      overflow: hidden;
      height: 3.375em;

      /* @media (pointer: coarse), (hover: none), (max-width: 480px) {
        height: 2.25em;
      }

      @media (pointer: coarse), (hover: none) {
        width: 100%;
        height: 2.625em;
      } */

      span {
        font-size: 1.125em;
        line-height: 1.5em;
        letter-spacing: -0.05em;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        /* @media (pointer: coarse), (hover: none), (max-width: 480px) {
          font-size: 0.8125em;
          line-height: 1.3846em;
        }

        @media (pointer: coarse), (hover: none) {
          font-size: 0.875em;
        } */
      }
    }
  }
</style>
