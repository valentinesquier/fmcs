export default function IClosedInline() {
  return (
    <div
      id="rdv"
      className="scroll-mt-20 mt-6 w-screen relative left-1/2 -translate-x-1/2"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <iframe
          src="https://app.iclosed.io/e/fit-mass-formation/fmcs-candidature-g"
          title="FMCS - Candidature (G)"
          className="w-full h-[1000px] md:h-[620px] border-0"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
