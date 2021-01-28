<script lang="ts">
  export let width: number = 24;
  export let height: number = 24;
  export let classNames: string = "";
</script>

<svg {width} {height} viewBox="0 0 24 24" class={classNames}
  ><path
    fill="currentColor"
    fill-rule="evenodd"
    stroke="currentColor"
    stroke-width="0.45"
    d="M20.113 16.716c0-.625-.507-1.131-1.136-1.131a1.13 1.13 0 0 1-1.128-1.13V9.548a6.037 6.037 0 1 0-12.075 0v4.909c0 .623-.508 1.129-1.13 1.129-.626 0-1.135.507-1.135 1.131v.378h16.603v-.378m-4.905 1.888a3.396 3.396 0 1 1-6.792 0H3.51c-.834 0-1.51-.675-1.51-1.509v-.379c0-1.329.984-2.429 2.264-2.614V9.547A7.546 7.546 0 0 1 11.811 2a7.547 7.547 0 0 1 7.547 7.547v4.555a2.64 2.64 0 0 1 2.264 2.614v.38c0 .835-.676 1.508-1.51 1.508h-4.905zm-1.51 0H9.925a1.887 1.887 0 1 0 3.774 0z"
  /></svg
>
