/**
 * Returns a main page divider that separates MainPageSection objects within the main page, rendered
 * as a horizontal rule with 1em padding on the top and bottom.
 *
 * @returns A component representing a main page divider.
 */
export default function MainPageDivider() {
  return (
    <>
      <div style={{ padding: '1em' }}></div>
      <hr />
      <div style={{ padding: '1em' }}></div>
    </>
  );
}
