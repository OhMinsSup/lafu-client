<script lang="ts">
  // your script goes here
</script>

<div>
  <div class="absolute right-0 top-8">
    <div class="user-menu">
      <div class="user-membership-status">
        <img src="https://asset.laftel.net/static/media/pink.1524f338.svg" />
        <span class="text">멤버십 이용중</span>
      </div>
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
  }
</style>
