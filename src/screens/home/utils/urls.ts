export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export const handleUrl = (url: string) => {
  if (url.indexOf("youtube") > -1) {
    const videoId = getYouTubeVideoId(url);
    return `//www.youtube.com/embed/${videoId}`;
  }
  return url;
};
