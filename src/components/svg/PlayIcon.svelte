<script lang="ts">
  export let width: number = 40;
  export let height: number = 40;
  export let classNames: string = "";
  export let fillColor: string = "none";
</script>

<svg {width} {height} viewBox="0 0 40 40" fill={fillColor} class={classNames}
  ><circle cx="20" cy="20" r="20" fill="black" fill-opacity="0.7" /><path
    d="M26.5832 18.9897C27.3609 19.4387 27.3609 20.5614 26.5832 21.0104L17.5832 26.2066C16.8054 26.6556 15.8332 26.0943 15.8332 25.1962L15.8332 14.8039C15.8332 13.9058 16.8054 13.3445 17.5832 13.7935L26.5832 18.9897Z"
    fill="white"
  /></svg
>
