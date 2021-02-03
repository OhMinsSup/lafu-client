<script lang="ts">
  export let key: string = "";
  export let value: boolean = false;
  console.log("value", key, value);
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
  <span> ONLY </span>
</label>

<style lang="scss">
  label {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.0625em 0.25em;
    border-radius: 0.25em;
    background-color: rgb(129, 107, 255);
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
