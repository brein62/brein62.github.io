/**
 * An effect to scroll to the specified anchor in the URL, or the top of the page.
 *
 * - Example usage:
 *   ```useEffect(AnchorScroll, []);```
 *    - Triggers the scroll animation to the specified anchor, or the top of the page, on page loads.
 */
export const AnchorScroll = () => {
  // if anchor exists
  if (document.location.hash) {
    // go to anchor and scroll to anchor after 200ms
    const aa = document.getElementById(document.location.hash.split('#')[2]);
    setTimeout(() => {
      if (aa !== null) {
        aa.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }, 200);
  }
};
