<script lang="ts">
  export let key: string = "";
  export let value: boolean = false;

  let name: string = "";
  let violet: boolean = false;

  $: if (key && value) update(key, value);

  function update(key: string, value: boolean) {
    if (key === "is_laftel_only" && value) {
      name = "ONLY";
      violet = true;
    } else if (key === "is_dubbed" && value) {
      name = "더빙";
    } else if (key === "is_uncensored" && value) {
      name = "무삭제";
    } else if (key === "is_ending" && value) {
      name = "완결";
    } else if (key === "is_adult" && value) {
      name = "성인";
    } else if (key === "is_avod" && value) {
      name = "AOD";
    }
  }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class:violet>
  <span> {name} </span>
</label>

<!-- svelte-ignore a11y-label-has-associated-control -->
<style lang="scss">
  label {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.0625em 0.25em;
    border-radius: 0.25em;
    background-color: rgb(50, 50, 50);
    &.violet {
      background-color: rgb(129, 107, 255);
    }

    span {
      font-weight: bold;
      font-size: 0.875em;
      line-height: 1.5em;
      letter-spacing: -0.02142em;
      text-align: center;
      color: white;
    }
  }
</style>
