export default function GoogleMap() {
  return (
    <section className="bg-[#fdf9f6] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-min">
        <div className="overflow-hidden border border-[#d8cfc8]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4377.723133863897!2d-94.67191312803112!3d39.117448997386596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1787295828088!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border:0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
