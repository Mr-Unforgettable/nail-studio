import {FaInstagram, FaFacebookF, FaXTwitter} from "react-icons/fa6";

export default function ContactForm() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl">Contact</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#6b5e55]">
              Have a question or need more information? I'd love to hear from
              you.
            </p>

            {/* Social/Contact links */}
            <div className="mt-8">
              <a
                href="#"
                className="flex items-center gap-3 border-b border-[#d8cfc8] py-4"
              >
                <FaInstagram size={18} />
                <span className="font-semibold text-sm">_sarah.johnson_</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border-b border-[#d8cfc8] py-4"
              >
                <FaFacebookF size={18} />
                <span className="font-semibold text-sm">Sarah Johnson</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border-b border-[#d8cfc8] py-4"
              >
                <FaXTwitter size={18} />
                <span className="font-semibold text-sm">@sarah2069</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-md border border-[#d8cfc8] bg-white/40 p-6 sm:p-8">
            <h2 className="font-semibold text-2xl">Contact me</h2>

            <form className="mt-8 flex flex-col gap-5">
              {/* First + Last name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-[#292929]"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="mt-2 w-full rounded-md border border-[#d8cfc8] bg-white px-4 py-3 outline-none transition focus:border-[#b89c85]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-[#292929]"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="mt-2 w-full rounded-md border border-[#d8cfc8] bg-white px-4 py-3 outline-none transition focus:border-[#b89c85]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#292929]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-[#d8cfc8] bg-white px-4 py-3 outline-none transition focus:border-[#b89c85]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#292929]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-md border border-[#d8cfc8] bg-white px-4 py-3 outline-none transition focus:border-[#b89c85]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#b89c85] px-6 py-3 text-sm font-medium text-[#242424] transition hover:bg-[#b58c6b]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
