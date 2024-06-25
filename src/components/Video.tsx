function Video() {
  return (
    <section
      id="development"
      className="mx-auto flex max-w-2xl flex-col items-center px-8 py-24 text-center lg:max-w-7xl"
    >
      <h2 className="font-title text-lg font-bold">See the work behind</h2>
      <p className="text-sm ">
        Development cycles are not just for big projects
      </p>
      <iframe
        className="mt-8 aspect-square w-full rounded-lg md:aspect-video md:w-3/4"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=fv7P473qmgZZojGI"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Webinar development"
      ></iframe>
    </section>
  );
}

export default Video;
