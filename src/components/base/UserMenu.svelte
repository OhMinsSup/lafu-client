<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { link } from "svelte-spa-router";
  import QuestionIcon from "../svg/QuestionIcon.svelte";
  import type { MyInfoModel } from "@/libs/apis/model/main/main.model";
  import { clickOutside } from "@/libs/utils";

  const dispatch = createEventDispatcher();

  const onClickUserMenu = () => {
    console.log("call");
    dispatch("clickOutSide");
  };

  export let openMenu: boolean;
  export let myInfo: MyInfoModel;
  console.log(myInfo);
</script>

<div use:clickOutside={{ enabled: openMenu, cb: onClickUserMenu }}>
  <div class="absolute right-0 top-8">
    <div class="user-menu">
      <div class="user-membership-status">
        <img
          src="https://asset.laftel.net/static/media/pink.1524f338.svg"
          alt="Membership Icon"
        />
        <span class="text">멤버십 이용중</span>
      </div>
      <div class="separator" />
      <div class="user-point">
        <div class="description">보유 포인트</div>
        <div class="point">{myInfo.asset_point} P</div>
      </div>
      <div class="separator" />
      <div class="user-rank">
        <div class="description">
          <span>등급</span>
          <QuestionIcon class="cursor-pointer" />
        </div>
        <div class="rank" style="color: rgb(27, 144, 255);">
          {myInfo.premium_level.name}
        </div>
      </div>
      <div class="separator" />
      <a href="/" use:link> <div class="user-menu-item">내 보관함</div> </a>
      <a href="/" use:link>
        <div class="user-menu-item">설정</div>
      </a>
      <div class="separator" />
      <a href="/" use:link> <div class="user-menu-item">쿠폰 등록</div> </a>
      <a href="/" use:link> <div class="user-menu-item">친구 초대</div> </a>
      <div class="separator" />
      <a href="/" use:link> <div class="user-menu-item">쿠폰 등록</div> </a>
      <a href="/" use:link>
        <div class="user-menu-item">RIDI 계정으로 통합</div>
      </a>
      <div class="user-menu-item">로그아웃</div>
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
  /* your styles go here */
  .user-menu {
    border-radius: 4px;
    width: 12rem;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 8px;
    background: white;
    font-size: 0.875rem;
    color: rgb(40, 42, 53);

    .user-membership-status {
      padding: 1rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      & > img {
        width: 2rem;
        height: auto;
        display: block;
      }

      & > .text {
        margin-left: 0.75rem;
        font-weight: 500;
      }
    }

    .separator {
      width: 100%;
      height: 1px;
      background: rgb(245, 245, 245);
    }

    .user-point {
      padding: 0.5rem 1rem;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      .description {
        color: rgb(117, 117, 117);
        font-size: 0.75rem;
      }

      .point {
        font-weight: 500;
        color: rgb(129, 107, 255);
      }
    }

    .user-rank {
      display: flex;
      padding: 0.5rem 1rem;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;

      .description {
        color: rgb(117, 117, 117);
        font-size: 0.75rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        span {
          margin-right: 0.25rem;
        }

        &:last-child {
          cursor: pointer;
        }
      }

      .rank {
        font-weight: 500;
      }
    }

    .user-menu-item {
      padding: 0.5rem 1rem;
      color: rgb(40, 42, 53);
      font-weight: 600;
      cursor: pointer;
    }
  }
</style>
