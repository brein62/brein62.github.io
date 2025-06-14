/**
 * Returns a horizontal spacing of width specified by the `width` prop. Accepts the props:
 *
 * - width: The amount of spacing width (30px if not specified).
 *
 * @returns A horizontal spacing with a width specified in the props.
 */
export default function Spacing(props: { width: string } | {}) {
  const width = (props as { width: string }).width ?? '30px';

  return <span style={{ display: 'inline-block', width: width }}></span>;
}
