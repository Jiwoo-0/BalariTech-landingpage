import { useEffect } from "react";
import Tags from "./Tags";
import samplePdf from "../assets/services-section/AUDIO EDITING - NARRATIVES.pdf";

const selectedCardClasses = "border-primary bg-white/10";
const defaultCardClasses = "border-white/10 bg-white/5";

const Service_modal = ({
  isOpen,
  services,
  selectedServiceTitle,
  onClose,
  onSelectService,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const selectedService =
    services.find((service) => service.title === selectedServiceTitle) ??
    services[0];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close service modal"
        className="absolute inset-0 bg-black/65"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[min(88vh,980px)] w-full max-w-7xl flex-col gap-6 overflow-hidden rounded-3xl border border-primary bg-secondary p-6 text-white shadow-[0_0px_30px_rgba(0,0,0,0.35)] min-[1024px]:p-8">
        <div className="flex items-start justify-between gap-4">
          <Tags
            text={selectedService.title.toUpperCase()}
            className="bg-primary/10 text-primary"
          />

          <button
            type="button"
            aria-label="Close modal"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-primary hover:text-primary"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-8 w-8 fill-current"
            >
              <path d="m249-207.39-41.61-41.22L438.78-480 207.39-711.39 249-752.61 480.39-521.22 711.78-752.61 753-711.39 521.61-480 753-248.61l-41.22 41.22-231.39-231-231.39 231Z" />
            </svg>
          </button>
        </div>

        <div className="grid flex-1 gap-8 overflow-hidden min-[1024px]:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)]">
          <div className="flex min-h-0 flex-col gap-5 overflow-hidden">
            <div className="space-y-3">
              <h2 className="font-heading text-h1 font-semibold">
                {selectedService.title}
              </h2>
              <p className="max-w-2xl text-small text-white/80">
                Choose the service that fits your current priority. Each option
                keeps the active service visually anchored while the right panel
                previews the sample one-pager.
              </p>
              <div className="h-px bg-white/10" />
              <p className="max-w-2xl text-small text-white/85">
                {selectedService.description}
              </p>
            </div>

            <div className="flex min-h-0 flex-col gap-3 overflow-y-auto pr-1">
              {services.map((service) => {
                const isSelected = service.title === selectedService.title;

                return (
                  <button
                    type="button"
                    key={service.title}
                    onClick={() => onSelectService(service.title)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition hover:border-primary/70 hover:bg-white/8 ${
                      isSelected ? selectedCardClasses : defaultCardClasses
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className="h-7 w-7 fill-current text-primary"
                      >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-440H200v440Zm0-520h560v-40H200v40Z" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1 space-y-2">
                      <div>
                        <h3 className="font-heading text-h4">
                          {service.title}
                        </h3>
                        <p className="text-small text-white/75">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col items-end justify-between gap-1 self-stretch text-small text-white/80">
                      {isSelected ? (
                        <div className="rounded-full bg-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="h-6 w-6 fill-secondary text-primary"
                          >
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                          </svg>
                        </div>
                      ) : (
                        <span className="h-6 w-6" aria-hidden="true" />
                      )}
                      <span>View one-pager</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="">
            <p>Not sure which one fits? <a href="" className="text-primary">We can help you choose.</a></p>
            </div>
          </div>

          <div className="min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
            <iframe
              src={samplePdf}
              title={`${selectedService.title} one-pager preview`}
              className="h-full min-h-[420px] w-full rounded-xl"
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Service_modal;
