<script lang="ts">
  export let width: number = 24;
  export let height: number = 24;
  export let classNames: string = "";
  export let fillColor: string = "currentColor";
</script>

<svg
  class={classNames}
  fill={fillColor}
  preserveAspectRatio="xMidYMid meet"
  {width}
  {height}
  viewBox="0 0 40 40"
  style="vertical-align: middle;"
  ><g><path d="m12.3 13l7.7 7.7 7.7-7.7 2.3 2.4-10 10-10-10z" /></g></svg
>
