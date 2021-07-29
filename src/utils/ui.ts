export const keepSamePositionInsideList = (
  container: HTMLDivElement | null
) => {
  if (!container) {
    return;
  }
  const curScrollPos = container.scrollTop;
  const oldScroll = container.scrollHeight - container.clientHeight;

  setTimeout(() => {
    const newScroll = container.scrollHeight - container.clientHeight;
    container.scrollTop = curScrollPos + (newScroll - oldScroll);
  }, 0);
};
